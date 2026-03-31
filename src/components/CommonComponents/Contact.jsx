import { db } from "../../firebase";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import Container from "../../shared/Container";
import { FileUpload } from "../SvgContainer/SvgContainer";
import CustomDropdown from "../CustomComponents/CustomDropDown";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


const Contact = ({
  title = "CONTATTACI PER IL TUO PROGETTO.",
  description = "Stampa 3D professionale per prototipazione e produzione.Ampia scelta di materiali e consegna veloce, anche in 24 ore.",
}) => {
  const [formData, setFormData] = useState({
    name: "", surname: "", email: "", subject: "",
    countryCode: "", phone: "", service: "", message: "", file: null,
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 10 * 1024 * 1024) {
      alert("File size must be under 10MB");
      return;
    }
    setFormData({ ...formData, file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      // ✅ Upload file to Cloudinary
      let fileURL = "No file uploaded";
      let fileName = "No file";

      if (formData.file) {
        fileName = formData.file.name;

        const cloudinaryData = new FormData();
        cloudinaryData.append("file", formData.file);
        cloudinaryData.append("upload_preset", "stefano_uploads"); // ✅ your preset
        cloudinaryData.append("cloud_name", "dyuqrepwj");          // ✅ your cloud name

        const cloudinaryRes = await fetch(
          "https://api.cloudinary.com/v1_1/dyuqrepwj/auto/upload", // ✅ your cloud name
          {
            method: "POST",
            body: cloudinaryData,
          }
        );

        const cloudinaryJson = await cloudinaryRes.json();
        fileURL = cloudinaryJson.secure_url; // ✅ real viewable/downloadable link
      }

      // ✅ Save to Firestore with real file URL
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        subject: formData.subject,
        countryCode: formData.countryCode,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        fileURL: fileURL,
        fileName: fileName,
        createdAt: serverTimestamp(),
      });

      // ✅ Send email via EmailJS with real file link
      await emailjs.send(
        "service_madniod",
        "template_9q8zhbi",
        {
          from_name: formData.name,
          surname: formData.surname,
          from_email: formData.email,
          subject: formData.subject,
          country_code: formData.countryCode,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          file_name: fileURL,
        },
        "XrpBmbTJztTtJrP2f"
      );

      setStatus("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "", surname: "", email: "", subject: "",
        countryCode: "", phone: "", service: "", message: "", file: null,
      });

    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const serviceOptions = [
    { value: "high-precision-3d-printing", label: "High-Precision 3D Printing" },
    { value: "advanced-3d-modelling", label: "Advanced 3D Modelling & Engineering" },
    { value: "ready-to-order-catalogs", label: "Ready-to-Order Specialized Catalogs" },
    { value: "technical-consulting", label: "Technical Consulting & Material Expertise" },
    { value: "2d-to-3d-conversion", label: "2D-to-3D Conversion & Digital Reconstruction" },
    { value: "3d-scanning-reverse-engineering", label: "Professional 3D Scanning & Reverse Engineering" },
  ];

  return (
    <section className="h-auto lg:pt-21 pt-8 w-full">
      <Container>
        <div className="flex xl:flex-row flex-col justify-between gap-x-26.5 items-center">
          <div className="xl:max-w-162 w-full">
            <h2 className="leading-[123%] lg:text-4xl text-2xl font-normal text-black pb-5">
              {title}
            </h2>
            <span className="text-black/50 opacity-64 xl:text-base text-sm font-light leading-[133%]">
              {description}
            </span>
          </div>

          <form
            className="flex flex-col w-full relative gap-y-6 xl:pt-0 pt-5"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-row gap-x-6 items-center">
                <input
                  type="text" name="name" placeholder="Name"
                  className="common-input"
                  value={formData.name} onChange={handleChange} required
                />
                <input
                  type="text" name="surname" placeholder="Surname"
                  className="common-input"
                  value={formData.surname} onChange={handleChange} required
                />
              </div>

              <div className="flex sm:flex-row flex-col w-full gap-6 items-center">
                <input
                  type="email" name="email" placeholder="Email"
                  className="common-input"
                  value={formData.email} onChange={handleChange} required
                />
                <input
                  type="text" name="subject" placeholder="Subject"
                  className="common-input"
                  value={formData.subject} onChange={handleChange} required
                />
              </div>

              <div className="flex sm:flex-row flex-col w-full gap-x-6 items-center">
                <input
                  type="text" name="countryCode" placeholder="Country Code"
                  className="common-input sm:w-[60%] w-full xl:mb-0 mb-5"
                  value={formData.countryCode} onChange={handleChange} required
                />
                <input
                  type="text" name="phone" placeholder="Phone number"
                  className="common-input"
                  value={formData.phone} onChange={handleChange} required
                />
              </div>

              <CustomDropdown
                options={serviceOptions}
                placeholder="Select service category"
                required
                onChange={(value) => setFormData({ ...formData, service: value })}
              />

              <textarea
                name="message" placeholder="Message"
                className="common-input min-h-[146px]"
                value={formData.message} onChange={handleChange} required
              />

              <div className="relative h-auto w-full lg:py-10 py-5 px-4 rounded-xl flex items-center justify-center cursor-pointer border-2 border-gray-300">
                <div className="flex flex-col gap-y-4 sm:gap-y-5 items-center pointer-events-none">
                  <FileUpload />
                  <span className="text-[15px] sm:text-sm md:text-base font-normal leading-[133%] text-black text-center">
                    {formData.file ? formData.file.name : "Upload Your Design"}
                  </span>
                </div>
                <input
                  type="file"
                  className="absolute top-0 left-0 h-full w-full rounded-xl opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            {status && (
              <p className={`text-sm font-medium text-center ${status.startsWith("✅") ? "text-red-600" : "text-green-500"}`}>
                {status}
              </p>
            )}

            <button
              className="h-auto w-full flex bg-black text-white items-center justify-center 
              rounded-3xl xl:py-6 py-3 cursor-pointer border border-transparent 
              hover:border-solid hover:bg-transparent hover:border-black hover:text-black 
              ease-in-out duration-500 text-lg leading-[177%] font-medium capitalize
              disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
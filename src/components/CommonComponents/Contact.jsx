import { db } from "../../firebase";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import Container from "../../shared/Container";
import { FileUpload } from "../SvgContainer/SvgContainer";
import CustomDropdown from "../CustomComponents/CustomDropDown";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contact = ({
  title = "CONTATTACI PER IL TUO PROGETTO.",
  description = "Stampa 3D professionale per prototipazione e produzione. Ampia scelta di materiali e consegna veloce, anche in 24 ore.",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    subject: "",
    countryCode: "",
    phone: "",
    service: "",
    message: "",
    file: null,
    privacyAccepted: false,
    marketingAccepted: false,
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Helper to show red border
  const getErrorClass = (value) => {
    return isSubmitted && !value ? "border-red-500" : "border-gray-300";
  };

  // Helper to show "Field is required" text
  const ErrorText = ({ value }) => {
    if (isSubmitted && !value) {
      return <span className="text-red-500 text-[10px] absolute -bottom-5 left-0 italic font-medium">Campo obbligatorio</span>;
    }
    return null;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
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
    setIsSubmitted(true);

    const isFormValid =
      formData.name && formData.surname && formData.email &&
      formData.subject && formData.countryCode && formData.phone &&
      formData.service && formData.message && formData.privacyAccepted;

    if (!isFormValid) {
      setStatus("Per favore, compila tutti i campi obbligatori.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      let fileURL = "No file uploaded";
      let fileName = "No file";

      if (formData.file) {
        fileName = formData.file.name;
        const cloudinaryData = new FormData();
        cloudinaryData.append("file", formData.file);
        cloudinaryData.append("upload_preset", "stefano_uploads");
        cloudinaryData.append("cloud_name", "dyuqrepwj");

        const cloudinaryRes = await fetch(
          "https://api.cloudinary.com/v1_1/dyuqrepwj/auto/upload",
          { method: "POST", body: cloudinaryData }
        );

        const cloudinaryJson = await cloudinaryRes.json();
        fileURL = cloudinaryJson.secure_url;
      }

      await addDoc(collection(db, "contacts"), {
        ...formData,
        fileURL,
        fileName,
        createdAt: serverTimestamp(),
      });

      await emailjs.send(
        "service_madniod",
        "template_9q8zhbi",
        {
          ...formData,
          from_name: formData.name,
          from_email: formData.email,
          file_name: fileURL,
          privacy_consent: formData.privacyAccepted ? "Accepted" : "Declined",
          marketing_consent: formData.marketingAccepted ? "Accepted" : "Declined",
        },
        "XrpBmbTJztTtJrP2f"
      );

      setStatus("Message sent successfully!");
      setIsSubmitted(false);
      setFormData({
        name: "", surname: "", email: "", subject: "", countryCode: "",
        phone: "", service: "", message: "", file: null,
        privacyAccepted: false, marketingAccepted: false,
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
            <h2 className="leading-[123%] lg:text-4xl text-2xl font-normal text-black pb-5">{title}</h2>
            <span className="text-black/50 opacity-64 xl:text-base text-sm font-light">{description}</span>
          </div>

          <form className="flex flex-col w-full relative gap-y-6 xl:pt-0 pt-5" onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-y-8">
              {/* Row 1 */}
              <div className="flex flex-row gap-x-6 items-center">
                <div className="relative w-full">
                  <input type="text" name="name" placeholder="Name" className={`common-input border-b ${getErrorClass(formData.name)}`} value={formData.name} onChange={handleChange} />
                  <ErrorText value={formData.name} />
                </div>
                <div className="relative w-full">
                  <input type="text" name="surname" placeholder="Surname" className={`common-input border-b ${getErrorClass(formData.surname)}`} value={formData.surname} onChange={handleChange} />
                  <ErrorText value={formData.surname} />
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex sm:flex-row flex-col w-full gap-6 items-center">
                <div className="relative w-full">
                  <input type="email" name="email" placeholder="Email" className={`common-input border-b ${getErrorClass(formData.email)}`} value={formData.email} onChange={handleChange} />
                  <ErrorText value={formData.email} />
                </div>
                <div className="relative w-full">
                  <input type="text" name="subject" placeholder="Subject" className={`common-input border-b ${getErrorClass(formData.subject)}`} value={formData.subject} onChange={handleChange} />
                  <ErrorText value={formData.subject} />
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex sm:flex-row flex-col w-full gap-x-6 items-center">
                <div className="relative sm:w-[60%] w-full">
                  <input type="text" name="countryCode" placeholder="Country Code" className={`common-input border-b w-full ${getErrorClass(formData.countryCode)}`} value={formData.countryCode} onChange={handleChange} />
                  <ErrorText value={formData.countryCode} />
                </div>
                <div className="relative w-full sm:mt-0 mt-8">
                  <input type="text" name="phone" placeholder="Phone number" className={`common-input border-b ${getErrorClass(formData.phone)}`} value={formData.phone} onChange={handleChange} />
                  <ErrorText value={formData.phone} />
                </div>
              </div>

              {/* Dropdown */}
              <div className="relative">
                <div className={`transition-all duration-300 rounded-lg ${isSubmitted && !formData.service ? "border border-red-500" : ""}`}>
                  <CustomDropdown options={serviceOptions} placeholder="Select service category" onChange={(value) => setFormData({ ...formData, service: value })} />
                </div>
                <ErrorText value={formData.service} />
              </div>

              {/* Textarea */}
              <div className="relative">
                <textarea name="message" placeholder="Message" className={`common-input border-b min-h-[146px] ${getErrorClass(formData.message)}`} value={formData.message} onChange={handleChange} />
                <ErrorText value={formData.message} />
              </div>

              {/* Design Upload (Design remains same, no red line) */}
              <div className="relative h-auto w-full lg:py-10 py-5 px-4 rounded-xl flex items-center justify-center cursor-pointer border-2 border-gray-300 hover:border-black transition-colors">
                <div className="flex flex-col gap-y-4 items-center pointer-events-none">
                  <FileUpload />
                  <span className="text-[15px] sm:text-sm md:text-base font-normal text-black text-center">
                    {formData.file ? formData.file.name : "Upload Your Design"}
                  </span>
                </div>
                <input
                  type="file"
                  className="absolute top-0 left-0 h-full w-full rounded-xl opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                  accept=".stl,.obj,.jpeg,.jpg,.png"
                />
              </div>

              {/* Checkboxes */}
              <div className="flex flex-col gap-y-4 pt-2">
                <div className="relative">
                  <label className={`flex items-start gap-x-3 cursor-pointer group p-1 rounded transition-colors ${isSubmitted && !formData.privacyAccepted ? "bg-red-50" : ""}`}>
                    <input type="checkbox" name="privacyAccepted" className="mt-1 w-4 h-4 accent-black" checked={formData.privacyAccepted} onChange={handleChange} />
                    <span className={`text-sm leading-snug ${isSubmitted && !formData.privacyAccepted ? "text-red-600 font-medium" : "text-black/70"}`}>
                      *Ho letto l'informativa privacy e acconsento al trattamento dei dati personali ai sensi del Regolamento UE 2016/679
                    </span>
                  </label>
                  {isSubmitted && !formData.privacyAccepted && <span className="text-red-500 text-[10px] absolute -bottom-4 left-1">Devi accettare la privacy</span>}
                </div>

                <label className="flex items-start gap-x-3 cursor-pointer group p-1">
                  <input type="checkbox" name="marketingAccepted" className="mt-1 w-4 h-4 accent-black" checked={formData.marketingAccepted} onChange={handleChange} />
                  <span className="text-sm text-black/70 leading-snug">
                    *Acconsento a ricevere comunicazioni commerciali e newsletter
                  </span>
                </label>
              </div>
            </div>

            {status && (
              <p className={`text-sm font-medium text-center ${status.includes("successfully") ? "text-green-500" : "text-red-600"}`}>
                {status}
              </p>
            )}

            <button
              className="h-auto w-full flex bg-black text-white items-center justify-center rounded-3xl xl:py-6 py-3 hover:bg-transparent hover:border-black hover:text-black border border-transparent transition-all duration-500 text-lg font-medium"
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
import { db } from "../firebase";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import Container from "../shared/Container";
import CustomDropdown from "../components/CustomComponents/CustomDropDown";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Newsletter = ({
  title = "SUBSCRIBE TO OUR NEWSLETTER",
  description = "Stay updated with our latest services, offers, and 3D printing solutions. Subscribe to our newsletter by filling out the form below.",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    service: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const serviceOptions = [
    { value: "fdm", label: "FDM" },
    { value: "sla", label: "SLA" },
    { value: "sls", label: "SLS" },
    { value: "high-precision-3d-printing", label: "High-Precision 3D Printing" },
    { value: "advanced-3d-modelling", label: "Advanced 3D Modelling & Engineering" },
    { value: "technical-consulting", label: "Technical Consulting & Material Expertise" },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await addDoc(collection(db, "newsletter_subscribers"), {
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        createdAt: serverTimestamp(),
      });

      await emailjs.send(
        "service_madniod",
        "template_9q8zhbi",
        {
          from_name: formData.name,
          surname: formData.surname,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          subject: "Newsletter Subscription",
          message: `New newsletter subscription from ${formData.name} ${formData.surname}. Preferred service: ${formData.service}. Phone: ${formData.phone}`,
        },
        "XrpBmbTJztTtJrP2f"
      );

      setStatus("Subscribed successfully! Thank you for joining our newsletter.");
      setFormData({
        name: "",
        surname: "",
        email: "",
        phone: "",
        service: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="h-auto lg:pt-21 pt-8 w-full mt-34">
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
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="common-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  className="common-input"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <input
                  type="email"
                  name="email"
                  placeholder="Mail"
                  className="common-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  className="common-input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <CustomDropdown
                options={serviceOptions}
                placeholder="Preferred service"
                required
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    service: value,
                  }))
                }
              />
            </div>

            {status && (
              <p
                className={`text-sm font-medium text-center ${
                  status.toLowerCase().includes("successfully")
                    ? "text-green-500"
                    : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}

            <button
              className="h-auto w-full flex bg-black text-white items-center justify-center  mb-6
              rounded-3xl xl:py-6 py-3 cursor-pointer border border-transparent 
              hover:border-solid hover:bg-transparent hover:border-black hover:text-black 
              ease-in-out duration-500 text-lg leading-[177%] font-medium capitalize
              disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Subscribe to newsletter"}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
import { db } from "../firebase";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import Container from "../shared/Container";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import CustomDropdown from "../components/CustomComponents/CustomDropDown";

const Newsletter = ({
  title = "ISCRIVITI ALLA NEWSLETTER",
  description = "Resta aggiornato, scopri novità, offerte e soluzioni di stampa 3D. Iscriviti alla nostra newsletter compilando il modulo.",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    country: "", 
    city: "",
    companyName: "",
    service: "",
    category: "",
    privacyAccepted: false,
    marketingAccepted: false,
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Helper for red line validation
  const getErrorClass = (value) => {
    return isSubmitted && !value ? "border-red-500" : "border-gray-300";
  };

  // Helper for error text
  const ErrorText = ({ value }) => {
    if (isSubmitted && !value) {
      return <span className="text-red-500 text-[10px] absolute -bottom-5 left-0 italic font-medium">Campo obbligatorio</span>;
    }
    return null;
  };

  const serviceOptions = [
    { value: "fdm", label: "FDM" },
    { value: "sla", label: "SLA" },
    { value: "sls", label: "SLS" },
    { value: "high-precision-3d-printing", label: "High-Precision 3D Printing" },
    { value: "advanced-3d-modelling", label: "Advanced 3D Modelling & Engineering" },
    { value: "technical-consulting", label: "Technical Consulting & Material Expertise" },
  ];

  const categorisOptions = [
    { value: "drone", label: "DRONI & COMPONENTI UAV" },
    { value: "vintage", label: "AUTOMOTIVE D'EPOCA E PARTI RARE" },
    { value: "yacht", label: "YACHT E COMPONENTI NAUTICHE" },
    { value: "medicale-lab", label: "MEDICALE, LAB & BIOTECH" },
    { value: "industrial", label: "DIME E COMPONENTI INDUSTRIALI" },
    { value: "architettura", label: "ARCHITETTURA" },
    { value: "vetemarysupports", label: "SUPPORTI VETERINARI" },
    { value: "jwellery", label: "GIOIELLERIA" },
    { value: "footwear", label: "FASHION & FOOTWEAR" },
    { value: "prototyping", label: "PROTOTIPI E PRODOTTI CUSTOM" },
    { value: "alimentare", label: "ALIMENTARE" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const isFormValid =
      formData.name && formData.surname && formData.email &&
      formData.phone && formData.country && formData.city &&
      formData.companyName && formData.service &&
      formData.category && formData.privacyAccepted;

    if (!isFormValid) {
      setStatus("Per favore, compila tutti i campi obbligatori.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await addDoc(collection(db, "newsletter_subscribers"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      await emailjs.send(
        "service_madniod",
        "template_48zi4ta",
        {
          ...formData,
          from_name: formData.name,
          from_email: formData.email,
          privacy_consent: formData.privacyAccepted ? "Accepted" : "Declined",
          marketing_consent: formData.marketingAccepted ? "Accepted" : "Declined",
        },
        "XrpBmbTJztTtJrP2f"
      );

      setStatus("Subscribed successfully!");
      setIsSubmitted(false);
      setFormData({
        name: "", surname: "", email: "", phone: "", country: "", city: "",
        companyName: "", service: "", category: "",
        privacyAccepted: false, marketingAccepted: false,
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
            <h2 className="leading-[123%] lg:text-4xl text-2xl font-normal text-black pb-5">{title}</h2>
            <span className="text-black/50 opacity-64 xl:text-base text-sm font-light leading-[133%]">{description}</span>
          </div>

          <form className="flex flex-col w-full relative gap-y-6 xl:pt-0 pt-5" onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-y-8">
              {/* Name & Surname */}
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="relative w-full">
                  <input type="text" name="name" placeholder="Name" className={`common-input border-b ${getErrorClass(formData.name)}`} value={formData.name} onChange={handleChange} />
                  <ErrorText value={formData.name} />
                </div>
                <div className="relative w-full">
                  <input type="text" name="surname" placeholder="Surname" className={`common-input border-b ${getErrorClass(formData.surname)}`} value={formData.surname} onChange={handleChange} />
                  <ErrorText value={formData.surname} />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="relative w-full">
                  <input type="email" name="email" placeholder="Mail" className={`common-input border-b ${getErrorClass(formData.email)}`} value={formData.email} onChange={handleChange} />
                  <ErrorText value={formData.email} />
                </div>
                <div className="relative w-full">
                  <input type="text" name="phone" placeholder="Phone number" className={`common-input border-b ${getErrorClass(formData.phone)}`} value={formData.phone} onChange={handleChange} />
                  <ErrorText value={formData.phone} />
                </div>
              </div>

              {/* Country & City */}
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="relative w-full">
                  <input type="text" name="country" placeholder="Country" className={`common-input border-b ${getErrorClass(formData.country)}`} value={formData.country} onChange={handleChange} />
                  <ErrorText value={formData.country} />
                </div>
                <div className="relative w-full">
                  <input type="text" name="city" placeholder="City" className={`common-input border-b ${getErrorClass(formData.city)}`} value={formData.city} onChange={handleChange} />
                  <ErrorText value={formData.city} />
                </div>
              </div>

              {/* Dropdown: Service */}
              <div className="relative">
                <div className={`transition-all duration-300 rounded-lg ${isSubmitted && !formData.service ? "border border-red-500" : ""}`}>
                  <CustomDropdown options={serviceOptions} placeholder="Preferred service" onChange={(value) => setFormData((prev) => ({ ...prev, service: value }))} />
                </div>
                <ErrorText value={formData.service} />
              </div>

              {/* Dropdown: Category */}
              <div className="relative">
                <div className={`transition-all duration-300 rounded-lg ${isSubmitted && !formData.category ? "border border-red-500" : ""}`}>
                  <CustomDropdown options={categorisOptions} placeholder="Category List" onChange={(value) => setFormData((prev) => ({ ...prev, category: value }))} />
                </div>
                <ErrorText value={formData.category} />
              </div>

              {/* Company Name */}
              <div className="relative w-full">
                <input type="text" name="companyName" placeholder="Nome Azienda" className={`common-input border-b ${getErrorClass(formData.companyName)}`} value={formData.companyName} onChange={handleChange} />
                <ErrorText value={formData.companyName} />
              </div>

              {/* Consent Checkboxes */}
              <div className="flex flex-col gap-y-4 pt-2">
                <div className="relative">
                  <label className={`flex items-start gap-x-3 cursor-pointer group p-1 rounded transition-colors ${isSubmitted && !formData.privacyAccepted ? "bg-red-50" : ""}`}>
                    <input type="checkbox" name="privacyAccepted" className="mt-1 w-4 h-4 accent-black" checked={formData.privacyAccepted} onChange={handleChange} />
                    <span className={`text-sm leading-snug ${isSubmitted && !formData.privacyAccepted ? "text-red-600 font-medium" : "text-black/70"}`}>
                      *Ho letto l'informativa privacy e acconsento al trattamento dei dati personali ai sensi del Regolamento UE 2016/679
                    </span>
                  </label>
                  {isSubmitted && !formData.privacyAccepted && <span className="text-red-500 text-[10px] absolute -bottom-4 left-1 italic">Devi accettare la privacy</span>}
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
              <p className={`text-sm font-medium text-center ${status.toLowerCase().includes("successfully") ? "text-green-500" : "text-red-600"}`}>
                {status}
              </p>
            )}

            <button
              className="h-auto w-full flex bg-black text-white items-center justify-center mb-6 rounded-3xl xl:py-6 py-3 hover:bg-transparent hover:border-black hover:text-black border border-transparent transition-all duration-500 text-lg font-medium"
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
import { db } from "../firebase";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import Container from "../shared/Container";
import CustomDropdown from "../components/CustomComponents/CustomDropDown";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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
    privacyAccepted: false, // Mandatory Box
    marketingAccepted: false, // Newsletter/Marketing Box
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

    // Validation for mandatory privacy checkbox
    if (!formData.privacyAccepted) {
      setStatus("Per favore, accetta l'informativa sulla privacy.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      // Save to Firestore
      await addDoc(collection(db, "newsletter_subscribers"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      // Send via EmailJS
      await emailjs.send(
        "service_madniod",
        "template_48zi4ta",
        {
          from_name: formData.name,
          surname: formData.surname,
          from_email: formData.email,
          phone: formData.phone,
          country: formData.country,
          city: formData.city,
          company_name: formData.companyName,
          service: formData.service,
          category: formData.category,
          privacy_consent: formData.privacyAccepted ? "Accepted" : "Declined",
          marketing_consent: formData.marketingAccepted ? "Accepted" : "Declined",
          subject: "Newsletter Subscription",
          message: `New newsletter subscription from ${formData.name} ${formData.surname}.`,
        },
        "XrpBmbTJztTtJrP2f"
      );

      setStatus("Subscribed successfully! Thank you for joining our newsletter.");
      setFormData({
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

              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  className="common-input"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="common-input"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <CustomDropdown
                options={serviceOptions}
                placeholder="Preferred service"
                required
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, service: value }))
                }
              />

              <CustomDropdown
                options={categorisOptions}
                placeholder="Category List"
                required
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, category: value }))
                }
              />

              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Nome Azienda"
                  className="common-input"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Consent Checkboxes */}
              <div className="flex flex-col gap-y-4 pt-2">
                <label className="flex items-start gap-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="privacyAccepted"
                    className="mt-1 w-4 h-4 accent-black cursor-pointer"
                    checked={formData.privacyAccepted}
                    onChange={handleChange}
                  />
                  <span className="text-sm text-black/70 leading-snug group-hover:text-black transition-colors">
                    Ho letto l'informativa privacy e acconsento al trattamento dei dati personali ai sensi del Regolamento UE 2016/679
                  </span>
                </label>

                <label className="flex items-start gap-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="marketingAccepted"
                    className="mt-1 w-4 h-4 accent-black cursor-pointer"
                    checked={formData.marketingAccepted}
                    onChange={handleChange}
                  />
                  <span className="text-sm text-black/70 leading-snug group-hover:text-black transition-colors">
                    Acconsento a ricevere comunicazioni commerciali e newsletter
                  </span>
                </label>
              </div>
            </div>

            {status && (
              <p
                className={`text-sm font-medium text-center ${status.toLowerCase().includes("successfully")
                    ? "text-green-500"
                    : "text-red-600"
                  }`}
              >
                {status}
              </p>
            )}

            <button
              className="h-auto w-full flex bg-black text-white items-center justify-center mb-6
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
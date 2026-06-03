import { useState } from "react";
import { contactForm, brand } from "../../data/siteData";
import { isValidEmail, isValidWhatsApp, generateMailto, generateWhatsApp } from "../../lib/utils";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { cn } from "../../lib/utils";
import { Send, CheckCircle, Mail, MessageCircle } from "lucide-react";

const initialFormState = {
  brideName: "",
  partnerName: "",
  email: "",
  whatsapp: "",
  weddingDate: "",
  location: "",
  guestCount: "",
  serviceNeeded: "",
  budgetRange: "",
  story: "",
};

function FormField({ label, error, children, required }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#F7F2E8]/80">
        {label}
        {required && <span className="ml-1 text-[#C8A96A]">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClasses =
  "w-full bg-transparent border-0 border-b border-white/[0.15] px-0 py-3 text-base text-[#F7F2E8] placeholder:text-[#A9A29A]/50 transition-colors focus:border-[#C8A96A] focus:ring-0 focus:outline-none rounded-none";

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.brideName.trim()) {
      newErrors.brideName = "Silakan masukkan nama Anda.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Silakan masukkan email Anda.";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Silakan masukkan alamat email yang valid.";
    }
    if (formData.whatsapp.trim() && !isValidWhatsApp(formData.whatsapp)) {
      newErrors.whatsapp = "Silakan masukkan nomor WhatsApp yang valid.";
    }
    if (!formData.weddingDate) {
      newErrors.weddingDate = "Silakan pilih tanggal pernikahan Anda.";
    }
    if (!formData.serviceNeeded) {
      newErrors.serviceNeeded = "Silakan pilih layanan yang dibutuhkan.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="relative bg-[#050505] py-24 lg:py-40">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <Reveal>
            <div className="rounded-3xl border border-[#C8A96A]/20 bg-[#C8A96A]/[0.02] p-12">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A96A]/10">
                <CheckCircle size={28} className="text-[#C8A96A]" />
              </div>
              <h2 className="mb-4 font-serif text-3xl text-[#F7F2E8]">
                {contactForm.successTitle}
              </h2>
              <p className="mb-8 text-base leading-relaxed text-[#A9A29A]">
                {contactForm.successMessage}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  href={generateMailto(formData)}
                  size="md"
                >
                  <Mail size={16} />
                  Lanjutkan via Email
                </Button>
                <Button
                  variant="secondary"
                  href={generateWhatsApp(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                >
                  <MessageCircle size={16} />
                  Lanjutkan via WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative bg-[#050505] py-24 lg:py-40">
      {/* Top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      {/* Subtle glow */}
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#C8A96A]/[0.015] blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column - Header */}
          <div className="lg:col-span-5">
            <div>
              <Reveal>
                <div className="inline-flex items-center rounded-full border border-[#C8A96A]/30 bg-[#C8A96A]/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#C8A96A] mb-8">
                  Get in Touch
                </div>
                <h2 className="mb-6 font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#F7F2E8] leading-tight">
                  <span className="text-[#C8A96A] italic">Wedding</span> Inquiry
                </h2>
                <p className="max-w-md text-[#A9A29A] leading-relaxed text-lg">
                  Bagikan cerita dan detail pernikahan Anda. Kami akan menghubungi Anda untuk menjadwalkan konsultasi personal.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Right Column - Minimal Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-8"
              >
                <div className="grid gap-8 sm:grid-cols-2">
                  {/* Bride/Groom Name */}
                  <FormField label="Nama Anda" error={errors.brideName} required>
                    <input
                      type="text"
                      name="brideName"
                      value={formData.brideName}
                      onChange={handleChange}
                      placeholder="Nama Pengantin"
                      className={cn(inputClasses, errors.brideName && "border-red-400/40")}
                    />
                  </FormField>

                  {/* Partner Name */}
                  <FormField label="Nama Pasangan" error={errors.partnerName}>
                    <input
                      type="text"
                      name="partnerName"
                      value={formData.partnerName}
                      onChange={handleChange}
                      placeholder="Nama Pasangan"
                      className={inputClasses}
                    />
                  </FormField>

                  {/* Email */}
                  <FormField label="Email" error={errors.email} required>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@anda.com"
                      className={cn(inputClasses, errors.email && "border-red-400/40")}
                    />
                  </FormField>

                  {/* WhatsApp */}
                  <FormField label="WhatsApp" error={errors.whatsapp}>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="08xx-xxxx-xxxx"
                      className={cn(inputClasses, errors.whatsapp && "border-red-400/40")}
                    />
                  </FormField>

                  {/* Wedding Date */}
                  <FormField label="Tanggal Pernikahan" error={errors.weddingDate} required>
                    <input
                      type="date"
                      name="weddingDate"
                      value={formData.weddingDate}
                      onChange={handleChange}
                      className={cn(inputClasses, "appearance-none", errors.weddingDate && "border-red-400/40")}
                    />
                  </FormField>

                  {/* Location */}
                  <FormField label="Lokasi Acara / Kota" error={errors.location}>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Kota atau nama tempat"
                      className={inputClasses}
                    />
                  </FormField>

                  {/* Guest Count */}
                  <FormField label="Perkiraan Jumlah Tamu" error={errors.guestCount}>
                    <input
                      type="text"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      placeholder="Mis. 100 - 200 tamu"
                      className={inputClasses}
                    />
                  </FormField>

                  {/* Service Needed */}
                  <FormField label="Layanan yang Dibutuhkan" error={errors.serviceNeeded} required>
                    <select
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      className={cn(inputClasses, "cursor-pointer", !formData.serviceNeeded && "text-[#A9A29A]/50", errors.serviceNeeded && "border-red-400/40")}
                    >
                      <option value="">Pilih layanan</option>
                      {contactForm.serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  {/* Budget Range */}
                  <FormField label="Rentang Anggaran" error={errors.budgetRange}>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className={cn(inputClasses, "cursor-pointer", !formData.budgetRange && "text-[#A9A29A]/50")}
                    >
                      <option value="">Pilih rentang anggaran</option>
                      {contactForm.budgetOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </FormField>
                </div>

                {/* Wedding Brief */}
                <div className="mt-2">
                  <FormField label="Cerita / Konsep Pernikahan Anda" error={errors.story}>
                    <textarea
                      name="story"
                      value={formData.story}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Ceritakan tentang pernikahan impian Anda — suasana, tema, dan detail yang paling berarti bagi Anda..."
                      className={cn(inputClasses, "resize-none")}
                    />
                  </FormField>
                </div>

                <div className="mt-8">
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send size={16} />
                    Kirim Pesan
                  </Button>
                </div>

                <p className="mt-2 text-xs text-[#A9A29A]/50">
                  Tidak ada data yang disimpan. Setelah mengirim, Anda dapat melanjutkan diskusi melalui Email atau WhatsApp.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with clsx.
 * Handles conditional classes and deduplication.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Smooth scroll to a section by ID.
 * Accounts for the fixed navbar height.
 */
export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    const navbarHeight = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: "smooth",
    });
  }
}

/**
 * Generate a mailto link from form data.
 */
export function generateMailto(data) {
  const subject = encodeURIComponent(
    `Wedding Inquiry from ${data.brideName}${data.partnerName ? ` & ${data.partnerName}` : ""}`
  );
  const body = encodeURIComponent(
    `Bride/Groom Name: ${data.brideName}\n` +
    `Partner Name: ${data.partnerName}\n` +
    `Email: ${data.email}\n` +
    `WhatsApp: ${data.whatsapp}\n` +
    `Wedding Date: ${data.weddingDate}\n` +
    `Location: ${data.location}\n` +
    `Estimated Guests: ${data.guestCount}\n` +
    `Service Needed: ${data.serviceNeeded}\n` +
    `Budget Range: ${data.budgetRange}\n\n` +
    `Wedding Brief:\n${data.story}`
  );
  return `mailto:hello@kanarawedding.com?subject=${subject}&body=${body}`;
}

/**
 * Generate a WhatsApp link from form data.
 */
export function generateWhatsApp(data) {
  const message = encodeURIComponent(
    `Hello Kanara Wedding,\n\n` +
    `I'd like to inquire about wedding planning services.\n\n` +
    `Name: ${data.brideName}${data.partnerName ? ` & ${data.partnerName}` : ""}\n` +
    `Wedding Date: ${data.weddingDate}\n` +
    `Location: ${data.location}\n` +
    `Estimated Guests: ${data.guestCount}\n` +
    `Service: ${data.serviceNeeded}\n\n` +
    `${data.story ? `Brief: ${data.story}` : ""}`
  );
  return `https://wa.me/6281234567890?text=${message}`;
}

/**
 * Simple email validation.
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Simple WhatsApp number validation (Indonesian format).
 */
export function isValidWhatsApp(number) {
  return /^(\+62|62|08)\d{8,12}$/.test(number.replace(/[\s-]/g, ""));
}

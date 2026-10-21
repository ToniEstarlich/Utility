"use server";

export async function submitBusinessInquiry(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!email || !message) {
    return { ok: false, message: "Email and message are required." };
  }

  // Add validated delivery to your chosen email or CRM provider here.
  return { ok: true, message: "The inquiry is valid. Connect an email or CRM provider to deliver it." };
}

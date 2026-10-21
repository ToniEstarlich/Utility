"use server";

export async function prepareLanguageText(formData: FormData) {
  const text = String(formData.get("text") ?? "").trim();

  if (!text) {
    return { ok: false, message: "Enter some text first." };
  }

  return {
    ok: true,
    message: "Text received. Connect a translation provider to enable actual translation.",
    characterCount: text.length,
  };
}

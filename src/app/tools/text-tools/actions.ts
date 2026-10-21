"use server";

export async function analyzeText(formData: FormData) {
  const text = String(formData.get("text") ?? "");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  return {
    characters: text.length,
    words,
    lines: text.length ? text.split(/\r\n|\r|\n/).length : 0,
  };
}

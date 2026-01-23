"use server";

import { env } from "@/env";

export type ContactFormResult = {
  status: "idle" | "success" | "error";
  message?: string;
};

export type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
  pathname?: string;
};

export async function submitContactAction(
  payload: ContactPayload,
): Promise<ContactFormResult> {
  const firstName = payload.firstName?.trim() ?? "";
  const lastName = payload.lastName?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const pathname = payload.pathname?.trim() ?? "";

  if (!firstName || !email || !phone) {
    return {
      status: "error",
      message: "First name, email, and phone are required.",
    };
  }

  const zapierPayload = {
    firstName,
    lastName,
    email,
    phone,
    message,
    pathname,
    submittedAt: new Date().toISOString(),
  };

  try {
    const response = await fetch(env.ZAPIER_CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(zapierPayload),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Zapier webhook error", response.status, text);
      return {
        status: "error",
        message: "Failed to send your message. Please try again.",
      };
    }

    return {
      status: "success",
      message: "Thanks! We will get back to you soon.",
    };
  } catch (error) {
    console.error("Zapier webhook request failed", error);
    return {
      status: "error",
      message: "We could not send your message. Please try again.",
    };
  }
}

"use client";

import { usePathname } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";
import { PhoneInput } from "@/components/phone-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContactAction } from "../_actions/contact";

type FormStatus = "idle" | "success" | "error";

export function ContactUsSection() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");
  const pathname = usePathname();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const payload = {
      firstName: formData.get("firstName")?.toString().trim() ?? "",
      lastName: formData.get("lastName")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      phone: formData.get("phone")?.toString().trim() ?? "",
      message: formData.get("message")?.toString().trim() ?? "",
      pathname,
    };

    if (!payload.firstName || !payload.email || !payload.phone) {
      setFormStatus("error");
      setStatusMessage("First name, email, and phone are required.");
      return;
    }

    try {
      setIsSubmitting(true);
      setFormStatus("idle");
      setStatusMessage("");

      const result = await submitContactAction(payload);

      if (result.status !== "success") {
        setFormStatus("error");
        setStatusMessage(
          result.message || "We could not send your message. Please try again.",
        );
        return;
      }

      setFormStatus("success");
      setStatusMessage(
        result.message || "Thanks! We will get back to you soon.",
      );
      formElement.reset();
      setPhoneValue("");
    } catch (error) {
      console.error(error);
      setFormStatus("error");
      setStatusMessage("We could not send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-[#FBFBF8] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#0056AD]">
            Contact us
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[#0F1B29] sm:text-4xl">
            Start Your Journey Today
          </h2>
          <p className="mt-4 text-base text-[#4A5671] sm:text-lg">
            Ready to take the next step? Book your free consultation and
            discover how we can help you achieve your academic dreams.
          </p>
        </div>

        <div className="rounded-xl border border-[#C8D6F0] bg-white p-6 shadow-xl sm:p-10">
          <div className="mb-8 space-y-2">
            <h3 className="text-xl font-semibold text-[#181D27] sm:text-3xl">
              Need help with something else?
            </h3>
            <p className="text-sm text-[#535862] sm:text-base">
              Get in touch with us, we will get back to you ASAP!
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-3">
              <Label htmlFor="firstName" className="text-[#181D27]">
                What should we call you?{" "}
                <span className="text-[#0056AD]">*</span>
              </Label>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  required
                  className="border-[#D6DAE5] bg-[#F7F8FC]"
                />
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  className="border-[#D6DAE5] bg-[#F7F8FC]"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#181D27]">
                Email <span className="text-[#0056AD]">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@mail.com"
                required
                className="border-[#D6DAE5] bg-[#F7F8FC]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#181D27]">
                Phone number <span className="text-[#0056AD]">*</span>
              </Label>
              <PhoneInput
                id="phone"
                name="phone"
                placeholder="+1 (555) 000-0000"
                defaultCountry="US"
                value={phoneValue || undefined}
                onChange={(value) => setPhoneValue(value ?? "")}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-[#181D27]">
                How can we assist you?
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Share anything you need help with."
                rows={5}
                className="border-[#D6DAE5] bg-[#F7F8FC]"
              />
            </div>
            <Button
              type="submit"
              className="w-full sm:w-auto p-6! bg-[#0056AD] text-white hover:bg-[#004b98]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
            <div
              className="text-center text-sm text-[#0056AD]"
              aria-live="polite"
            >
              {formStatus !== "idle" && statusMessage}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

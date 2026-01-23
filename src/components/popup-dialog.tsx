"use client";

import { CheckIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function PopupDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    "Personalized B-school strategy for ISB, IIMs & top Indian programs",
    "1:1 mentorship from successful applicants",
    "Essay, resume & interview preparation",
    "Unlimited feedback until submission",
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-4xl w-full p-0 overflow-hidden bg-[#F8F7F2] border-[#1A4A8A] border-2">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-[#2176D8] hover:bg-[#2176D8]/90 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <XIcon className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-3 lg:p-8 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl lg:text-4xl font-bold font-serif text-[#1A4A8A] leading-tight">
                Dreaming Of ISB/IIMS?
              </h2>
              <p className="text-sm lg:text-lg font-semibold text-[#2176D8]">
                60+ ISB admits | 12 full rides | ₹3Cr+ in scholarships
              </p>
            </div>

            <p className="text-[#4A4A4A] text-xs lg:text-base leading-relaxed">
              Our Application Package helps you create a winning application
              with expert guidance from those who secured 100% scholarships at
              ISB.
            </p>

            <div className="space-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-[#4CAF50] rounded flex items-center justify-center mt-0.5">
                    <CheckIcon className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-[#4A4A4A] text-xs lg:text-sm leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-[#FDF7E6] rounded-lg p-4 border border-[#F0EAD2]">
              <p className="text-center text-sm lg:text-lg font-semibold text-[#4A4A4A]">
                Complete Application Package{" "}
                <span className="text-[#2176D8] font-bold">@$600</span>
              </p>
            </div>

            <Button
              asChild
              className="w-full bg-[#2176D8] hover:bg-[#2176D8]/90 text-white font-semibold py-4 text-lg rounded-lg transition-colors"
            >
              <Link
                href="https://meet.openadmits.com/#/IvyLeague"
                target="_blank"
              >
                Book Your Consultation
              </Link>
            </Button>
          </div>

          <div className="relative hidden lg:block h-64 lg:h-auto -order-1 lg:order-none">
            <Image
              src="/images/dialog.png"
              alt="Successful students"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

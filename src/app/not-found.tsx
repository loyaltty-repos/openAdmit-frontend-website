"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function NotFound() {
  const { back } = useRouter();
  const isMobile = useIsMobile();

  return isMobile ? <Mobile back={back} /> : <Desktop back={back} />;
}

function Desktop({ back }: { back: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute select-none text-[512px] font-bold text-[#F2E3BB]/20">
          404
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 text-center z-10 bg-transparent">
          <h1 className="text-[80px] tracking-tight text-[#031A30]">
            We lost this page
          </h1>
          <p className="text-[#031A30] text-2xl">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="flex gap-4 mt-6">
            <Button
              variant="outline"
              onClick={back}
              className="flex items-center gap-2 p-6 !px-6 text-[#33290F] rounded-full shadow-none border-[#C2B285] text-lg"
            >
              <ArrowLeft size={16} className="text-[#C2B285]" />
              Go back
            </Button>
            <Button
              asChild
              className="bg-[#F0E1B9] hover:bg-[#F0E1B9]/80 p-6 rounded-full text-lg text-[#33290F]"
            >
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mobile({ back }: { back: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center space-y-4 text-center px-6">
        <h1 className="text-[40px] tracking-tight text-[#031A30]">
          We lost this page
        </h1>
        <p className="text-[#031A30]">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col w-full gap-4 mt-6 text-lg">
          <Button
            asChild
            className="bg-[#F0E1B9] hover:bg-[#F0E1B9]/80 w-full py-6 rounded-full text-[#33290F]"
          >
            <Link href="/">Go Home</Link>
          </Button>
          <Button
            variant="outline"
            onClick={back}
            className="flex items-center gap-2 w-full py-6 rounded-full text-[#33290F] shadow-none border-[#C2B285]"
          >
            <ArrowLeft size={16} className="text-[#C2B285]" />
            Go back
          </Button>
        </div>
      </div>
    </div>
  );
}

export function AboutUsStats() {
  return (
    <section className="border-y-2 bg-[#F7EFD8] border-[#B18F31]">
      <div className="max-w-7xl mx-auto px-4 sm:px-16 py-16 sm:py-24">
        <h2 className="text-center text-[32px] leading-tight lg:text-[40px] font-bold text-[#181D27]">
          Our Track Record
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3">
          <div className="text-center">
            <div className="text-[40px] font-serif leading-none sm:text-[52px] font-semibold text-[#0D3B66]">
              130+
            </div>
            <p className="mt-3 text-base sm:text-lg text-[#535862] max-w-xs mx-auto">
              successful admits to M7 and T15 MBA programs
            </p>
          </div>

          <div className="text-center">
            <div className="text-[40px] font-serif leading-none sm:text-[52px] font-semibold text-[#0D3B66]">
              $7M+
            </div>
            <p className="mt-3 text-base sm:text-lg text-[#535862] max-w-xs mx-auto">
              in scholarships secured for our clients
            </p>
          </div>

          <div className="text-center">
            <div className="text-[40px] font-serif leading-none sm:text-[52px] font-semibold text-[#0D3B66]">
              97%
            </div>
            <p className="mt-3 text-base sm:text-lg text-[#535862] max-w-xs mx-auto">
              success rate across all programs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

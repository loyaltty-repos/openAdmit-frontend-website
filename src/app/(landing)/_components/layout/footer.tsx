import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#002041] border-t-4 border-t-[#183B5D]">
      <div className="mx-auto w-full max-w-screen-xl p-8 lg:py-8 text-[#B3D3F3]">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 flex flex-col gap-2 md:mb-0">
            <Image
              src="/images/logo-light.svg"
              alt="Logo"
              width={248}
              height={14}
              className="mb-2"
            />
            <span className="text-sm sm:text-left max-w-sm">
              Mowry Ave, Fremont, CA 94538
            </span>
            <Link
              href="mailto:contactus@openadmits.com"
              className="text-sm sm:text-left"
            >
              contactus@openadmits.com
            </Link>
            <span className="text-sm">
              © {`${new Date().getUTCFullYear()} `}. All Rights Reserved.
            </span>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Quick Links
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/success-stories" className="hover:underline">
                    Success Stories
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/case-studies" className="hover:underline">
                    Case Studies
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/blog" className="hover:underline">
                    Blogs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/about-us" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://tally.so/r/wdBxJK"
                    className="hover:underline"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow us
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/openadmits/"
                    className="hover:underline "
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://m.facebook.com/61575283220530/"
                    className="hover:underline "
                  >
                    Facebook
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/openadmits/"
                    className="hover:underline "
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Legal
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/terms-and-conditions"
                    className="hover:underline "
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/refund-policy"
                    className="hover:underline"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/privacy-policy"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

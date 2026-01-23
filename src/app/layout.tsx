import type { Metadata } from "next";
import { Crimson_Text, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  variable: "--font-crimson-text",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://openadmits.com"),
  title: "College Admissions Consultant | Ivy League Consulting - Open Admits",
  description:
    "Expert college admissions consultants specializing in Ivy League and top universities. Personalized college prep services to help you stand out.",
  keywords: [
    "college admissions consultant",
    "ivy league admissions consulting",
    "ivy league admissions consultant",
    "college prep services",
    "college admissions counselor",
  ],
  icons: [
    { rel: "icon", url: "/images/favicon.svg", href: "/images/favicon.svg" },
  ],
  other: {
    "google-site-verification": "A0ZimNR1YfFcYhWCgVqPEjUeUuNDDZEoSYreNd5i8pY",
    "msvalidate.01": "39CC291841558A0EC3039A7C6B54B83F",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${crimsonText.variable} ${playfairDisplay.variable} ${inter.variable} antialiased font-sans`}
      suppressHydrationWarning
    >
      <head>
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3BXP36573T"
        />
        <script src="https://cdn.pagesense.io/js/895631668/912f9b7c2e69425abdac70c95d6c2589.js" /> */}
        {/* <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Content is safe
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "rnpmo5q8nd");`,
          }}
        /> */}
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Content is safe
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-52JG4LWC');`,
          }}
        />
      </head>
      <body className="overflow-x-clip bg-[#FBF7EC] overscroll-none">
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Content is safe
          dangerouslySetInnerHTML={{
            __html: `var EhAPI = EhAPI || {}; EhAPI.after_load = function(){EhAPI.set_account('7prjc91aek7o2m882nmhqnrl7h', 'shoutstart');EhAPI.execute('rules');};(function(d,s,f) {var sc=document.createElement(s);sc.type='text/javascript';sc.async=true;sc.src=f;var m=document.getElementsByTagName(s)[0];m.parentNode.insertBefore(sc,m);})(document, 'script', '//d2p078bqz5urf7.cloudfront.net/jsapi/ehform.js?v' + new Date().getHours());`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-52JG4LWC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* <script
          defer
          src="https://data.processwebsitedata.com/cscripts/3crpIhsgux-64b499d8.js"
        /> */}
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}

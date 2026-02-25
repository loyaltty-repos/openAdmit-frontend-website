// import { Banner } from "./_components/layout/banner";
import { Suspense } from "react";
import { Footer } from "./_components/layout/footer";
import { Header } from "./_components/layout/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <>
    //   <Header />
    //   {/* <Banner /> */}
    //   {children}
    //   <Footer />
    // </>
     <>
      <Suspense fallback={null}>
        <Header />
      </Suspense>

      {/* <Banner /> */}
      {children}
      <Footer />
    </>
  );
}

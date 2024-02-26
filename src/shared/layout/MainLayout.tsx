import { Header } from "@/components/Header";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
};

export { MainLayout };

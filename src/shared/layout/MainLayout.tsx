import { AllFilters } from "@/components/Filters";
import { Header } from "@/components/Header";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      <main>
        <div className="container">
          <section>
            <AllFilters className="mb-4" />

            {children}
          </section>
        </div>
      </main>
    </>
  );
};

export { MainLayout };

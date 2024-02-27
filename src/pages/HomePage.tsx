import { FilterForm } from "@/components/FilterForm";
import { ItemsList } from "@/components/ItemsList";
import { Paggination } from "@/components/Paggination";
import { useFiltred } from "@/services";

const HomePage = () => {
  const { data: itemsIdsPaggination, error, isLoading } = useFiltred("");

  if (isLoading) {
    return <div>load...</div>;
  }

  if (error) {
    return <div>err</div>;
  }

  if (!itemsIdsPaggination?.result) {
    return <div>Что-то пошло не так</div>;
  }

  return (
    <section>
      <FilterForm />

      {/* <ItemsList itemsIds={itemsForCurrentPage} /> */}

      {/* <Paggination /> */}
    </section>
  );
};

export { HomePage };

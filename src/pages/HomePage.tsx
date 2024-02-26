import { FilterForm } from "@/components/FilterForm";
import { ItemsList } from "@/components/ItemsList";
import { useItemIds } from "@/services";

const HomePage = () => {
  const { data: itemsIds, error, isLoading } = useItemIds();

  if (isLoading) {
    return <div>load...</div>;
  }

  if (error) {
    return <div>err</div>;
  }

  if (!itemsIds?.result) {
    return <div>Что-то пошло не так</div>;
  }

  return (
    <section>
      <FilterForm />

      <ItemsList itemsIds={itemsIds.result} />
    </section>
  );
};

export { HomePage };

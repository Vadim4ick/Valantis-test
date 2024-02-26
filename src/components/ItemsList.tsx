import { Typography } from "@/shared/ui/Typography";
import { useItems } from "@/services";
import { Item } from "./Item";
import { getUniqueItemsById } from "@/shared/helpers/getUniqueItemsById";

const ItemsList = ({ itemsIds }: { itemsIds: string[] }) => {
  const { data: items, isLoading, error } = useItems(itemsIds);

  if (isLoading) {
    return <div>load...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  if (!items?.result) {
    return <div>Что-то пошло не так</div>;
  }

  const uniqueItems = getUniqueItemsById(items.result);

  return (
    <>
      <Typography tag="h2" variant="title-2" className="mb-5">
        Отсортированные товары
      </Typography>

      <Typography className="grid grid-cols-main gap-4">
        {uniqueItems.map((item, i) => {
          return <Item key={`${item.id}_${i}`} item={item} />;
        })}
      </Typography>
    </>
  );
};

export { ItemsList };

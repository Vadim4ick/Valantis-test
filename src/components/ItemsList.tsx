import { Typography } from "@/shared/ui/Typography";
import { Item } from "./Item";
import { memo, useEffect } from "react";
import { getItems } from "@/api/rtkApi";

interface ItemsListProps {
  itemsIds: string[] | undefined;
}

const ItemsList = memo((props: ItemsListProps) => {
  const { itemsIds } = props;

  const [getItemsFn, { isLoading, data: items, error }] = getItems({});

  useEffect(() => {
    if (itemsIds?.length) {
      getItemsFn(itemsIds);
    }
  }, [itemsIds]);

  if (isLoading) {
    return <div>load...</div>;
  }

  if (error) {
    return <div>Ошибка</div>;
  }

  return (
    <>
      <Typography tag="h2" variant="title-2" className="mb-5">
        Отсортированные товары
      </Typography>

      <Typography className="grid grid-cols-main gap-4">
        {items?.result.map((item, i) => {
          return <Item key={`${item.id}_${i}`} item={item} />;
        })}
      </Typography>
    </>
  );
});

export { ItemsList };

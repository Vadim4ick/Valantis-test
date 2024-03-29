import { Typography } from "@/shared/ui/Typography";
import { Item } from "./Item";
import { memo, useEffect } from "react";
import { getItems } from "@/api/rtkApi";
import { Skeleton } from "@/shared/ui/Skeleton";

interface ItemsListProps {
  itemsIds: string[];
}

const ItemsList = memo((props: ItemsListProps) => {
  const { itemsIds } = props;

  const [getItemsFn, { isLoading, data: items, error, isError }] = getItems({});

  useEffect(() => {
    getItemsFn(itemsIds);
  }, [itemsIds]);

  if (isError) {
    console.log("Error ItemsList", error);
    getItemsFn(itemsIds || []);
  }

  return (
    <Typography className="flex flex-col gap-3">
      <Typography tag="h2" variant="title-2" className="mb-5">
        Отсортированные товары
      </Typography>

      <Typography className="grid grid-cols-main gap-4">
        {isLoading &&
          new Array(50).fill(0).map((_, i) => {
            return <Skeleton key={i} width={240} height={221} />;
          })}

        {items?.result.map((item, i) => {
          return <Item key={`${item.id}_${i}`} item={item} />;
        })}
      </Typography>
    </Typography>
  );
});

export { ItemsList };

import { calculateOldPrice } from "@/shared/helpers/calculateOldPrice";
import { Item as IItem } from "@/shared/types";
import { Typography } from "@/shared/ui/Typography";
import { memo } from "react";

const Item = memo(({ item }: { item: IItem }) => {
  return (
    <Typography
      tag="article"
      variant="product"
      className="flex flex-col justify-between"
    >
      <Typography tag="h3" variant="title-3" className="text-center mb-2">
        {item.product}
      </Typography>

      <Typography className="min-h-16">
        <Typography tag="p" variant="sub-title" className="block mb-1">
          Старая Цена{" "}
          <Typography tag="span" className="line-through">
            {calculateOldPrice(item.price).toFixed(0)} руб
          </Typography>
        </Typography>

        <Typography tag="p" variant="sub-title" className="block">
          Цена:
          <Typography tag="span">
            <b> {item.price} руб</b>
          </Typography>
        </Typography>
      </Typography>

      <button>В корзину</button>
    </Typography>
  );
});

export { Item };

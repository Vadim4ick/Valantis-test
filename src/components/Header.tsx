import { Typography } from "@/shared/ui/Typography";

const Header = () => {
  return (
    <header className="h-16 flex items-center container-header">
      <Typography tag="h1" variant="title-1">
        Список товаров
      </Typography>
    </header>
  );
};

export { Header };

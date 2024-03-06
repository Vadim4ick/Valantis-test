import clsx from "clsx";

interface LoaderProps {
  className?: string;
}

export const Preloader: React.FC<LoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={clsx("lds-dual-ring", {}, [className as string])}></div>
  );
};

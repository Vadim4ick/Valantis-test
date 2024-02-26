import clsx from "clsx";
import { ReactNode } from "react";

export type TypographyVariant =
  | "title-1"
  | "title-2"
  | "title-3"
  | "sub-title"
  | "paragraph"
  | "div"
  | "product";

export type TypographyTag =
  | "h1"
  | "h2"
  | "h3"
  | "span"
  | "div"
  | "p"
  | "article";

interface TypographyProps {
  tag?: TypographyTag;
  className?: string;
  variant?: TypographyVariant;
  children: ReactNode;
}

export const Typography = (props: TypographyProps) => {
  const { tag: Tag = "div", children, className = "", variant = "div" } = props;

  return <Tag className={clsx(className, {}, [variant])}>{children}</Tag>;
};

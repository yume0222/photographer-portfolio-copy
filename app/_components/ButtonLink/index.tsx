import styles from "./index.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

export default function ButtonLink({
  href,
  children,
  className,
  target,
  rel,
}: Props) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${styles.button} ${className}`}
    >
      {children}
    </a>
  );
}

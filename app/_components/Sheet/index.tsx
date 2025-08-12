import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  className1?: string;
  className2: string;
};

export default function Sheet({ children, className1, className2 }: Props) {
  return (
    <div className={className1}>
      <div className={className2}>{children}</div>
    </div>
  );
}

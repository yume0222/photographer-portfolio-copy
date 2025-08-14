import { SchoolTableRow } from "@/app/_libs/microcms";
import styles from "./index.module.css";

type Props = {
  rows: SchoolTableRow[];
};

export default function SchoolTable({ rows }: Props) {
  return (
    <table>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} className={styles.row}>
            <th className={styles.header}>{row.label}</th>
            <td className={styles.data}>
              {Array.isArray(row.value) ? (
                <ul className={styles.list}>
                  {row.value.map((item, i) => (
                    <li key={i} className={styles.item}>{item}</li>
                  ))}
                </ul>
              ) : (
                row.value
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

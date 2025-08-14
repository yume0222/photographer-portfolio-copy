"use client";

import { createContactData } from "@/app/_actions/contact";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import InputText from "../InputText";
import Textarea from "../Textarea";

const initialState = {
  status: "",
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useFormState(createContactData, initialState);
  const router = useRouter();
  useEffect(() => {
    if (state.status === "success") {
      router.push("/contact");
    }
  }, [state.status, router]);
  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="lastname">
          お名前
          <span className={styles.required}>必須</span>
        </label>
        <InputText
          className={`${styles.textfield} ${styles.body}`}
          type="text"
          id="lastname"
          name="lastname"
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="email">
          メールアドレス
          <span className={styles.required}>必須</span>
        </label>
        <InputText
          className={`${styles.textfield} ${styles.body}`}
          type="text"
          id="email"
          name="email"
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="message">
          お問い合わせ内容
          <span className={styles.required}>必須</span>
        </label>
        <Textarea
          className={`${styles.textarea} ${styles.body}`}
          id="message"
          name="message"
        />
      </div>
      <div className={styles.actions}>
        {state.status === "error" && (
          <p className={styles.error}>{state.message}</p>
        )}
        <input type="submit" value="送信する" className={styles.button} />
      </div>
    </form>
  );
}

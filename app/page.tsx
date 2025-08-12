import Image from "next/image";
import styles from "./page.module.css";
import TopKVSection from "./_components/TopKVSection";
import ProfileSection from "./_components/ProfileSection";

export default function Home() {
  return (
    <>
    <TopKVSection />
    <ProfileSection />
    </>
  );
}

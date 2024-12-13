import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello world</h1>
        <Link href={'/reel'}>Watch Reels</Link>
      </main>
    </div>
  );
}

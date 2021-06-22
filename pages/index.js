import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Index file in Pages Directory</h1>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
        eligendi velit vel labore atque! Quidem reprehenderit ex autem ratione
        inventore omnis saepe hic, ipsam laboriosam delectus voluptates corrupti
        velit nesciunt!
      </p>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
        eligendi velit vel labore atque! Quidem reprehenderit ex autem ratione
        inventore omnis saepe hic, ipsam laboriosam delectus voluptates corrupti
        velit nesciunt!
      </p>
      <Link href="/frost">
        <a className={styles.btn}>Frost Listing</a>
      </Link>
    </div>
  );
}

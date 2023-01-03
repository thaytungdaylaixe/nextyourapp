import React from "react";
import styles from "./styles/Index.module.css";

import Link from "next/link";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Index = () => {
  return (
    <main>
      <Link href="/" className={styles.card}>
        <h2 className={inter.className}>Trang chủ</h2>
        <p className={inter.className}>
          Find in-depth information about Next.js features and&nbsp;API.
        </p>
      </Link>
    </main>
  );
};

export default Index;

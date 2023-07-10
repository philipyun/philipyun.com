"use client";

import { useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    fetch("/api/echo", {
      method: "POST",
      body: JSON.stringify({ echo: "hello" }),
    }).then((res) => res.json().then((j) => console.log(j.echo)));
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>philipyun.com is under construction...</div>
        <br />
        the old site can be found at
        <a href="http://old.philipyun.com" target="_blank">
          old.philipyun.com
        </a>
      </div>
    </main>
  );
}

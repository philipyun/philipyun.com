'use client';
import { useFirebaseConfig } from '@/hooks/useFirebaseConfig';
import styles from './page.module.css';

export default function Home() {
  const resume = useFirebaseConfig('resume');

  console.log(resume);

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

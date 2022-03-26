import Head from 'next/head'
import Image from 'next/image'
import Greeting from 'components/Greeting';
import About from 'components/About';
import Skills from 'components/Skills';
import Contact from 'components/Contact';
import styles from 'styles/Home.module.sass';

export default function Home() {

  return (
    <div className={styles.home}>
      <Head>
        <title>Paulo Augsuto Silva</title>
        <meta name="description" content="I'm Paulo Augusto Silva, a passionate web developer always looking for new challenges and new experiences." />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Paulo Augsuto Silva" />
        <meta property="og:description" content="I'm Paulo Augusto Silva, a passionate web developer always looking for new challenges and new experiences." />
        <meta property="og:url" content="https://pauloaugusto.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://pauloaugusto.dev/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="620" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@p13lgst" />
        <meta name="twitter:creator" content="@p13lgst" />
        <meta name="twitter:title" content="Paulo Augsuto Silva" />
        <meta name="twitter:description" content="I'm Paulo Augusto Silva, a passionate web developer always looking for new challenges and new experiences." />


      </Head>

      <Greeting />
      <About />
      <Skills />
      <Contact />

      <footer className={styles.footer}>
        <p>
          Code by <span className={styles.me}>me</span> {'&'} Design by <span className={styles.designer}>Luana Magalhães</span>
        </p>
        <p>
          &copy; 2022
        </p>
      </footer>
    </div>
  );
}

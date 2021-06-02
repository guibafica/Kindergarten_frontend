import React, { useEffect } from 'react';
import Head from 'next/head';
// import { FaHamburger } from 'react-icons/fa';

import styles from './home.module.scss';

export default function Home() {
  useEffect(() => {
    console.log('Made by Guilherme Bafica')
  }, []);

  return (
    <div className={styles.homepage}>
      <Head>
        <title>Kinderzgarten</title>
      </Head>

      {/* Começo header section */}
      <header>
        <a href="#" className={styles.logo}>
          <i className="fas fa-child" />
          kidzies
        </a>

        <div className={styles.menuBars}>
          <div id="menu-bars" className="fas fa-bars" />
        </div>

        <nav className={styles.navbar}>
          <a href="#home">home</a>
          <a href="#features">features</a>
          <a href="#about">about</a>
          <a href="#services">services</a>
          <a href="#teacher">teacher</a>
          <a href="#pricing">pricing</a>
          <a href="#contact">contact</a>
        </nav>
      </header>
      {/* Fim header section */}

      {/* Começo footer section */}
      {/* <div className={styles.footer}>
        <div className={styles.boxContainer}>
          <h1 className={styles.credit}>
            Feito por <a href="https://guilherme-bafica.vercel.app/">Guilherme Bafica</a>.
          todos os direitos reservados.
        </h1>
        </div>
      </div> */}
      {/* Fim footer section */}
    </div>
  )
}


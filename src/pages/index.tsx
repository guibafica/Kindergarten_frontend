import React, { useEffect } from 'react';
import Head from 'next/head';
// import { FaHamburger } from 'react-icons/fa';

import styles from './home.module.scss';

export default function Home() {
  useEffect(() => {
    console.log('Made by Guilherme Bafica')
  }, []);

  return (
    <div>
      <Head>
        <title>Kindergarten</title>
      </Head>

      {/* Começo footer section */}
      <div className={styles.footer}>
        <div className={styles.boxContainer}>
          <h1 className={styles.credit}>
            Feito por <a href="https://guilherme-bafica.vercel.app/">Guilherme Bafica</a>.
          todos os direitos reservados.
        </h1>
        </div>
        {/* Fim footer section */}
      </div>
    </div>
  )
}


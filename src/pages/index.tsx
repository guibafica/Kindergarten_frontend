import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
// import { FaHamburger } from 'react-icons/fa';

import styles from './home.module.scss';

export default function Home() {
  const [clipPathStyle, setClipPathStyle] = useState('polygon(0 0, 100% 0, 100% 100%, 0 100%)');

  useEffect(() => {
    console.log('Made by Guilherme Bafica')
  }, []);

  const handleToggleNavbars = useCallback(() => {
    const menu = document.querySelector('#menu-bars');

    if (clipPathStyle === 'polygon(0 0, 100% 0, 100% 100%, 0 100%)') {
      setClipPathStyle('polygon(0 0, 100% 0, 100% 0, 0 0)');

      menu.classList.toggle('fa-bars');
    } else {
      setClipPathStyle('polygon(0 0, 100% 0, 100% 100%, 0 100%)');

      menu.classList.toggle('fa-times');
    }
  }, [clipPathStyle])

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

        <div className={styles.menuBars} onClick={handleToggleNavbars}>
          <div id="menu-bars" className="fas fa-bars" />
        </div>

        <nav
          className={styles.navbar}
          style={{ clipPath: clipPathStyle }}
        >
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

      {/* Começo home section */}
      <section className={styles.home} id="home">
        <div className={styles.content}>
          <h1>Bem-vindo a kidzies</h1>

          <h3>construindo uma educação mais divertida.</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            accusamus eum, dolore officiis facilis fugiat sint. Animi unde
            blanditiis, ab quibusdam illum minus exercitationem dolore expedita
            asperiores odit, consectetur iusto.
          </p>

          <a href="#" className={styles.btn}>Saiba mais</a>
        </div>

        <div className={styles.image}>
          <img src="images/home-img.png" alt="" />
        </div>
      </section>
      {/* Fim home section */}

      {/* Começo features section */}
      <section className={styles.features} id="features">
        <div className={styles.boxContainer}>
          <h3 className={styles.title}>Por que as crianças nos amam</h3>

          <div className={styles.box}>
            <img src="images/left-icon1.png" alt="" />

            <div className={styles.info}>
              <h3>Conversas engraçadas</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, dolor!
              </p>
            </div>
          </div>

          <div className={styles.box}>
            <img src="images/left-icon2.png" alt="" />

            <div className={styles.info}>
              <h3>Mais atividades</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, dolor!
              </p>
            </div>
          </div>

          <div className={styles.box}>
            <img src="images/left-icon3.png" alt="" />

            <div className={styles.info}>
              <h3>A diversão não para</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, dolor!
              </p>
            </div>
          </div>
        </div>

        <img className={styles.stick} src="images/stick.png" alt="" />

        <div className={styles.boxContainer}>
          <h3 className={styles.title}>Por que os pais nos escolhem</h3>

          <div className={styles.box}>
            <img src="images/right-icon1.png" alt="" />

            <div className={styles.info}>
              <h3>Monitoramento contínuo</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, dolor!
              </p>
            </div>
          </div>

          <div className={styles.box}>
            <img src="images/right-icon2.png" alt="" />

            <div className={styles.info}>
              <h3>Professores profissionais</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, dolor!
                </p>
            </div>
          </div>

          <div className={styles.box}>
            <img src="images/right-icon3.png" alt="" />

            <div className={styles.info}>
              <h3>Programas desenvolvidos</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, dolor!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Fim features section */}

      {/* Começo about section */}
      <section className={styles.about} id="about">
        <div className={styles.image}>
          <img src="images/about-img.png" alt="" />
        </div>

        <div className={styles.content}>
          <h3>Uma palavra sobre nós</h3>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nisi quod consequuntur dolor molestiae magnam magni veritatis?
            Tenetur optio excepturi harum eius quaerat labore cumque dolorem
            dignissimos alias. Perspiciatis, expedita.
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            minima odio est unde nesciunt necessitatibus, fugiat laboriosam
            quidem magni? Maxime?
          </p>

          <a href="#" className={styles.btn}>Saiba mais</a>
        </div>
      </section>
      {/* Fim about section */}

      {/* Começo services section */}
      <section className={styles.services} id="services">
        <h1 className={styles.heading}> O que ensinamos a seus filhos </h1>

        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <img src="images/s1.jpg" alt="" />

            <div className={styles.info}>
              <h3>Ensino de palavras e letras</h3>
            </div>
          </div>

          <div className={styles.box}>
            <img src="images/s2.jpg" alt="" />

            <div className={styles.info}>
              <h3>Argila e artesanato</h3>
            </div>
          </div>

          <div className={styles.box}>
            <img src="images/s3.jpg" alt="" />

            <div className={styles.info}>
              <h3>Aulas de desenho</h3>
            </div>
          </div>

          <div className={styles.box}>
            <img src="images/s4.jpg" alt="" />

            <div className={styles.info}>
              <h3>Aulas de inglês</h3>
            </div>
          </div>

          <div className={styles.box}>
            <img src="images/s5.jpg" alt="" />

            <div className={styles.info}>
              <h3>Playground para crianças</h3>
            </div>
          </div>

          <div className={styles.box}>
            <img src="images/s6.jpg" alt="" />

            <div className={styles.info}>
              <h3>Eventos esportivos</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Fim services section */}

      {/* Começo teachers section */}
      <section className={styles.teacher} id="teacher">
        <h1 className={styles.heading}>Nossos incríveis professores</h1>

        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <img src="images/teacher-1.png" alt="" />

            <h3>john deo</h3>

            <span>Professor</span>

            <div className={styles.share}>
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              molestiae ab soluta iste delectus facilis beatae earum reiciendis
              repellat, consequuntur sequi dolorem error, labore dolores ullam
              distinctio illo. Voluptas, molestias?
            </p>
          </div>

          <div className={styles.box}>
            <img src="images/teacher-2.png" alt="" />

            <h3>john deo</h3>

            <span>Professor</span>

            <div className={styles.share}>
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              molestiae ab soluta iste delectus facilis beatae earum reiciendis
              repellat, consequuntur sequi dolorem error, labore dolores ullam
              distinctio illo. Voluptas, molestias?
            </p>
          </div>

          <div className={styles.box}>
            <img src="images/teacher-3.png" alt="" />

            <h3>john deo</h3>

            <span>Professor</span>

            <div className={styles.share}>
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              molestiae ab soluta iste delectus facilis beatae earum reiciendis
              repellat, consequuntur sequi dolorem error, labore dolores ullam
              distinctio illo. Voluptas, molestias?
            </p>
          </div>

          <div className={styles.box}>
            <img src="images/teacher-4.png" alt="" />

            <h3>john deo</h3>

            <span>Professor</span>

            <div className={styles.share}>
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              molestiae ab soluta iste delectus facilis beatae earum reiciendis
              repellat, consequuntur sequi dolorem error, labore dolores ullam
              distinctio illo. Voluptas, molestias?
            </p>
          </div>
        </div>
      </section>
      {/* Fim teachers section */}

      {/* Começo pricing section */}
      <section className={styles.pricing} id="pricing"> {/* up-down */}
        <h1 className={styles.heading}>Nossos planos de preços</h1>

        <div className={styles.boxContainer}>
          <div
            className={styles.box}
            style={{ background: 'url(images/card-bg1.png) no-repeat' }}
          >
            <h3>Semanal</h3>

            <div className={styles.price}>
              <span>$</span>20
            </div>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              magnam rem harum, nostrum facilis labore excepturi dignissimos?
              Voluptatibus facere beatae quam quasi! Vero fugit molestias
              officiis quam, corrupti earum aliquid?
            </p>

            <a href="#" className={styles.btn}>selecionar este plano</a>
          </div>

          <div
            className={styles.box}
            style={{ background: 'url(images/card-bg2.png) no-repeat' }}
          >
            <span className={styles.choise}>Melhor <br /> escolha</span>

            <h3>Mensal</h3>

            <div className={styles.price}>
              <span>$</span>50
            </div>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              magnam rem harum, nostrum facilis labore excepturi dignissimos?
              Voluptatibus facere beatae quam quasi! Vero fugit molestias
              officiis quam, corrupti earum aliquid?
            </p>

            <a href="#" className={styles.btn}>Selecionar este plano</a>
          </div>

          <div
            className={styles.box}
            style={{ background: 'url(images/card-bg3.png) no-repeat' }}
          >
            <h3>Anual</h3>

            <div className={styles.price}>
              <span>$</span>250
            </div>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              magnam rem harum, nostrum facilis labore excepturi dignissimos?
              Voluptatibus facere beatae quam quasi! Vero fugit molestias
              officiis quam, corrupti earum aliquid?
            </p>

            <a href="#" className={styles.btn}>selecionar este plano</a>
          </div>
        </div>
      </section>
      {/* Fim pricing section */}

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

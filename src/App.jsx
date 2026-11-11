import { useEffect, useState } from "react";
import "./index.css";

const CATALOGO_URL = "https://diaemex.netlify.app/";
const WHATSAPP = "5215580562821";
const CORREO = "rey.carranza0601@gmail.com";

const soluciones = [
  {
    numero: "01",
    titulo: "Soldadura",
    texto:
      "Consumibles, equipos y soluciones para distintos procesos de soldadura industrial.",
    imagen: "/imagenes/soldadura.jpg",
  },
  {
    numero: "02",
    titulo: "Corte industrial",
    texto:
      "Soluciones y consumibles para procesos de corte y transformación de materiales.",
    imagen: "/imagenes/corte-industrial.jpg",
  },
  {
    numero: "03",
    titulo: "Equipos y refacciones",
    texto:
      "Equipos, componentes y refacciones para mantener tus operaciones en marcha.",
    imagen: "/imagenes/equipos-refacciones.jpg",
  },
  {
    numero: "04",
    titulo: "Seguridad industrial",
    texto:
      "Productos de protección para contribuir a entornos de trabajo más seguros.",
    imagen: "/imagenes/seguridad-industrial.jpg",
  },
];

const marcas = [
  { nombre: "Lincoln Electric", imagen: "/marcas/lincoln.png" },
  { nombre: "ESAB", imagen: "/marcas/esab.png" },
  { nombre: "Miller", imagen: "/marcas/miller.png" },
  { nombre: "Fronius", imagen: "/marcas/fronius.png" },
  { nombre: "Hypertherm", imagen: "/marcas/hypertherm.png" },
  { nombre: "Abicor Binzel", imagen: "/marcas/abicor-binzel.png" },
  { nombre: "INFRA", imagen: "/marcas/infra.png" },
];

function App() {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showInstallHelp, setShowInstallHelp] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;

    const ios =
      /iphone|ipad|ipod/i.test(window.navigator.userAgent) ||
      (window.navigator.platform === "MacIntel" &&
        window.navigator.maxTouchPoints > 1);

    setIsIOS(ios);
    setIsInstalled(standalone);

    const handleBeforeInstall = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };

    const handleInstalled = () => {
      setIsInstalled(true);
      setInstallPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);
    window.addEventListener("appinstalled", handleInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (isIOS) {
      setShowInstallHelp(true);
      return;
    }

    if (!installPrompt) {
      setShowInstallHelp(true);
      return;
    }

    installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
  };

  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Hola, me interesa conocer las soluciones de DIAEMEX. ¿Podrían apoyarme?",
  )}`;

  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span>Soluciones para soldadura, corte y procesos industriales</span>
          <span>Experiencia que impulsa a la industria</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#inicio" aria-label="DIAEMEX - Inicio">
            <img
              src="/logo-diaemex.png"
              alt="DIAEMEX, Distribuidora de Aleaciones y Equipos Mexicanos"
            />
          </a>
          <nav className="main-nav" aria-label="Navegación principal">
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#soluciones">Soluciones</a>
            <a href="#marcas">Marcas</a>
            <a href="#servicio">Servicio técnico</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a
            className="nav-cta"
            href={CATALOGO_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Explorar catálogo de DIAEMEX"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
              <path d="M8 7h8M8 11h8" />
            </svg>

            <span>Explorar catálogo</span>
            <span className="nav-cta-arrow">↗</span>
          </a>
          {!isInstalled && (
            <button
              className="button button-install"
              type="button"
              onClick={handleInstall}
              aria-label="Instalar aplicación DIAEMEX"
            >
              <span aria-hidden="true">↓</span>
              INSTALAR DIAEMEX
            </button>
          )}
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-overlay" />
          <div className="container hero-content">
            <p className="eyebrow">
              <span /> DIAEMEX · SOLUCIONES INDUSTRIALES
            </p>
            <h1>
              Materiales que
              <br />
              <em>impulsan</em> tu industria.
            </h1>
            <p className="hero-copy">
              Equipos, consumibles, refacciones y soluciones profesionales para
              soldadura, corte y procesos industriales.
            </p>
            <div className="hero-actions">
              {!isInstalled && (installPrompt || isIOS) && (
                <button
                  className="button button-install"
                  type="button"
                  onClick={handleInstall}
                >
                  <span aria-hidden="true">⬇</span>
                  Instalar DIAEMEX
                </button>
              )}
              <a
                className="button button-red"
                href={CATALOGO_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Explorar catálogo de productos DIAEMEX"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
                  <path d="M8 7h8M8 11h8" />
                </svg>

                <span>Descubre nuestro catálogo</span>

                <span className="catalog-arrow">↗</span>
              </a>
              <a className="button button-outline" href="#nosotros">
                Conoce DIAEMEX
              </a>
            </div>
            <div className="hero-proof">
              <div>
                <strong>+30</strong>
                <span>años de experiencia</span>
              </div>
              <div>
                <strong>Soluciones</strong>
                <span>para la industria</span>
              </div>
              <div>
                <strong>Asesoría</strong>
                <span>técnica especializada</span>
              </div>
            </div>
          </div>
          <div className="hero-caption">PRECISIÓN · CALIDAD · RESPALDO</div>
        </section>

        <section className="intro section" id="nosotros">
          <div className="container intro-grid">
            <div>
              <p className="eyebrow dark">
                <span /> QUIÉNES SOMOS
              </p>
              <h2>
                Un aliado para los retos de <em>tu industria.</em>
              </h2>
            </div>
            <div className="intro-text">
              <p>
                En DIAEMEX trabajamos para brindar soluciones en equipos,
                consumibles, refacciones y productos especializados para
                soldadura, corte y procesos industriales.
              </p>
              <p>
                Nuestra experiencia de más de 30 años respalda un servicio
                enfocado en la calidad de los productos, la atención cercana y
                la asesoría técnica para las necesidades de cada operación.
              </p>
              <a className="text-link" href="#contacto">
                Hablemos de tu proyecto <span>→</span>
              </a>
            </div>
          </div>
          <div className="container stats">
            <div>
              <strong>30+</strong>
              <span>Años de experiencia</span>
            </div>
            <div>
              <strong>Calidad</strong>
              <span>Productos y soluciones</span>
            </div>
            <div>
              <strong>Soporte</strong>
              <span>Asesoría especializada</span>
            </div>
            <div>
              <strong>Industria</strong>
              <span>Atención profesional</span>
            </div>
          </div>
        </section>

        <section className="solutions section" id="soluciones">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span /> LO QUE HACEMOS
                </p>
                <h2>
                  Soluciones para cada
                  <br />
                  <em>desafío industrial.</em>
                </h2>
              </div>
              <p>
                Productos y soluciones para acompañar tus procesos productivos
                con calidad y respaldo.
              </p>
            </div>
            <div className="solution-grid">
              {soluciones.map((item) => (
                <article className="solution-card" key={item.numero}>
                  <div className="solution-image">
                    <img src={item.imagen} alt={item.titulo} loading="lazy" />
                    <span>{item.numero}</span>
                  </div>
                  <div className="solution-body">
                    <h3>{item.titulo}</h3>
                    <p>{item.texto}</p>
                    <a href={CATALOGO_URL} target="_blank" rel="noreferrer">
                      Consultar productos <span>↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="brands section" id="marcas">
          <div className="container">
            <p className="eyebrow">
              <span /> RESPALDO Y CONFIANZA
            </p>
            <div className="brands-heading">
              <h2>
                Marcas que mueven
                <br />
                <em>la industria.</em>
              </h2>
              <p>
                Trabajamos con marcas reconocidas del sector. Consulta
                disponibilidad y opciones con nuestro equipo comercial.
              </p>
            </div>
            <div className="brand-list">
              {marcas.map((marca) => (
                <div className="brand-item" key={marca.nombre}>
                  <img
                    src={marca.imagen}
                    alt={`Logotipo ${marca.nombre}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <p className="brand-note">
              La disponibilidad de marcas y productos puede variar. Consulta con
              DIAEMEX.
            </p>
          </div>
        </section>

        <section className="technical section" id="servicio">
          <div className="container technical-layout">
            <div className="technical-image">
              <img
                src="/imagenes/equipos-refacciones.jpg"
                alt="Equipos y componentes para soldadura y corte industrial"
                loading="lazy"
              />
              <div className="technical-image-label">
                <span className="technical-label-mark">30+</span>
                <span>
                  Experiencia al servicio
                  <br />
                  de tu industria
                </span>
              </div>
            </div>

            <div className="technical-content">
              <p className="eyebrow">
                <span /> SERVICIO TÉCNICO DIAEMEX
              </p>
              <h2>
                Soporte especializado
                <br />
                <em>para tu industria.</em>
              </h2>
              <p className="technical-lead">
                Te acompañamos a encontrar los equipos, consumibles y
                refacciones adecuados para que tus procesos de soldadura y corte
                sigan trabajando con confianza.
              </p>

              <div className="technical-services">
                <div className="technical-service">
                  <span>01</span>
                  <div>
                    <h3>Asesoría en equipos</h3>
                    <p>
                      Orientación para elegir soluciones de acuerdo con tu
                      operación.
                    </p>
                  </div>
                </div>
                <div className="technical-service">
                  <span>02</span>
                  <div>
                    <h3>Consumibles y refacciones</h3>
                    <p>
                      Apoyo para identificar piezas y materiales para tus
                      procesos.
                    </p>
                  </div>
                </div>
                <div className="technical-service">
                  <span>03</span>
                  <div>
                    <h3>Soluciones industriales</h3>
                    <p>
                      Atención enfocada en tus necesidades de soldadura y corte.
                    </p>
                  </div>
                </div>
              </div>

              <a
                className="button button-red contact-button"
                href={waLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Contactar a DIAEMEX por WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="21"
                  height="21"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16 2.5A13.3 13.3 0 0 0 4.5 22.5L2.7 29.3l7-1.8A13.3 13.3 0 1 0 16 2.5Zm0 24.2a11 11 0 0 1-5.6-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4A11 11 0 1 1 16 26.7Zm6-8.2c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2-.4.2-.7.1a9 9 0 0 1-2.7-1.7 10 10 0 0 1-1.9-2.3c-.2-.3 0-.5.2-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.2 3.1 1.4 3.3a14 14 0 0 0 5.3 4.7c.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.3.2-1.5s-.2-.2-.5-.4Z" />
                </svg>
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="catalog-cta">
          <div className="container catalog-inner">
            <div>
              <p className="eyebrow">
                <span /> CATÁLOGO DE PRODUCTOS
              </p>
              <h2>
                Encuentra lo que tu
                <br />
                <em>proyecto necesita.</em>
              </h2>
              <p>
                Consulta piezas, consumibles, equipos y refacciones disponibles
                en nuestro catálogo en línea.
              </p>
            </div>
            <a
              className="button button-light"
              href={CATALOGO_URL}
              target="_blank"
              rel="noreferrer"
            >
              Visitar catálogo DIAEMEX <span>↗</span>
            </a>
          </div>
        </section>

        <section className="contact section" id="contacto">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow dark">
                <span /> CONTACTO
              </p>
              <h2>
                Hagamos equipo
                <br />
                <em>en tu próximo proyecto.</em>
              </h2>
              <p className="contact-lead">
                Comunícate con nuestro equipo comercial para solicitar
                información, asesoría o una cotización.
              </p>
            </div>
            <div className="contact-card">
              <div className="contact-row">
                <span className="contact-icon">☎</span>
                <div>
                  <small>Teléfono y WhatsApp</small>
                  <a href={waLink}>+52 1 55 8056 2821</a>
                </div>
              </div>
              <div className="contact-row">
                <span className="contact-icon">✉</span>
                <div>
                  <small>Correo comercial</small>
                  <a href={`mailto:${CORREO}`}>{CORREO}</a>
                </div>
              </div>
              <div className="contact-row">
                <span className="contact-icon">↗</span>
                <div>
                  <small>Catálogo en línea</small>
                  <a href={CATALOGO_URL} target="_blank" rel="noreferrer">
                    diaemex.netlify.app
                  </a>
                </div>
              </div>
              <a
                className="button button-red contact-button"
                href={waLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Contactar a DIAEMEX por WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="21"
                  height="21"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16 2.5A13.3 13.3 0 0 0 4.5 22.5L2.7 29.3l7-1.8A13.3 13.3 0 1 0 16 2.5Zm0 24.2a11 11 0 0 1-5.6-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4A11 11 0 1 1 16 26.7Zm6-8.2c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2-.4.2-.7.1a9 9 0 0 1-2.7-1.7 10 10 0 0 1-1.9-2.3c-.2-.3 0-.5.2-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.2 3.1 1.4 3.3a14 14 0 0 0 5.3 4.7c.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.3.2-1.5s-.2-.2-.5-.4Z" />
                </svg>
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <a className="footer-brand" href="#inicio">
            <img src="/logo-diaemex.png" alt="DIAEMEX" />
          </a>
          <p>Distribuidora de Aleaciones y Equipos Mexicanos, S.A. de C.V.</p>
          <a href={CATALOGO_URL} target="_blank" rel="noreferrer">
            Consultar catálogo ↗
          </a>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} DIAEMEX. Todos los derechos reservados.
          </span>
          <span>Materiales que impulsan tu industria.</span>
        </div>
      </footer>

      {showInstallHelp && (
        <div
          className="install-help-backdrop"
          role="presentation"
          onClick={() => setShowInstallHelp(false)}
        >
          <section
            className="install-help"
            role="dialog"
            aria-modal="true"
            aria-labelledby="install-help-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="install-help-close"
              type="button"
              onClick={() => setShowInstallHelp(false)}
              aria-label="Cerrar instrucciones"
            >
              ×
            </button>
            <p className="eyebrow">
              <span /> APLICACIÓN DIAEMEX
            </p>
            <h2 id="install-help-title">
              {isIOS
                ? "Instala DIAEMEX en tu iPhone"
                : "Instala DIAEMEX en tu dispositivo"}
            </h2>
            {isIOS ? (
              <ol>
                <li>
                  Abre esta página en <strong>Safari</strong>.
                </li>
                <li>
                  Toca el botón <strong>Compartir</strong> (el cuadrado con una
                  flecha hacia arriba).
                </li>
                <li>
                  Selecciona <strong>Agregar a pantalla de inicio</strong>.
                </li>
                <li>
                  Confirma con <strong>Agregar</strong>.
                </li>
              </ol>
            ) : (
              <ol>
                <li>
                  Abre DIAEMEX en <strong>Google Chrome</strong>.
                </li>
                <li>Toca el menú de los tres puntos (⋮).</li>
                <li>
                  Selecciona <strong>Instalar aplicación</strong> o{" "}
                  <strong>Añadir a pantalla de inicio</strong>.
                </li>
                <li>Confirma la instalación.</li>
              </ol>
            )}
            <p className="install-help-note">
              {isIOS
                ? "El icono de DIAEMEX aparecerá en la pantalla de inicio de tu iPhone."
                : "Si no aparece la opción, actualiza Chrome y comprueba que estés usando la dirección HTTPS publicada de DIAEMEX."}
            </p>
            <button
              className="button button-red"
              type="button"
              onClick={() => setShowInstallHelp(false)}
            >
              Entendido
            </button>
          </section>
        </div>
      )}

      <a
        className="floating-wa"
        href={waLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar a DIAEMEX por WhatsApp"
        title="Escríbenos por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="white"
          aria-hidden="true"
        >
          <path d="M16 2.5A13.3 13.3 0 0 0 4.5 22.5L2.7 29.3l7-1.8A13.3 13.3 0 1 0 16 2.5Zm0 24.2a11 11 0 0 1-5.6-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4A11 11 0 1 1 16 26.7Zm6-8.2c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2-.4.2-.7.1a9 9 0 0 1-2.7-1.7 10 10 0 0 1-1.9-2.3c-.2-.3 0-.5.2-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.2 3.1 1.4 3.3a14 14 0 0 0 5.3 4.7c.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.3.2-1.5s-.2-.2-.5-.4Z" />
        </svg>
      </a>
    </>
  );
}

export default App;

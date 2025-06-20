import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <Head>
        <title>Qardeal - En Construcción</title>
        <meta name="description" content="Sitio en construcción - Qardeal" />
      </Head>

      {/* Fondo oscuro con gradiente */}
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #1C1C1C 0%, #2B2B2B 100%)",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Logo en la esquina superior derecha */}
        <header
          style={{
            padding: isMobile ? "1rem" : "1rem 2rem",
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-end",
          }}
        >
          <Image
            src="/logos/Qardeal_logo_completo.png"
            alt="Logo Qardeal"
            width={isMobile ? 120 : 150}
            height={isMobile ? 40 : 50}
            priority
          />
        </header>

        {/* Contenido principal */}
        <main
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? "1rem" : "2rem",
            flexDirection: isMobile ? "column" : "row",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          {/* Texto en español a la izquierda */}
          <div
            style={{
              maxWidth: isMobile ? "100%" : "550px",
              marginBottom: isMobile ? "2rem" : 0,
            }}
          >
            <h1
              style={{
                fontSize: isMobile ? "2.2rem" : "3rem",
                margin: 0,
                fontWeight: "bold",
                color: "#FFC107", // Amarillo/naranja
              }}
            >
              ¡Próximamente!
            </h1>
            <h2
              style={{
                fontSize: isMobile ? "1.3rem" : "2rem",
                margin: isMobile ? "0.8rem 0" : "1rem 0",
                color: "#FFFFFF", // Blanco
              }}
            >
              Sitio en construcción
            </h2>
            <p
              style={{
                fontSize: isMobile ? "0.95rem" : "1rem",
                color: "#CCCCCC", // Gris claro
                lineHeight: 1.6,
                maxWidth: isMobile ? "100%" : "400px",
                marginBottom: isMobile ? "1.2rem" : "1.5rem",
              }}
            >
              En Qardeal estamos trabajando para ofrecerte una experiencia única
              y de calidad. ¡Estate atento a nuestras actualizaciones!
            </p>
          </div>

          {/* Imagen de conos (512x512) a la derecha */}
          <div
            style={{
              marginLeft: isMobile ? 0 : "3rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/logos/conos.png"
              alt="Conos de construcción"
              width={isMobile ? 260 : 615}
              height={isMobile ? 210 : 512}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </main>
      </div>
    </>
  );
}

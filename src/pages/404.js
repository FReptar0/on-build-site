import Head from "next/head";
import Image from "next/image";

export default function Home() {
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
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Image
            src="/logos/Qardeal_logo_completo.png"
            alt="Logo Qardeal"
            width={150}
            height={50}
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
            padding: "2rem",
          }}
        >
          {/* Texto en español a la izquierda */}
          <div style={{ maxWidth: "550px" }}>
            <h1
              style={{
                fontSize: "3rem",
                margin: 0,
                fontWeight: "bold",
                color: "#FFC107", // Amarillo/naranja
              }}
            >
              ¡Próximamente!
            </h1>
            <h2
              style={{
                fontSize: "2rem",
                margin: "1rem 0",
                color: "#FFFFFF", // Blanco
              }}
            >
              Sitio en construcción
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#CCCCCC", // Gris claro
                lineHeight: 1.6,
                maxWidth: "400px",
                marginBottom: "1.5rem",
              }}
            >
              En Qardeal estamos trabajando para ofrecerte una experiencia única
              y de calidad. ¡Estate atento a nuestras actualizaciones!
            </p>
          </div>

          {/* Imagen de conos (512x512) a la derecha */}
          <div style={{ marginLeft: "3rem" }}>
            <Image
              src="/logos/conos.png"
              alt="Conos de construcción"
              width={615}
              height={512}
            />
          </div>
        </main>
      </div>
    </>
  );
}

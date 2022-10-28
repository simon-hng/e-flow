import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="p-4">e-Flow</header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import '../styles/globals.css'
import "../Custom-styles/nav.css";


import AppProvider from "../context/context";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;

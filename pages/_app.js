import "../styles/globals.css";
import "../styles/header.css";
import "../styles/product.css";
import "../styles/categorie.css";

import Layout from "../src/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

import React from "react";
import { Helmet } from 'react-helmet';
import Products from "../../components/Products";
import initialState from "../../initialState";

const Home = () => {
  return <>
    <Helmet>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TU_USER" />
      <meta name="twitter:creator" content="@TU_USER" />
      <meta name="twitter:title" content="Platzi Conf Store" />
      <meta name="twitter:description" content="Platzi Conf Store" />
      <meta
        name="twitter:image"
        content="LINK_THUMBNAIl"
      />
      <meta property="og:title" content="Platzi Conf Store" />
      <meta property="og:description" content="Platzi Conf Store" />
      <meta
        property="og:image"
        content="LINK_THUMBNAIL"
      />
      <meta property="og:url" content="platzistore.xyz" />
      <meta property="og:site_name" content="Platzi Conf Store" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="article" />
      <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
    </Helmet>
    <Products products={initialState.products} />
  </>;
};

export default Home;

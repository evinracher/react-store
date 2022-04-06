const config = {
  googleMapsApiKey: String(process.env.GOOGLE_MAP_JS_API_KEY),
  paypalClientId: String(process.env.PAYPAL_CLIENT_ID),
  strapi: String(process.env.STRAPI_BASE_URL),
};
export default config;

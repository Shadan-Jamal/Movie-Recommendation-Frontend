interface Config {
    server_url : string,
    omdb_api : string,
  }
  const server_url = import.meta.env.MODE === "development" ? import.meta.env.VITE_SERVER_URL_DEV : import.meta.env.VITE_SERVER_URL_PROD;
  const config: Config = {
   server_url,
   omdb_api : import.meta.env.VITE_OMDB_API,
  };
  export default config;
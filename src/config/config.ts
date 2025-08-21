interface Config {
    server_url : string,
    omdb_api : string,
  }
  const config: Config = {
   server_url : import.meta.env.VITE_SERVER_URL,
   omdb_api : import.meta.env.VITE_OMDB_API,
  };
  
  export default config;
interface Config {
    server_url : string
  }
  
  const config: Config = {
   server_url : import.meta.env.VITE_SERVER_URL
  };
  
  export default config;
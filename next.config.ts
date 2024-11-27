const nextConfig = {

  rewrites: () => 
  { // Sobrescrevendo rotas
      return [
          {
              source: "/", // Nome que vai aparecer na URL
              destination: "/home", // Nome que da pasta que está
          },
          {
            source: "/login",
            destination: "/login",

          },
      ]
  }
};

export default nextConfig;
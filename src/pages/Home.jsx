const Home = () => {
  return (
    <>
      <h1>
        Hola, este es el componente {"<Home>"} y solo puedes acceder a el cuando
        has iniciado sesión y ahora no puedes ir al componente {"<Login>"}
        aunque pongas la url directamente en la barra de navegación a no ser que
        cierres sesión
      </h1>
    </>
  );
};

export default Home;

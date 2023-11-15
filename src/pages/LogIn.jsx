const LogIn = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <>
      <h2>
        Este es el componente {"<Login>"} y no puedes ir a ninguna otra ruta
        hasta que inicies sesión (no existe niguna cuenta o contraseña) solo pon
        tus datos para empezar a probar como funcionan las ruta protegidas
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <br />
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default LogIn;

import React from "react";

const Login = () => {

  const style = {
    container: "flex flex-wrap w-screen min-h-screen h-auto overflow-hidden overflow-y-auto",
    form: "flex flex-col bg-gray-900"
  }

  return (
    <>
      <div className={style.container}>
       <h1>Login</h1>
       <div className={style.form} >
        <p>Usuário</p>
        <input type="text" placeholder="Usuário"/>
        <p>Senha</p>
        <input type="text" placeholder="Senha"/>
       </div>
      </div>
    </>
  );
}

export default Login;



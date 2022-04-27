import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './signin.css';

import Logo from '../../assets/logo.png';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    
    alert('Please enter your');
  }

  return (
      <div className="container-center">
        <div className="login">
          <div className="container-logo">
            <img src={Logo} alt="Logo login" />
          </div>

          <form onSubmit={handleSubmit}>
            <h1>Entrar</h1>
            <input 
              type="text" 
              placeholder="email@email.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            
            <input 
              type="password" 
              placeholder="*********" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            
            <button type="submit">Acessar</button>
          </form>

          <Link to="/register">Cadastrar-se</Link>
        </div>
      </div>
  );
}

export default SignIn;

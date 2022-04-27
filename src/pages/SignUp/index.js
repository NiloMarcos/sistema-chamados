import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

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
            <h1>Cadastrar-se</h1>
            <input 
              type="text" 
              placeholder="Ex: Michel Oliveira" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />

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

          <Link to="/">Já tenho uma conta</Link>
        </div>
      </div>
  );
}

export default SignUp;

// src/GoogleLogin.js
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './firebase-config';

function GoogleLogin() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // O resultado tem a informação do usuário autenticado
      const user = result.user;
      console.log('Usuário autenticado:', user);
      alert('Usuário logado com sucesso!');
      // Redirecionar ou atualizar o estado conforme necessário
    } catch (error) {
      console.error('Erro ao fazer login com Google:', error);
      alert(error.message);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login com Google</button>
    </div>
  );
}

export default GoogleLogin;

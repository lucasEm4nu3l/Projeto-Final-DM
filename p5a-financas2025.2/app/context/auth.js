import React, { createContext, useEffect, useState } from 'react';

import api from '../services/api';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState(null); 
  const [loadingAuth, setLoadingAuth] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadStorage(){
      const storageUser = await AsyncStorage.getItem('@finToken');

      if(storageUser) {
        try {
          const response = await api.get('/me', {
            headers: {
              'Authorization': `Bearer ${storageUser}`
            }
          })

          api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
          setUser(response.data);
        } catch(error) {
          setUser(null);
        }
      }
      setLoadingAuth(false);
    }
    loadStorage();
  }, [])

  async function signOut(){
    await AsyncStorage.clear().then(() => {
      setUser(null);
    })
  }

  async function signUp(email, password, nome){
    setLoadingAuth(true);

    try{
      console.log("🚀 Iniciando POST em /users com dados:", { name: nome, email, password: '***' });
      
      const response = await api.post('/users', {
       name: nome,
       password: password,
       email: email,
      })
      
      console.log("✅ Status da resposta:", response.status);
      console.log("✅ Usuário cadastrado com sucesso:", response.data);
      
      setLoadingAuth(false);
      
      // Adicionar um delay antes de goBack para garantir que tudo foi processado
      setTimeout(() => {
        console.log("🔙 Voltando para tela anterior...");
        navigation.goBack();
      }, 1000);

    }catch(err){
      console.log("❌ ERRO AO CADASTRAR - Detalhes completos:", {
        mensagem: err.message,
        tipo_erro: err.code,
        resposta_status: err.response?.status,
        resposta_dados: err.response?.data,
        url_requisicao: err.config?.url,
        dados_enviados: err.config?.data,
        headers_requisicao: err.config?.headers
      });
      alert(`❌ Erro ao cadastrar: ${err.response?.data?.error || err.message}`);
      setLoadingAuth(false);
    }
  }

  async function signIn(email, password){
    setLoadingAuth(true);

    try{
      console.log("🚀 Iniciando login com email:", email);
      
      const response = await api.post('/login', {
        email: email,
        password: password
      })

      console.log("✅ Login bem-sucedido! Status:", response.status);
      console.log("✅ Dados recebidos:", { 
        id: response.data.id, 
        name: response.data.name, 
        email: response.data.email,
        tem_token: !!response.data.token
      });

      const { id, name, token } = response.data;

      if (!token) {
        throw new Error("Token não recebido do servidor");
      }

      await AsyncStorage.setItem('@finToken', token); 
      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      setUser({
        id,
        name,
        email: email,
      })

      console.log("✅ Usuário salvo no contexto");
      setLoadingAuth(false);

    }catch(err){
      console.log("❌ ERRO AO LOGAR - Detalhes:", {
        mensagem: err.message,
        status: err.response?.status,
        erro_resposta: err.response?.data,
        url: err.config?.url,
        email_enviado: err.config?.data
      });
      alert(`❌ Erro ao logar: ${err.response?.data?.error || err.message}`);
      setLoadingAuth(false);
    }

  }

  return(
    <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, signOut, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
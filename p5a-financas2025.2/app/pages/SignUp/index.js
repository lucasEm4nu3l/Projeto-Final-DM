import React, { useContext, useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';

import { 
  BackGround, 
  Container, 
  AreaInput, 
  Input, 
  SubmitButton, 
  SubmitText
} from '../signIn/styles';

import { AuthContext } from '../../context/auth';


export default function SignUp(){

  const { signUp, loadingAuth } = useContext(AuthContext)

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp(){
    if(nome === '' || email === '' || password === '') {
      console.log("❌ Campos vazios detectados:", { nome, email, password });
      alert('Por favor, preencha todos os campos!');
      return;
    }

    if(password.length < 6) {
      console.log("❌ Senha muito curta");
      alert('A senha deve ter no mínimo 6 caracteres!');
      return;
    }

    console.log("✅ Iniciando cadastro com:", { nome, email });
    signUp(email, password, nome);
  }

  return(
    <BackGround>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >

        <AreaInput>
          <Input
            placeholder="Nome"
            value={nome}
            onChangeText={ (text) => setNome(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Seu email"
            value={email}
            onChangeText={ (text) => setEmail(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Sua senha"
            value={password}
            onChangeText={ (text) => setPassword(text) }
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <SubmitText>Cadastrar</SubmitText>
            )
          }
        </SubmitButton>

      </Container>

    </BackGround>
  )
}
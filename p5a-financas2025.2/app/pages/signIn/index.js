import React, { useContext, useState } from 'react';
import { Platform } from 'react-native';

import { 
  BackGround, 
  Container, 
  Logo, 
  AreaInput, 
  Input, 
  SubmitButton, 
  SubmitText,
  Link,
  LinkText
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth';

export default function SignIn(){
  const navigation = useNavigation();

  const { signIn } = useContext(AuthContext);

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  function handleLogin(){
    if(email === '' || password === '') {
      console.log("❌ Campos vazios:", { email, password });
      alert('Por favor, preencha email e senha!');
      return;
    }

    if(password.length < 6) {
      console.log("❌ Senha muito curta");
      alert('A senha deve ter no mínimo 6 caracteres!');
      return;
    }

    console.log("✅ Iniciando login com email:", email);
    signIn(email, password);
  }
  
  return(
    <BackGround>

      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo
          source={require('../../../assets/Logo.png')}
        />

        <AreaInput>
          <Input
            value = {email}
            placeholder="Email"
            onChangeText={ (text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            value={password}
            placeholder="Senha"
            onChangeText={ (text) => setPassword(text) }

          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8}
          onPress={handleLogin}
        >
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link onPress={ () => navigation.navigate('SignUp') }>
          <LinkText>Criar uma conta gratuita</LinkText>
        </Link>

      </Container>

    </BackGround>
  )
}
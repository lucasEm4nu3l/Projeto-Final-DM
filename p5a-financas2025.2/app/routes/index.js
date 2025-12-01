import React, { useContext } from 'react';
import { View } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { AuthContext } from '../context/auth';

function Routes(){
  const { signed } = useContext(AuthContext);

  // while loading auth state you could show a spinner here
  if(!signed) return <AuthRoutes />;

  // When signed, show a global Header above the app navigator
  return (
    <View style={{ flex: 1 }}>
      <AppRoutes />
    </View>
  );
}

export default Routes;
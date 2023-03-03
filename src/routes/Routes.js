import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './Stacks/stackMain';
import StackAdm from './Stacks/stackAdm';
import UserStack from './Stacks/stackUser';

export default function () {
  const auth = true
  return (
      <NavigationContainer>
        <Stack>
          {auth ? <UserStack/> : <StackAdm/>}
        </Stack>
      </NavigationContainer>
  );
}

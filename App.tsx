import React from 'react';
import DateHead from './components/DateHead';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export default function App(): React.JSX.Element {
  const today = new Date();

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
        <DateHead today={today} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

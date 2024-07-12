import React from 'react';
import ReactNativeModal from 'react-native-modal';
import {Button, SafeAreaView, Text} from 'react-native';

function App() {
  const [open, setOpen] = React.useState(true);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ReactNativeModal
        backdropColor="red"
        isVisible={open}
        onBackdropPress={() => setOpen(false)}>
        <Text style={{fontSize: 54}}>Modal contents</Text>
      </ReactNativeModal>
      <Button title="Open Modal" onPress={() => setOpen(true)} />
    </SafeAreaView>
  );
}

export default App;

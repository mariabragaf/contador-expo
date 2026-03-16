import { StatusBar } from 'expo-status-bar';
import { useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [ contador, setContador ] = useState(0);

  const incrementar = () => {
    setContador ( contador + 1 );
  };
  const decrementar = () => {
    setContador ( contador - 1 );
  };
  const resetar = () => {
    setContador (0);
  };

  return (
    <View style = { styles.container }>
      <Text style = { styles.numero }> { contador } </Text>

      <View style = { styles.linha }>
        <TouchableOpacity style = { styles.botao } onPress = { decrementar }>
          <Text style = { styles.texto }>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style = { styles.botao } onPress = { incrementar }>
          <Text style = { styles.texto }>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style = { styles.botao } onPress = { resetar }>
          <Text style = { styles.texto }>Reset</Text>
        </TouchableOpacity>

      </View>

      <StatusBar style = "auto"></StatusBar>

    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },

  numero: {
    fontSize: 50,
    color: '#f398bc',
  },

  linha: {
    flexDirection: 'row',
    marginTop: 20,
  },

  botao: {
    backgroundColor: '#e26e9d',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },

  texto: {
    fontSize: 30,
    color: '#fff',
  },
});



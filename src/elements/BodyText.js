import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class BodyText extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Hello!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.creat({
  text: {
    color: '#DDD',
    backgroundColor: '#eee',
  },
});


export default BodyText;

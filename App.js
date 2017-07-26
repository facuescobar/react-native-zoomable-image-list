import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from './src/slider';

export default class App extends React.Component {
  render() {
    const images = [
      {id: 'Image 1 600x600', url: 'https://unsplash.it/600/600?random&8869', width: 600, height: 600},
      {id: 'Image 2 600x400', url: 'https://unsplash.it/600/400?random&4343', width: 600, height: 400},
      {id: 'Image 3 400x600', url: 'https://unsplash.it/400/600?random&6642', width: 400, height: 600},
      {id: 'Image 4 600x300', url: 'https://unsplash.it/600/300?random&5513', width: 600, height: 300},
      {id: 'Image 5 300x600', url: 'https://unsplash.it/300/600?random&1512', width: 600, height: 300},
      {id: 'Image 6 600x200', url: 'https://unsplash.it/600/200?random&4315', width: 600, height: 200},
      {id: 'Image 7 200x600', url: 'https://unsplash.it/200/600?random&3123', width: 200, height: 600},
    ];

    return (
      <View style={{flex:1,backgroundColor: 'crimson'}}>
        <Slider
          images={images}
          initial={1}
        />
      </View>
    );
  }
}

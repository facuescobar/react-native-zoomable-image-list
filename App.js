import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from './src/slider';

export default class App extends React.Component {
  render() {
    // const images = [
    //   {id: 'Image 1 600x600', url: 'https://unsplash.it/600/600?random&8869', width: 600, height: 600},
    //   {id: 'Image 2 600x400', url: 'https://unsplash.it/600/400?random&4343', width: 600, height: 400},
    //   {id: 'Image 3 400x600', url: 'https://unsplash.it/400/600?random&6642', width: 400, height: 600},
    //   {id: 'Image 4 600x300', url: 'https://unsplash.it/600/300?random&5513', width: 600, height: 300},
    //   {id: 'Image 5 300x600', url: 'https://unsplash.it/300/600?random&1512', width: 600, height: 300},
    //   {id: 'Image 6 600x200', url: 'https://unsplash.it/600/200?random&4315', width: 600, height: 200},
    //   {id: 'Image 7 200x600', url: 'https://unsplash.it/200/600?random&3123', width: 200, height: 600},
    // ];

    const images = [
      { id: 'Image 1', url: 'https://cdn-uploads.bunk1.com/organizations/995/media_item/photo/148255/9ecf2c2684.jpg', width: 1920, height: 1080 },
      { id: 'Image 2', url: 'https://cdn-uploads.bunk1.com/organizations/995/media_item/photo/148256/a95e6be74b.png', width: 1600, height: 850 },
      { id: 'Image 3', url: 'https://cdn-uploads.bunk1.com/organizations/995/media_item/photo/148258/b5e661d344.gif', width: 250, height: 188 },
      { id: 'Image 4', url: 'https://cdn-uploads.bunk1.com/organizations/995/media_item/photo/148257/a05311ac7c.gif', width: 128, height: 80 },
      { id: 'Image 5', url: 'https://cdn-uploads.bunk1.com/organizations/995/media_item/photo/143892/c25f062e30.jpg', width: 274, height: 206 },
      { id: 'Image 6', url: 'https://cdn-uploads.bunk1.com/organizations/995/media_item/photo/143893/cd1f4b5ee7.jpg', width: 960, height: 720 },
    ]

    return (
      <View style={{
        // flex:1,
        backgroundColor: 'crimson',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}>
        <Slider
          images={images}
          initial={1}
        />
      </View>
    );
  }
}

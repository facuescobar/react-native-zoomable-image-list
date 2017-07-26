
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';

export default class Slide extends Component {

  _scaleImage(
    containerWidth,
    containerHeight,
    imageWidth,
    imageHeight,
  ) {
    let ratio = [
      containerWidth / imageWidth,
      (containerHeight) / imageHeight,
    ];
    ratio = Math.min(ratio[0], ratio[1]);
    return {
      width: imageWidth * ratio,
      height: imageHeight * ratio,
    };
  }

  _renderImage() {
    const {bounds, image} = this.props;

    const imageScale = this._scaleImage(
      bounds.width, bounds.height,
      image.width, image.height
    );

    const imageStyles = {
      width: imageScale.width,
      height: imageScale.height,
    };

    return (
      <ScrollView
        contentContainerStyle={[
          SlideStyles.scrollView,
          imageStyles,
        ]}
        centerContent={true}
        minimumZoomScale={1.0}
        maximumZoomScale={3.5}
        horizontal={true}
        bounces={true}
      >
        <Image
          source={{
            uri: image.url,
          }}
          style={imageStyles}
        />
      </ScrollView>
    )
  }

  render() {
    const {bounds, image} = this.props;

    const containerStyles = {
      width: bounds.width,
      height: bounds.height,
    };

    return (
      <View
        style={[
          SlideStyles.imageContainer,
          containerStyles,
        ]}
      >
        {this._renderImage()}
      </View>
    );
  }
}


const SlideStyles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkcyan'
  },
  image: {
    alignSelf: 'center',
  },
  imageError: {
    alignSelf: 'center',
  },
  imageErrorText: {
    fontSize: 12,
    color: '#ffffff',
    alignSelf: 'center',
  },
  imageErrorButton: {
    padding: 20 * 2,
    fontSize: 12,
    color: '#999999',
    alignSelf: 'center',
  },
  activityIndicator: {
    position: 'absolute',
    alignSelf: 'center',
  },
});

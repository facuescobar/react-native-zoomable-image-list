
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


  state= {
    width: 0,
    height: 0,
  }

  zoomScale = 1;

  componentWillMount() {
    const {bounds, image} = this.props;

    const imageScale = this._scaleImage(
      bounds.width, bounds.height,
      image.width, image.height
    );

    this.setState({
      width: imageScale.width,
      height: imageScale.height,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isActive && this.zoomScale !== 1){
      console.log('SliderPreload:', nextProps.index, this.refs)
      this.refs.slideView.scrollResponderZoomTo({
        width: this.state.width,
        height: this.state.height,
      })
    }
  }

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

  onScrollUpdate (event) {
    // console.log(event.nativeEvent.zoomScale);
    this.zoomScale= event.nativeEvent.zoomScale;
  }

  _renderImage() {
    const {image} = this.props;
    // const {bounds, image} = this.props;
    //
    // const imageScale = this._scaleImage(
    //   bounds.width, bounds.height,
    //   image.width, image.height
    // );
    //
    // const imageStyles = {
    //   width: imageScale.width,
    //   height: imageScale.height,
    // };

    return (
      <ScrollView
        ref='slideView'
        contentContainerStyle={[
          SlideStyles.scrollView,
        ]}
        zoomScale={1}
        centerContent={true}
        minimumZoomScale={1.0}
        maximumZoomScale={3.5}
        horizontal={true}
        bounces={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onScroll={this.onScrollUpdate.bind(this)}
        scrollEventThrottle={16}

      >
        <Image
          source={{
            uri: image.url,
          }}
          style={[
            SlideStyles.image,
            {
              width: this.state.width,
              height: this.state.height
            }
          ]}
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
    backgroundColor: 'darkorange',
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkcyan'
  },
  image: {
    backgroundColor: '#000000'
    // alignSelf: 'center',
  },
});

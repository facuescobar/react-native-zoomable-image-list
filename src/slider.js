
import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {FlatList} from 'react-native';
import {find} from 'lodash';
import Slide from './slide';

const Device = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

export default class Slider extends Component {

  state = {
    bounds: {
      width: Device.width,
      height: Device.height,
    },
    index: 0,
  };

  componentWillMount() {
    const {initial} = this.props;

    this.setState({
      index: initial,
    });
  }

  _renderSliderItem({item: image, index}) {
    let preload = false;
    if (
        index >= (this.state.index - 2)
        && index <= (this.state.index + 2)
      ) {
      preload = true;
    }


    return (
      <Slide
        image={image}
        bounds={this.state.bounds}
        index={index}
        isActive={this.state.index===index}
        preload={preload}
      />
    );
  }

  _keyExtractor(item, index) {
    return index;
  }

  _getImageLayout(data, index) {
    const {bounds} = this.state;

    return {
      length: bounds.width,
      offset: bounds.width * index,
      index,
    };
  }

  _onImageScroll(e) {
    const contentOffset = e.nativeEvent.contentOffset;
    const viewSize = e.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const newIndex = Math.floor(contentOffset.x / viewSize.width);
    if (this.state.index !== newIndex && this.props.images[newIndex]) {
      // console.log('CurrentIndex', newIndex, this.props.images[newIndex])
      console.log('CurrentIndex', newIndex)
      this.setState({
        index: newIndex,
      });
    }
  }


  render() {
    const {images} = this.props;

    return (
      <FlatList
        pagingEnabled={true}
        horizontal={true}
        data={images}
        renderItem={this._renderSliderItem.bind(this)}
        keyExtractor={this._keyExtractor.bind(this)}
        initialScrollIndex={this.state.index}
        getItemLayout={this._getImageLayout.bind(this)}
        bounces={true}
        onMomentumScrollEnd={this._onImageScroll.bind(this)}
      />
    );
  }
}

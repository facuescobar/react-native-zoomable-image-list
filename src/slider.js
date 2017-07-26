
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
    return (
      <Slide
        image={image}
        bounds={this.state.bounds}
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
      />
    );
  }
}

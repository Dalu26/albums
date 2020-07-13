import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {albums: []};
  componentDidMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(Response => this.setState({albums: Response.data}));
  }
  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }
  render() {
    const {bodyStyle} = styles;
    return (
      <ScrollView>
        <View style={bodyStyle}>{this.renderAlbums()}</View>
      </ScrollView>
    );
  }
}
const styles = {
  bodyStyle: {
    paddingBottom: 70,
  },
};
export default AlbumList;

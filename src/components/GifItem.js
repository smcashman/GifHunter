import React from 'react';
import Spinner from './index.jsx';

function imagesLoaded(parentNode) {
  const imgElements = parentNode.querySelectorAll('img');
  for (const img of imgElements) {
    if (!img.complete) {
      return false;
    }
  }
  return true;
}

class GifItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      favorited: this.props.isFavorite,
      loading: true
    };
  }

  favoriteGif() {
    this.setState({ favorited: true });
    this.props.onFavoriteSelect(this.props.gif);
  }

  unfavoriteGif() {
    this.setState({ favorited: false });
    this.props.onFavoriteDeselect(this.props.gif);
  }

  renderFavoriteHeart = () => {
    if (! this.props.isAuthenticated) {
      return '';
    }

    if (this.state.favorited) {
      return <i className="favorite fa fa-heart" onClick={() => this.unfavoriteGif()} />;
    }

    return <i className="favorite fa fa-heart-o" onClick={() => this.favoriteGif()} />;
  };

 renderSpinner() {
    if (!this.state.loading) {
      return null;
    }
    return (
      <Spinner />
    );
  }

   handleImageChange() {
   
    const gifElement = this.refs.gfItem;
    this.setState({
      loading: !imagesLoaded(gifElement),
    });
  }


  render() {
    return (
      <div className="gif-item" ref="gfItem">
        {this.renderSpinner()}
        { this.renderFavoriteHeart() }
        <img src={this.props.gif.images.downsized.url} onClick={() => this.props.onGifSelect(this.props.gif)}  onLoad={this.handleImageChange.bind(this)} onError={this.handleImageChange.bind(this)}/>
      </div>
    );
  }
}

export default GifItem;
import React from 'react';

class ImageCard extends React.component {
  render() {
    return (
      <div>
        <img alt={this.props.image.description} src={this.rpops.image.urls.regular}/>
      </div>
    )
  }
}

export default ImageCard;

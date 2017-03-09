import React from 'react';
import Lightbox from 'react-images';

class ImageWall extends React.Component {

  constructor(props) {
    super(props);
    props = {
        images:[]
    }
  }

  render() {
    return (
      <div className="container">
          <Lightbox images={this.props.images} onclose={this.close()} />
      </div>
    );
  }
}


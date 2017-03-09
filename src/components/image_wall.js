import React from 'react';
import Lightbox from 'react-images';

class ImageWall extends React.Component {

  constructor(props) {
    super(props);
    props = {
        images:[{'src':'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/St_Louis_night_expblend_cropped.jpg/240px-St_Louis_night_expblend_cropped.jpg'}]
    }
  }

  close() {

  }

  render() {
    if(this.props.images)
    {
        return (
          <div className="container">
              <Lightbox images={this.props.images} onclose={() => this.close.bind(this)} />
          </div>
        );
    }
    return (
        <div></div>
    )
  }
}

export default ImageWall;

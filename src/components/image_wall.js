import React from 'react';
// John: Mucho tramposo!, con razn!
import Gallery from 'react-photo-gallery';

class ImageWall extends React.Component {

    // constructor(props)
    // {
    //     super(props);
    //     // console.log(props);
    //     // this.state = {
    //     //     lightboxIsOpen:true,
    //     // };
    //     // this.setState(props);
    // }


    render() {
        // if(this.props.images){
            return (
                  <div className="container">
                      <div className="row">
                            <div className="image-wall">
                                <Gallery cols={7} photos={this.props.images} onClickPhoto={this.props.clickp}/>
                            </div>
                      </div>
                  </div>
            );
        // }
        // else {
        //     return(<div></div>);
        // }
    }
}

export default ImageWall;

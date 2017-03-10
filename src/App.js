import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import jimp from 'jimp';
import SearchBar from './components/search.js'
import ImageWall from './components/image_wall.js'
import { PageHeader } from 'react-bootstrap';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search_term:'',
            'red' : [],
            'orange' : [],
            'yellow' : [],
            'green' : [],
            'cyan' : [],
            'blue' : [],
            'violet' : [],
            images:[
                    {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                    {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                     {'src':'http://farm3.static.flickr.com/2128/2290130826_8a154c1f8e_q.jpg',
                     'width':150,
                     'height':150},
                    ]
        }
    }

    clickp(evt)
    {
        console.log(evt);
    }

    urlform(obj) {
        var url = 'http://farm'+obj.farm+'.staticflickr.com/'+obj.server+'/'+obj.id+'_'+obj.secret+'_q.jpg';
        return {
            'src': url,
            'width':150,
            'height':150
        };
    }

    getimages(term) {
        console.log("Yei!");
        this.setState({'images':[]});
        var completed_req = 0;
        var responses = [];
        var colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet'];
        var url = 'http://localhost:9000/flickr/'+term
        var requests = [];
        var requests = colors.map((color)=> {
            return axios.get(url, {
                params:{
                    "color":color
                }
            })
        });
        // console.log()
        console.log(requests);
        axios.all(requests)
        .then((results) => {
            console.log(results);
            var responses = results.map((obj) => {
                return obj.data.photos.photo;
            });
            console.log(responses);
            var images = [];
            for(var i = 0; i < responses.length; i++)
            {
                for(var j = 0; j < responses[0].length; j++)
                {
                    images.push(responses[j][i]);
                }
            }
            // var images = [].concat.apply([], responses);
            console.log(images);
            var imgs = images.map((obj) =>{
                var url = 'http://farm'+obj.farm+'.staticflickr.com/'+obj.server+'/'+obj.id+'_'+obj.secret+'_q.jpg';
                return {
                    'src': url,
                    'width':150,
                    'height':150
                };
            });
            console.log(imgs);
            this.setState({images:imgs});
            jimp.read(imgs[0].src, (err, image) => {
                image.invert().getBase64(jimp.MIME_PNG, (err, src) => {
                    console.log(src);
                    var imgs = this.state.images;
                    imgs[0].src = src;
                    this.setState({images:imgs});
                    console.log(imgs);
                })
            });
            jimp.read(imgs[1].src, (err, image) => {
                image.blur(6).getBase64(jimp.MIME_PNG, (err, src) => {
                    var imgs = this.state.images;
                    imgs[1].src = src;
                    this.setState({images:imgs});
                })
            });

            jimp.read(imgs[2].src, (err, image) => {
                image.normalize().getBase64(jimp.MIME_PNG, (err, src) => {
                    var imgs = this.state.images;
                    imgs[2].src = src;
                    this.setState({images:imgs});
                })
            });

            jimp.read(imgs[3].src, (err, image) => {
                image.grayscale().getBase64(jimp.MIME_PNG, (err, src) => {
                    var imgs = this.state.images;
                    imgs[3].src = src;
                    this.setState({images:imgs});
                })
            });
        });
    }

    render() {
        return (
            <div className="App">
                <PageHeader>Flickr Rainbow Wall <small>Search for an image and we'll sort it by color (RGB, HSV, Lab*)</small></PageHeader>
                <SearchBar getimages={this.getimages.bind(this)} clickp={this.clickp.bind(this)}></SearchBar>
                <ImageWall images={this.state.images}></ImageWall>
            </div>
        );
  }
}

export default App;

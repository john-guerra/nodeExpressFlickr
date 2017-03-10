import React, {Component} from 'react';
import update from 'immutability-helper';
//import AgregarItem from './agregarItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stringToQuery: "",
      componentMounted: false,
      photos: [[],[],[],[],[],[],[]],
      colors: ["red","orange", "yellow", "green", "blue","indigo","violet" ]
    }
  }

  componentDidMount() {
    this.setState({componentMounted: true})
  }

  getUrl(ph) {
    return "https://farm"+
        ph.farm +
        ".staticflickr.com/" +
        ph.server +
        "/"+
        ph.id+
        "_" +
        ph.secret +
        "_s.jpg";
    }

  searchAll(){
    if (this.state.componentMounted){
      var i, c;
      var newPhotos = [];
      for (i=0; i<7; i++){
        c = this.state.colors[i];
        fetch('/flickr/' + this.state.stringToQuery)
          .then(function(response) {
            if(response.ok) {
              return response.json();
            }
            throw new Error('Network response was not ok.');
          }.bind(this))
          .then(function(data) {
            console.log("Got:" + this.state.stringToQuery + "%20" + c);
            newPhotos.push(data.photos.photo);
            //console.log("new pho: "+newPhotos);
            if (i==6){
              console.log("hago push de: "+newPhotos.lenght+" "+newPhotos[0].lenght);
              this.setState({photos: newPhotos });
            }
          }.bind(this))
          .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
          });
      }
    }
  }

  render() {
    return(
      <div>

        <br />

        <div className="row">
          <div className="col-md-2 col-xs-2"> </div>
          <div className="col-md-10 col-xs-10">
            <h1>FLICKR RAINBOW</h1>
            <h3> by: MCRG </h3>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-2 col-xs-2"> </div>
          <div className="col-md-10 col-xs-10">
            <input type="text" value={this.state.stringToQuery} onChange={(event) => { this.setState({stringToQuery: event.target.value}) } } />
            <button className="btn btn-primary btn-xs pull-right" onClick={this.searchAll.bind(this)}> Buscar </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2 col-xs-2"> </div>
          {
            this.state.colors.map(function(col, i) {
              var photos_col = this.state.photos[col];
              return (
                <div key={i} className="col-md-1 col-xs-1">
                  {
                    photos_col != null &&
                    photos_col.map(function(ph, j) {
                      var url = this.getUrl(ph);
                      return (
                        <div>
                          <img key={j} src={url} alt="result of column color" style={{width:"100vh"}}></img>
                          <br />
                        </div>
                      );
                    }, this)
                  }
                </div>
              );
            }, this)
          }
          <div className="col-md-3 col-xs-3"> </div>
        </div>

      </div>
    );
  }
}

export default App;

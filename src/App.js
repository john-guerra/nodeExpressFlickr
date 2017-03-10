import React, {Component} from 'react';
import update from 'immutability-helper';
//import AgregarItem from './agregarItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stringToQuery: "",
      componentMounted: false,
      photos: [],
      colors: ["red","orange", "yellow", "green", "blue","indigo","violet" ],
      colors_order: [],
      background_color: "black"
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

  makeQuery(c){
    fetch('/flickr/' + this.state.stringToQuery + "%20" + c)
      .then(function(response) {
        if(response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      }.bind(this))
      .then(function(data) {
        console.log("Got em! " + this.state.stringToQuery + " " + c);
        var phs = this.state.photos;
        var nco = this.state.colors_order;
        phs.push(data.photos.photo);
        nco.push(c);
        this.setState({ photos: phs });
        this.setState({ colors_order: nco });
        this.setState({ background_color: c});
      }.bind(this))
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
  }

  searchAll(){
    if (this.state.componentMounted){
      this.setState({background_color: "black" });
      this.setState({photos: [] });
      this.setState({colors_order: [] });
      var i, c;
      for (i=0; i<7; i++){
        c = this.state.colors[i];
        this.makeQuery(c);
      }
    }
  }

  render() {
    var styleBG = { backgroundColor: this.state.background_color };
    return(
      <div style={styleBG}>

        <br />

        <div className="row">
          <div className="col-md-2 col-xs-2"> </div>
          <div className="col-md-8 col-xs-8" style={{'textAlign':'center'}}>
            <h1>Flickr RAINBOW</h1>
            <p>by: <a target="_blank" href="https://mariacamilaremolinagutierrez.github.io/"> Maria Camila Remolina Gutiérrez </a></p>
          </div>
          <div className="col-md-2 col-xs-2"> </div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-4 col-xs-4"> </div>
          <div className="col-md-4 col-xs-4">
            <div className="row">
              <div className="col-md-10 col-xs-10">
                <input type="text" className="form-control" value={this.state.stringToQuery} onChange={(event) => { this.setState({stringToQuery: event.target.value}) } } />
              </div>
              <div className="col-md-2 col-xs-2">
                <button className="btn btn-default" type="button" onClick={this.searchAll.bind(this)}> Search </button>
              </div>
            </div>
            {/*
              <input type="text" value={this.state.stringToQuery} onChange={(event) => { this.setState({stringToQuery: event.target.value}) } } />
              <button className="btn btn-primary btn-xs pull-right" onClick={this.searchAll.bind(this)}> Buscar </button>
            */}
          </div>
          <div className="col-md-4 col-xs-4"> </div>
        </div>

        <br />
        <br />

        <div className="row">
          <div className="col-md-2 col-xs-2"> </div>
          {
            this.state.colors.map(function(col, i) {
              var photos_col = this.state.photos[i];
              return (
                <div key={i} className="col-md-1 col-xs-1">
                  {
                    photos_col != null &&
                    photos_col.map(function(ph, j) {
                      var url = this.getUrl(ph);
                      var urlLarge = "https://farm"+ph.farm+".staticflickr.com/"+ph.server+"/"+ph.id+"_"+ph.secret+".jpg"
                      return (
                        <div>
                          <a target="_blank" href={urlLarge}>
                            <img key={j} src={url} alt="result of column color" style={{width:"100%"}}></img>
                          </a>
                          <br />
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

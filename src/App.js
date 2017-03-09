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
      colors: ["red","orange", "yellow", "green", "blue","indigo", "violet" ],
      rows: [0,1,2,3,4,5]
    }
  }

  componentDidMount() {
    this.setState({componentMounted: true})
  }

  makeQuery(color) {
    console.log('ruta: /flickr/' + this.state.stringToQuery + " " + color);
    fetch('/flickr/' + this.state.stringToQuery)
      .then(function(response) {
        if(response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(function(data) {
        console.log("Gotit!");
        this.setState({photos: data.photos})
      })
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
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

  changeQuery(newString){
    this.setState({stringToQuery: newString});

    if (this.state.componentMounted){
      this.makeQuery('red');
    }
  }

  render() {
    return(
      <div>

        <br />

        <div className="row">
          <h1>FLICKR RAINBOW</h1>
          <p>
            by: MCRG
          </p>
        </div>

        <br />

        <div className="row">
          <input type="text" value={this.state.stringToQuery} onChange={(event) => { this.changeQuery(event.target.value) } } />
          {/* Componente: Fotos
          <div className="col-md-8 col-xs-12">
            <ListarItems ref={(input) => { this.listarItemsChild = input; }} user={this.state.user} />
          </div>
          */}
        </div>

        <div className="row">
          <br />
          {
            this.state.photos.map(function(ph, i) {
              var url = this.getUrl(ph);
              return (
                <img src={url} alt="photo" style="width:200px;height:200px;"></img>
              );
            }, this)
          }
          <br />
        </div>

      </div>
    );
  }
}

export default App;

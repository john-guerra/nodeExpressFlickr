import React from 'react';
import { FormGroup, FormControl} from 'react-bootstrap';


class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    props = {
        'term': ''
    }
  }

  search(term) {
    this.setState({term:term});
    console.log(term);
  }

  render() {
    return (
      <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
            <FormGroup>
                <FormControl type="text" placeholder="Search for an image" onChange={(evt) => this.search(evt.target.value)}/>
            </FormGroup>
        </div>
      </div>
      </div>
    );
  }
}

export default SearchBar;
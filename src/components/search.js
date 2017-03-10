import React from 'react';
import { FormGroup, FormControl} from 'react-bootstrap';


class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        'term': ''
    }
  }

  search(term) {
    this.setState({term:term});
    console.log(term);
    this.props.getimages(term);
  }

  render() {
    return (
      <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
            <FormGroup>
                <FormControl type="text" placeholder="Search for an image" onKeyPress={(evt) => {evt.key === 'Enter' ? this.search(evt.target.value) : null}}/>
            </FormGroup>
        </div>
      </div>
      </div>
    );
  }
}

export default SearchBar;
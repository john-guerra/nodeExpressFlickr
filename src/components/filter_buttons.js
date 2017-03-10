import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

export default class FilterButtons extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
    <div className="container">
      <div className="row">
        <ButtonGroup>
            <Button onClick={() => this.props.filteract('norm')}>Normalize</Button>
            <Button onClick={() => this.props.filteract('blur')}>Blur</Button>
            <Button onClick={() => this.props.filteract('gray')}>Grayscale</Button>
            <Button onClick={() => this.props.filteract('invert')}>Invert</Button>
            <Button onClick={() => this.props.filteract('none')}>None</Button>
        </ButtonGroup>
      </div>
    </div>
    );
  }
}

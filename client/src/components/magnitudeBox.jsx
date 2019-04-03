import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class MagnitudeBox extends Component {
    render() { 
        return ( 
            <Card border='dark' >
                <Card.Header className='scoreHeader'>
                    <h4>Magnitude</h4>
                </Card.Header>
                <Card.Body>
                    <Card.Text style={{textAlign: 'center'}}>
                        <h2>{this.props.magnitude}</h2>
                    </Card.Text>
                </Card.Body>
            </Card>
         );
    }
}
 
export default MagnitudeBox;
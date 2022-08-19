import React from "react";
import Col from 'react-bootstrap/Col';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';

import { unmountComponentAtNode} from "react-dom";


class Cards extends React.Component{

    render() {
        return (
            <Col sm={12} lg={3} key={this.props.person.id}>
                <MDBCard  id={this.props.person.id} style={{height:'100%'}}>
                    <MDBCardBody>
                        <MDBCardTitle> {this.props.person.name} </MDBCardTitle>
                        <MDBCardText> email: {this.props.person.email} </MDBCardText>
                        <MDBCardText> Phone: {this.props.person.phone} </MDBCardText>
                        <MDBCardText> Website: {this.props.person.website} </MDBCardText>
                        <MDBBtn onClick={() => { 
                            console.log("Removeperson", this.props.person.id)
                            this.props.removeperson(this.props.person.id)
                            }}>Remove</MDBBtn>
                    </MDBCardBody>      
                </MDBCard>
            </Col>
        )
    }
}

export default Cards;

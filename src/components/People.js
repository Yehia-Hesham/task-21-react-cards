import { Component } from "react";
import { unmountComponentAtNode} from "react-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    // MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';

class People extends Component{
    constructor(props) {
        super(props)   
        this.state = {
            people: []
        }     
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(people => {
                this.setState({
                    people: people
                })
            })
    }
    
    removeperson(id){
        console.log(id);
    }

    renderCards() {
        let peopleList = []
        this.state.people.map(person => {
            person.statusx = true;
            // console.log("test", this.state.people)
            return peopleList.push(
            <Col sm={12} lg={3}>
                <MDBCard id={person.id} style={{height:'100%'}}>
                {/* <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' /> */}
                    <MDBCardBody>
                    <MDBCardTitle> {person.name} </MDBCardTitle>
                    <MDBCardText> email: {person.email} </MDBCardText>
                    <MDBCardText>
                        Phone: {person.phone}
                    </MDBCardText>
                    <MDBCardText>
                        Website: {person.website}
                    </MDBCardText>
                    <MDBBtn href='#' onClick={() => { 
                        unmountComponentAtNode(document.getElementById(person.id));
                        // const result = words.filter(word => word.length > 6);

                        // console.log("unmound",person.id) 
                        // this.state.people.remove
                        }}>Remove</MDBBtn>
                    </MDBCardBody>      
                </MDBCard>
            </Col>
            )

        })
        console.log("People List ",peopleList)
        return peopleList;
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.renderCards()}
                </Row>
            </Container>
        )
    }
    
//     state ={
      
//       people: [
//         {
//           id: 1,
//           name: "name1",
//           email: "gmail1",
//           phone: "01000000001",
//           img_path: "https://www.kindpng.com/picc/m/28-286383_steve-jobs-face-steve-jobs-hd-png-download.png"
//         },
//         {
//           id: 2,
//           name: "name2",
//           email: "gmail1",
//           phone: "01000000001",
//           img_path: "https://www.kindpng.com/picc/m/28-286383_steve-jobs-face-steve-jobs-hd-png-download.png"
//         },
//         {
//           id: 3,
//           name: "name3",
//           email: "gmail1",
//           phone: "01000000001",
//           img_path: "https://www.kindpng.com/picc/m/28-286383_steve-jobs-face-steve-jobs-hd-png-download.png"
//         },
//         {
//           id: 4,
//           name: "name4",
//           email: "gmail1",
//           phone: "01000000001",
//           img_path: "https://www.kindpng.com/picc/m/28-286383_steve-jobs-face-steve-jobs-hd-png-download.png"
//         },
//         {
//           id: 5,
//           name: "name5",
//           email: "gmail1",
//           phone: "01000000001",
//           img_path: "https://www.kindpng.com/picc/m/28-286383_steve-jobs-face-steve-jobs-hd-png-download.png"
//         }
//       ]
//     }
}

export default People;

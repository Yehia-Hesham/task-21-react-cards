import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Cards from './Cards';

import { unmountComponentAtNode } from "react-dom";

class People extends React.Component{
    constructor() {
        super()   
        this.state = {
            people: []
        }     
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(people => {
                console.log("People mount");
                this.setState({
                    people: people
                })
            })
    }
    
    removeperson(id){
        console.log("before removeperson()", this);
        let people = this.state.people;
        const newlist = people.filter(person => person.id !== id)
        this.setState({people: newlist})
        console.log("before removeperson() ",newlist)
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.state.people.map((person, i) => {
                        return(
                        <Cards key={i} person ={person} removeperson ={(input) => this.removeperson(input)}/>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default People;

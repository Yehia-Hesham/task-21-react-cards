// import logo from './logo.svg';
import React, {Component} from 'react';
import People from './components/People'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Cards from "./components/Cards";

import './App.css';


class App extends Component {

  // state ={
  //   people: [{
  //       id: 1,
  //       name: "name1",
  //       email: "gmail1",
  //       phone: "01000000001",
  //       img_path: "https://www.kindpng.com/picc/m/28-286383_steve-jobs-face-steve-jobs-hd-png-download.png"
  //     },
  //     {
  //       id: 2,
  //       name: "name2",
  //       email: "gmail1",
  //       phone: "01000000001",
  //       img_path: "https://www.kindpng.com/picc/m/28-286383_steve-jobs-face-steve-jobs-hd-png-download.png"
  //     },
  //     {
  //       id: 3,
  //       name: "name3",
  //       email: "gmail1",
  //       phone: "01000000001",
  //       img_path: "https://www.kindpng.com/picc/m/28-286383_steve-jobs-face-steve-jobs-hd-png-download.png"
  //     },
  //     {
  //       id: 4,
  //       name: "name4",
  //       email: "gmail1",
  //       phone: "01000000001",
  //       img_path: "https://www.kindpng.com/picc/m/28-286383_steve-jobs-face-steve-jobs-hd-png-download.png"
  //     },
  //     {
  //       id: 5,
  //       name: "name5",
  //       email: "gmail1",
  //       phone: "01000000001",
  //       img_path: "https://www.kindpng.com/picc/m/28-286383_steve-jobs-face-steve-jobs-hd-png-download.png"
  //     }
  //   ]
  // }

  render() {
    // console.log(this.state.people)
    return (
      // <div className="App">
      //   <People people={this.state.people} />
      //   <Container id = 'container1'>
      //     <Row id = 'cards_list'>
      //       <Col sm={12} lg={3}>
      //         <People/>
      //       </Col>
      //     </Row>
      //   </ Container>
      // </div>
      <div>
        <h2>People</h2>
        <People/>
      </div>
    );
  }
}

export default App;

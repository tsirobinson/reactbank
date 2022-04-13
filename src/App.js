import './App.css';
import {Component} from 'react'
import Clock from './components/Clock'
import Form from './components/Form'
import Content from './components/Content'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: "Guest",
      bgColor: '#FFFFFF',
      txtColor: '#000000'
    }
  }

  changeUser = (e) => {
    e.preventDefault();

    const currUser = e.target[0].value;
    const currBgColor = e.target[1].value;
    const currTxtColor = e.target[2].value;
    console.log(currUser);
    console.log(currBgColor);
    console.log(currTxtColor);
    this.setState({user:currUser})
    this.setState({bgColor: '#' + currBgColor})
    this.setState({txtColor: '#' + currTxtColor})
    
  }

  render() {
    return (
      <div style={{
        backgroundColor: this.state.bgColor,
        color: this.state.txtColor,
        textAlign: 'center'
      }}>
        <Clock user={this.state.user} />
        <Content/>
        <h3>Customize Profile</h3>
        <Form changeUser={this.changeUser} />
      </div>
    );
  }
}

export default App;

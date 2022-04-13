import { Component } from 'react';
import axios from 'axios';


class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            apiData: {
                id: -1,
                description: "",
                amount: -1,
                date: "",
            },
            found: false
        }
    }

    handleSearchClick = async () => {
        let choice = document.getElementById("choice").value;
        let linkToAPI = 'https://moj-api.herokuapp.com/' + choice;

        try {
            let response = await axios.get(linkToAPI);
            this.setState({apiData: response.data, found: true});
        } catch (error) {
            if (error.response) {
                console.log(error.response.data); //Not Found
                console.log(error.response.status); //404
                this.setState({found: false});
            }
        }
    }
    
    makeList = () => {
        let element = this.state.apiData;
        let list = element.map( (element) => {
            return (
                <li><b>{element.description}</b>, {element.amount}, {element.date.substr(0,10)}</li>
            );
        });
        return list;
    }

    render() {
        return (
          <div className="container">
            <div className="search">
              <h3>REACT BANK</h3>
              <select onChange={this.handleSearchClick} id="choice">
                  <option value="SELECT">SELECT</option>
                  <option value="debits">DEBIT</option>
                  <option value="credits">CREDIT</option>
              </select>

            </div>
            { this.state.found
            ? <div>
                <p>Transactions:</p>
                <ul>{this.makeList()}</ul>
                </div> 
            : <h4>Make a selection!</h4>
            }
          </div>
        );
    }
}

export default Content;
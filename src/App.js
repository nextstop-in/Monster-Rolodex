import React from 'react';
//import {CardList} from './component/card-list/card-list.componet'
import './App.css';
import { SearchBox } from './component/search-box/search-box.component';

class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    monster: [

    ],
    searchField : ''   
  };

  }
 
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
  .then(users => this.setState({monster : users}))
}

handleChange = e => {this.setState({searchField : e.target.value})}



  render() {

    const {monster , searchField} = this.state;
    const filteredMonsters = monster.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    
  return (
    <div className="App">
    <h1> Monster Rolodex </h1>

    <SearchBox 
    change={this.handleChange} 
    monsters= {filteredMonsters}
    placeholder='search Monster'/>
                 
            
    </div>
  );
  }

}

export default App;

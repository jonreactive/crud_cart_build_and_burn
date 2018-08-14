import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import ItemPage from './ItemPage';
import { items } from './static-data';

class App extends Component { 
  
  constructor(props) {
    super(props) 
    
    this.state = {
      activeTab:0,
      cart:[]
    }
  }
  
  
  handleTabChange = (index) => {
    this.setState({
      activeTab: index
    });
  }
  
  handleAddToCart = (item) => {
  this.setState({
    cart: [
      ...this.state.cart,
      item.id
    ]
  });
}
  
    renderContent() { 
      
      switch(this.state.activeTab) {
        default:
        case 0: return <ItemPage items={items} />;
          return (
            <ItemPage 
              items={items} 
              onAddToCart={this.handleAddToCart}/>
          );
        case 1: 
          return <span>Cart</span>;
      } 
    }

    render() { 
      let {activeTab} = this.state;
    
      return (
        <div className="App"> 
          <Nav activeTab={activeTab} onTabChange={this.handleTabChange}/>
            <main className="App-content">
              <div>
                {this.state.cart.length} items
              </div> 
              {this.renderContent()}
            </main>
          <p>badaboom badaboom</p>
        </div>
      ); 
    }
  }  

export default App;

import React from 'react';
import BlueHeader from './components/BlueHeader';
import './App.css';
import Ads from './components/Ads';


class App extends React.Component {
  state = {
    ads: [
      {
          id: 1,
          title: 'Quality towels for everyday use',
          price: '$10',
          condition: 'new',
          city: 'London',
          features: 'Very soft, long and of high quality.',
          description: 'The best of the best towels that you would not find anywhere else! Even chepaer than at your local stores!!'
      },
      {
          id: 2,
          title: 'Cleaning homes - Professional team of cleaners',
          price: '$20 per hour',
          condition: 'top quality',
          city: 'Manchester',
          features: 'Quick work, expert staff, top quality results.',
          description: 'We are a team of 20 cleaning experts and offer top quality services at regular prices.'
      },
      {
          id: 3,
          title: 'World championship football ball - signed!',
          price: '$500',
          condition: 'used',
          city: 'Liverpool',
          features: 'Still in decent condition, signed by 5 players',
          description: 'The ball was signed by 5 of my favorite football players at the World championship a few years ago.'
      },
      {
          id: 4,
          title: 'Steel for sale',
          price: '$50 per unit',
          condition: 'good',
          city: 'Coventry',
          features: 'Top quality steel',
          description: 'We provide the transport of the steel at a fraction of the usual price.'
      },
      {
          id: 5,
          title: 'Apply Laptop - Second hand, need it sold fast',
          price: '$999',
          condition: 'used',
          city: 'London',
          features: 'It is a Macbook',
          description: 'I am selling my Apply laptop because I have to leave soon and I want to have cash for my trip.'
      }
    
    ]
  }



  render() {
    return (
      <div className="App">
        <BlueHeader/>
        <Ads ads={this.state.ads}/>
      </div>
    );
  }
}
export default App;

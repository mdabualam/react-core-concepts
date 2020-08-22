import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premium EI', price: '$249.99'}
  ]
   return (
    <div className="App">
      <header className="App-header">
       <h3>I am a React Person</h3>
       <Counter></Counter>
       <Users></Users>
       <ul>
         {
           products.map(product => <li>{product.name}</li>)
         }
       </ul>
       <Product product = {products[0]}></Product>
       <Product product = {products[1]}></Product>
       <Product product = {products[2]}></Product>
       <Product product = {products[3]}></Product>
       </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
     
 
return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
     
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  console.log(name, price)
  return (
    <div style={productStyle}>
      <h3> {props.product.name} </h3>
      <h5> {props.product.price} </h5>
      <button>Buy now</button>
    </div>
  )
}



export default App;

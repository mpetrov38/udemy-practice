import React from "react";
// Before v18 import 
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";
import './index.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header>
      <h1 className="header">Fast React Pizza Co.</h1>
    </header>)
}
function Menu() {
  return (
    pizzaData.map((pizza) => {
      return <main className="menu">
        <div className="pizza">
          <img src={pizza.photoName} alt="pizza" />
          <h2>{pizza.name}</h2>
          <p>{pizza.ingredients}</p>
          <p>{pizza.price}$</p>
          <p>{pizza.soldOut}</p>
        </div>
      </main>
    })

  )
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  console.log(hour);
  // if (hour > openHour && hour < closeHour) alert("We're currently open!")
  // else alert("Sorry we are closed")
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open!
    </footer>
  )
}
//React v18 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before v18
//React.render(<App />);
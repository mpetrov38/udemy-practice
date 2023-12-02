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
function Menu() {
  const numPizzas = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => {
              return (
                <li className="pizza">
                  <img src={pizza.photoName} alt="pizza" />
                  <h2>{pizza.name}</h2>
                  <p>{pizza.ingredients}</p>
                  <p>{pizza.price}$</p>
                  <p>{pizza.soldOut ? "Sold Out" : "Available"}</p>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function Header() {
  return (
    <header>
      <h1 className="header">Fast React Pizza Co.</h1>
    </header>)
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're closed.We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  )
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
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
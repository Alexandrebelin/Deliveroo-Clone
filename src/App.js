import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./containers/Home";

function App() {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const addCart = (itemId) => {
    const exist = cart.find((elem) => elem.id === itemId);
    if (exist) {
      const newCart = [...cart];
      const index = newCart.indexOf(exist);
      newCart[index] = {
        ...newCart[index],
        amount: newCart[index].amount + 1,
      };
      setCart(newCart);
      console.log(cart);
    } else {
      let item = null;
      data.categories.forEach((category) => {
        category.meals.forEach((menu) => {
          if (menu.id === itemId) {
            item = menu;
          }
        });
      });
      if (item === null) {
        console.error(`Cannot find item ${itemId}`);
        return;
      }
      const newCart = [...cart];
      newCart.push({
        id: itemId,
        title: item.title,
        price: item.price,
        amount: 1,
      });
      setCart(newCart);
      console.log(cart);
    }
  };

  const subCart = (itemId) => {
    const exist = cart.find((cartItem) => cartItem.id === itemId);
    if (!exist) {
      console.error(`Cannot remove item not in cart !`);
      return;
    }
    const index = cart.indexOf(exist);
    const newCart = [...cart];
    newCart[index] = {
      ...newCart[index],
      amount: newCart[index].amount - 1,
    };
    const cartNotZero = newCart.filter((cartItem) => cartItem.amount > 0);
    setCart(cartNotZero);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3200/");

      setData(response.data);
      setIsLoading(false);
      console.log(response.data);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home
            addCart={addCart}
            subCart={subCart}
            cart={cart}
            data={data}
            isLoading={isLoading}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import { useState, useEffect } from "react";
import axios from "axios";

import MainRestaurant from "../components/MainRestaurant";
import Content from "../components/Content";

const Home = ({ addCart, subCart, cart, data, isLoading }) => {
  return isLoading ? (
    <></>
  ) : (
    <div>
      <MainRestaurant data={data.restaurant} />
      <Content
        data={data.categories}
        addCart={addCart}
        subCart={subCart}
        cart={cart}
      />
    </div>
  );
};

export default Home;

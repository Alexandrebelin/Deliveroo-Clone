import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import MainRestaurant from "./components/MainRestaurant";
import Content from "./components/Content";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3200/");

      setData(response.data);
      setIsLoading(false);
      console.log(response.data);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>is on Loading ...</p>
  ) : (
    <div className="App">
      <Header />
      <MainRestaurant data={data.restaurant} />
      <Content data={data.categories} />
    </div>
  );
}

export default App;

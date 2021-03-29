const MainRestaurant = ({ data }) => {
  return (
    <div className="container">
      <div className="mainRestaurant">
        <div className="left">
          <h1>{data.name}</h1>

          <p>{data.description}</p>
        </div>
        <div className="right">
          <img src={data.picture} alt="picture main-restaurant" />
        </div>
      </div>
    </div>
  );
};

export default MainRestaurant;

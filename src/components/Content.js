import Menu from "./Menu";

const Content = ({ data }) => {
  return (
    <div className="backGround">
      {data.map((elem, index) => {
        return (
          elem.meals.length > 0 && (
            <div key={index} className="container">
              <h3>{elem.name}</h3>
              <div className="Menu">
                <Menu data={elem.meals} />
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Content;

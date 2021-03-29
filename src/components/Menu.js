const Menu = ({ data }) => {
  return (
    <div className="MenuItems--items">
      {data.map((elem, index) => {
        return (
          <div className="MenuItem">
            <div key={elem.id} className="MenuItem--card ">
              <div className="MenuItem--texts">
                <h3>{elem.title}</h3>

                {elem.description && elem.description.length > 0 && (
                  <p>{elem.description.slice(0, 50)} ...</p>
                )}

                <span>{elem.price} €</span>
              </div>
              <div className="MenuItem--picture">
                {elem.picture && <img src={elem.picture} alt={elem.title} />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;

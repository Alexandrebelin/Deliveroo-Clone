import MenuItem from "./MenuItem";

const MenuItems = ({ data, name, addCart }) => {
  return (
    <div>
      <h2>{name}</h2>
      <div className="MenuItems--items">
        {data.map((elem, index) => {
          return (
            <MenuItem
              key={elem.id}
              data={elem}
              onClick={() => {
                addCart(elem.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuItems;

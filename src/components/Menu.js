import MenuItems from "./MenuItems";

const Menu = ({ data, addCart }) => {
  return (
    <div className="Menu">
      {data.map((elem, index) => {
        return (
          elem.meals.length > 0 && (
            <MenuItems
              key={index}
              data={elem.meals}
              name={elem.name}
              addCart={addCart}
            />
          )
        );
      })}
    </div>
  );
};

export default Menu;

import Menu from "./Menu";
import Cart from "./Cart";

const Content = ({ data, addCart, subCart, cart }) => {
  return (
    <div className="backGround">
      <div className="Content--center ">
        <Menu data={data} addCart={addCart} />
        <Cart addCart={addCart} subCart={subCart} cart={cart} />
      </div>
    </div>
  );
};

export default Content;

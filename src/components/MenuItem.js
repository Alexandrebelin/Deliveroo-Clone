const MenuItem = ({ data, onClick }) => {
  return (
    <div className="MenuItem">
      <div
        key={data.id}
        className="MenuItem--card "
        onClick={onClick}
        data-testid="menu-item-card"
      >
        <div className="MenuItem--texts">
          <h3>{data.title}</h3>

          {data.description && data.description.length > 0 && (
            <p>{data.description.slice(0, 50)} ...</p>
          )}

          <span>{data.price} €</span>
        </div>
        <div className="MenuItem--picture">
          {data.picture && <img src={data.picture} alt={data.title} />}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

import './Service.css'

const Filter = ({ items = [] }) => {
  return (
    <ul className="works">
      {items.map((item) => (
        <li key={item.id} className="work-card">
          
          <h3 className="work-name">
            {item.name}
          </h3>

          <p className="work-price">
            {item.price}
          </p>

          <span className="work-duration">
            ⏱ {item.dur}
          </span>

        </li>
      ))}
    </ul>
  );
};

export default Filter;
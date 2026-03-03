import './Service.css'

const Filter = ({ items = [] }) => {
  return (
    <ul className="works">
      {items.map((item) => (
        <li key={item.id} className="work-card">
          <img src={item.img} alt="service-img" className="work-img" />

          <div className="work-info">
            <h3 className="work-name">{item.name}</h3>
            <p className="work-price">{item.price}</p>
            <span className="work-duration">⏱ {item.dur}</span>
          </div>


        </li>
      ))}
    </ul>
  );
};

export default Filter;
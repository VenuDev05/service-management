import './Workerlist.css'
const Workerslist = ({ items = [] }) => {
    return (
        <ul className="worker-list">
            {items.map((item) => (
                <li key={item.id}>
                    <h3 className='worker-title'>{item.title}</h3>
                    <p className='worker-role'>Category: {item.category}</p>
                    <p className='worker-price'>₹{item.price}</p>
                    <span className='worker-time'>{item.duration}</span>
                </li>
            ))}
        </ul>
    );
};

export default Workerslist;
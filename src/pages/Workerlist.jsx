import './Workerlist.css'

const Workerslist = ({ items = [] }) => {
    const handleBooking = (worker) => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const accuracy = position.coords.accuracy;

                console.log("Accuracy (meters):", accuracy);

                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
                    );

                    const data = await response.json();

                    alert(`Exact Location:\n${data.display_name}`);
                } catch (err) {
                    alert("Failed to fetch address.");
                }
            },
            (error) => {
                alert("Location permission denied or unavailable.");
            },
            {
                enableHighAccuracy: true,  // 🔥 IMPORTANT
                timeout: 10000,
                maximumAge: 0
            }
        );
    }

    return (
        <ul className="worker-list">
            {items.map((item) => (
                <li key={item.id}>
                    <h3 className='worker-title'>{item.title}</h3>
                    <p className='worker-role'>Category: {item.category}</p>
                    <p className='worker-price'>⭐{item.rate}</p>
                    <span className='worker-time'>{item.des}</span>

                    <button
                        className="book-btn"
                        onClick={() => handleBooking(item)}
                    >
                        Book
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Workerslist;
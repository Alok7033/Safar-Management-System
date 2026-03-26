
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Loc.css';



function Loc({ onCitySelect }) {

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [userCoords, setUserCoords] = useState(null);
  const navigate = useNavigate();

  const locations = [

    {
    name: 'Kolkata',
    image: 'https://www.tripsavvy.com/thmb/L5-3wclydFMgc54G3PdJ90dzmnY=/2118x1418/filters:no_upscale():max_bytes(150000):strip_icc()/149362369-56a3c2023df78cf7727f07ae.jpg',
    lat: 22.5726,
    lon: 88.3639
  },
  {
    name: 'Bengaluru',
    image: 'https://tse1.mm.bing.net/th/id/OIP.rtrfq-viTEh1WM_RgZdBFAHaE8?w=3000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3',
    lat: 12.9716,
    lon: 77.5946
  },
    {
    name: 'Delhi',
    image: 'https://tse1.mm.bing.net/th/id/OIP.qx6dd3pOMXQo1QBZT8PvaQHaFG?rs=1&pid=ImgDetMain&o=7&rm=3',
    lat: 28.6139,
    lon: 77.2090
  },
  {
    name: 'Dehradun',
    image: 'https://dehraduntourism.co.in/images/places-to-visit/header/ghanta-ghar-clock-tower-dehradun-tourism-entry-fee-timings-holidays-reviews-header.jpg',
    lat: 30.3165,
    lon: 78.0322
  },
  {
    name: 'Goa',
    image: 'https://lp-cms-production.imgix.net/2019-06/iStock_000026994380XLarge.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4',
    lat: 15.2993,
    lon: 74.1240
  },
  {
    name: 'Gurugram',
    image: 'https://www.constructionweekonline.in/cloud/2023/06/06/1-Global-City-Gurugram.jpeg',
    lat: 28.4595,
    lon: 77.0266
  },
  {
    name: 'Haridwar',
    image: 'https://www.bontravelindia.com/wp-content/uploads/2021/12/Haridwar-Tourism-scaled.jpg',
    lat: 29.9457,
    lon: 78.1642
  },
  {
    name: 'Hyderabad',
    image: 'https://images.herzindagi.info/image/2022/Oct/places-to-visit.jpg',
    lat: 17.3850,
    lon: 78.4867
  },
  {
    name: 'Jaipur',
    image: 'https://miro.medium.com/max/3200/1*idBbkSkH4nXVIhDbA5QBEw.jpeg',
    lat: 26.9124,
    lon: 75.7873
  },
  
  {
    name: 'Lucknow',
    image: 'https://images.ixigo.com/image/upload/t_thumb,f_auto/saadat-ali-khan-tomb-images-photos-5176713fe4b0f293655f48dd.jpg',
    lat: 26.8467,
    lon: 80.9462
  },
  {
    name: 'Noida',
    image: 'https://www.nobroker.in/blog/wp-content/uploads/2024/02/cleanest-city-of-india.jpg',
    lat: 28.5355,
    lon: 77.3910
  },
  {
    name: 'Patna',
    image: 'https://4.bp.blogspot.com/-lGE2b5_BZHo/WP-H4lr1jMI/AAAAAAAAxsU/SBucAGZNT7sPSZl0ac8pQRAHGb9dlzhqgCLcB/w1200-h630-p-k-no-nu/ISKCON%2Btemple%2Bpatna.1.JPG',
    lat: 25.5941,
    lon: 85.1376
  },
  {
    name: 'Rishikesh',
    image: 'https://th.bing.com/th/id/R.f2257da2442701aba39349eb1128cc2a?rik=H%2fq3tvjE5DCHDA&riu=http%3a%2f%2frishikesh.net%2fwp-content%2fuploads%2f2019%2f11%2fbigstock-Rishikesh-India-Circa-April-329638714.jpg&ehk=Uptj5ZNmgYbgnXdTnXB21UeyOAYxRd7N2uJYsT4MWHM%3d&risl=1&pid=ImgRaw&r=0',
    lat: 30.0869,
    lon: 78.2676
  },
  {
    name: 'Shimla',
    image: 'https://www.tourmyindia.com/images/shimla-hill-station6.jpg',
    lat: 31.1048,
    lon: 77.1734
  },
  {
    name: 'Vadodara',
    image: 'https://www.treebo.com/blog/wp-content/uploads/2020/12/Laxmi-Vilas-Palace-1.jpg',
    lat: 22.3072,
    lon: 73.1812
  },
  {
    name: 'Manali',
    image: 'https://tse2.mm.bing.net/th/id/OIP.2SPP9zjMyLj927Qmu1VFtwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    lat: 32.2396,
    lon: 77.1887
  },
   {
    name: 'Faridabad',
    image: 'https://static.tnnbt.in/thumb/msid-96477827,updatedat-1671877621307,width-1280,height-720,resizemode-75/96477827.jpg',
    lat: 28.4089,
    lon: 77.3178
  },
    {
    name: 'Ghaziabad',
    image: 'https://www.holidify.com/images/compressed/dest_wiki_16921.jpg',
    lat: 28.6692,
    lon: 77.4538
  },
];

// export default locations;


  // Detect user location
  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          setUserCoords(coords);

          // Find nearest location from your locations array
          const nearest = locations.reduce((prev, curr) => {
            const prevDistance = getDistance(coords.lat, coords.lon, prev.lat, prev.lon);
            const currDistance = getDistance(coords.lat, coords.lon, curr.lat, curr.lon);
            return currDistance < prevDistance ? curr : prev;
          });
          
          setSelectedLocation(nearest);
        },
        (error) => {
          console.error("Error detecting location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // Function to calculate distance between two coordinates
  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  return (
    <div className="app">
      <h1 className="h1" >Select City</h1>

      <button className="detect-location-btn" onClick={detectLocation}>📍 Detect My Location</button>

      <div className="location-grid">
        {locations.map((loc, index) => (
          <div
            key={index}
            className={`location-card ${selectedLocation?.name === loc.name ? 'selected' : ''}`}
              onClick={() => {
              setSelectedLocation(loc);
              // navigate('/', { state: { selectedCity: loc.name, cityImage: loc.image } });
              onCitySelect && onCitySelect(loc.name);



             }}
          >
            <img src={loc.image} alt={loc.name} />
            <h3>{loc.name}</h3>
          </div>
        ))}
      </div>

    


      {selectedLocation && (
        <div className="selected-location">
          <h2>Selected Location:</h2>
          <img src={selectedLocation.image} alt={selectedLocation.name} />
          <p>{selectedLocation.name}</p>
          {userCoords && (
            <p>Your Coords: {userCoords.lat.toFixed(4)}, {userCoords.lon.toFixed(4)}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Loc;

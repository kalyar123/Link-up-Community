import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Member_header from './Member_header';
import Member_footer from './Member_footer';

const MapContainer = (props) => {
  const mapStyles = {
    width: '100%',
    height: '100%'
  };

  const initialLocation = { lat: 33.6014, lng: 72.4233 };
  const [currentLocation, setCurrentLocation] = useState(null);
  const [nearestMosque, setNearestMosque] = useState(null);
  const [mosques, setMosques] = useState([]);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.log('Error occurred while retrieving geolocation:', error.message);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    const fetchMosques = async () => {
      try {
        const response = await fetch('http://localhost:9000/location/get'); // Update the endpoint URL
        if (!response.ok) {
          throw new Error('Failed to fetch mosque data');
        }
        const data = await response.json();

        // Map the fields from the backend schema to the required structure
        const mappedMosques = data.map((item) => ({
          name: item.mosquename,
          location: {
            lat: parseFloat(item.latitude),
            lng: parseFloat(item.longitude)
          }
        }));

        setMosques(mappedMosques);
      } catch (error) {
        console.log('Error occurred while fetching mosque data:', error.message);
      }
    };

    fetchMosques();
  }, []);

  useEffect(() => {
    if (currentLocation && mosques.length > 0) {
      let nearestDistance = Number.MAX_VALUE;
      let nearestMosque = null;

      for (const mosque of mosques) {
        const distance = calculateDistance(currentLocation, mosque.location);

        if (distance !== null && distance < nearestDistance) {
          nearestDistance = distance;
          nearestMosque = mosque;
        }
      }

      setNearestMosque(nearestMosque);
    }
  }, [currentLocation, mosques]);

  const calculateDistance = (location1, location2) => {
    if (!location1 || !location2) {
      return null;
    }

    const lat1 = location1.lat;
    const lon1 = location1.lng;
    const lat2 = location2.lat;
    const lon2 = location2.lng;

    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const handleMapReady = (mapProps, map) => {
    setMap(map);
  };

  useEffect(() => {
    if (map && mosques.length > 0) {
      for (const mosque of mosques) {
        new window.google.maps.Marker({
          position: mosque.location,
          map: map,
          title: mosque.name
        });
      }
    }
  }, [map, mosques]);

  return (
    <div>
      <Member_header />
      {currentLocation && (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <h3>Your Current Location:</h3>
          <p>Latitude: {currentLocation.lat.toFixed(6)}</p>
          <p>Longitude: {currentLocation.lng.toFixed(6)}</p>
        </div>
      )}

      {nearestMosque && (
        <div style={{ textAlign: "center" }}>
          <h3>Nearest Mosque:</h3>
          <p>Name: {nearestMosque.name}</p>
          {nearestMosque.location && (
            <div>
              <p>Latitude: {nearestMosque.location.lat.toFixed(6)}</p>
              <p>Longitude: {nearestMosque.location.lng.toFixed(6)}</p>
            </div>
          )}
        </div>
      )}

      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={currentLocation || initialLocation}
        onReady={handleMapReady}
      >
        {currentLocation && (
          <Marker position={currentLocation} label="You are here" />
        )}

        {/* No need to render markers here, as they are added dynamically in the useEffect() */}

        {/* <Member_footer/> */}
      </Map>

    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer);

import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper } from '@material-ui/core';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOutlined';

import './Map.css';
import mapStyles from './mapStyles';

const Map = ({ coordinates, setCoordinates, setBounds, setChildClicked, places, weatherData }) => {

    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne });
                }}
            >
                {places?.map((place, idx) => (
                    <div className='map__place' lat={Number(place.latitude)} lng={Number(place.longitude)} key={idx} onClick={() => setChildClicked(idx)} >
                        <Paper elevation={3} className='map__place__paper'>
                            <span>{place.name}</span>
                            <img 
                                src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                alt={place.name}
                            />
                        </Paper>
                    </div>
                ))}
                {weatherData?.list?.map((data, i) => (
                    <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                        <img height={100} src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt='Weather icon' />
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
};

export default Map;

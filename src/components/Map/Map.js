import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper } from '@material-ui/core';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOutlined';

import './Map.css';

const Map = ({ coordinates, setCoordinates, setBounds, places }) => {

    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAhNRH9-BAwVRwR-ZyaBw2KUPqiPgCBnrs'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    console.log(e);
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne });
                }}
                onChildClick={''}
            >
                {places?.map((place, idx) => (
                    <div className='map__place' lat={Number(place.latitude)} lng={Number(place.longitude)} key={idx}>
                        <Paper elevation={3} className='map__place__paper'>
                            <span>{place.name}</span>
                            <img 
                                src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                alt={place.name}
                            />
                        </Paper>
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
};

export default Map;

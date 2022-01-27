import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import './App.css';
import Header from '../components/Header/Header';
import List from '../components/List/List';
import Map from '../components/Map/Map';
import { getPlacesData, getWeatherData } from '../api/requests';

const App = () => {
    const [ places, setPlaces ] = useState([]);
    const [ filteredPlaces, setFilteredPlaces ] = useState([]);
    const [ coordinates, setCoordinates ] = useState({});
    const [ weatherData, setWeatherData ] = useState([]);
    const [ bounds, setBounds ] = useState({});
    const [ childClicked, setChildClicked ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ listOption, setListOption ] = useState('restaurants');
    const [ rating, setRating ] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((location) => {
            setCoordinates({ lat: location.coords.latitude, lng: location.coords.longitude });
        });
    }, []);

    useEffect(() => {
        const filteredList = places.filter(place => place.rating > rating);
        
        setFilteredPlaces(filteredList);
        setChildClicked(null);
    }, [rating])

    useEffect(() => {
        setIsLoading(true);
        if(bounds.sw && bounds.ne){

            getWeatherData(coordinates.lat, coordinates.lng)
            .then(data => {
                setWeatherData(data);
            });

            getPlacesData(listOption, bounds.ne, bounds.sw)
            .then(data => {
                setPlaces(data?.filter(place => place.name && place.num_reviews > 0));
            });

            setFilteredPlaces([]);
            setChildClicked(null);
        }
        setIsLoading(false);
    }, [bounds, listOption]);


    return (
        <>
            <CssBaseline />
            <Header setCoordinates={setCoordinates} />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List 
                        places={filteredPlaces.length ? filteredPlaces : places} 
                        childClicked={childClicked} 
                        listOption={listOption}
                        setListOption={setListOption}
                        rating={rating}
                        setRating={setRating}
                        isLoading={isLoading}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        coordinates={coordinates} 
                        setCoordinates={setCoordinates} 
                        setBounds={setBounds} 
                        setChildClicked={setChildClicked}
                        places={filteredPlaces.length ? filteredPlaces : places} 
                        weatherData={weatherData}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default App;

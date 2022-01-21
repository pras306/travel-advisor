import React, { useState } from 'react';
import { FormControl, Select, MenuItem, Grid } from '@material-ui/core';

import './List.css';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ places }) => {
    const [ listOption, setListOption ] = useState('restaurants');
    const [ rating, setRating ] = useState('');

    return (
        <div className='list'>
            <span>Restraurants, Hotels & Attractions around you</span>
            <FormControl className='list__form'>
                <label>Type:</label>
                <Select value={listOption} onChange={(e) => setListOption(e.target.value)}>
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value='hotels'>Hotels</MenuItem>
                    <MenuItem value='attractions'>Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className='list__form'>
                <label>Rating:</label>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3}>
                {places?.map((place, idx) => {
                    return (
                        <Grid item xs={12} key={idx}>
                            <PlaceDetails place={place} />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
};

export default List;

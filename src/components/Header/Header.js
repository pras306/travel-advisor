import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import './Header.css';

const Header = ({ setCoordinates }) => {
    const [ autoComplete, setAutoComplete ] = useState(null);

    const onLoad = (autoC) => setAutoComplete(autoC);

    const onPlaceChanged = () => {
        const lat = autoComplete.getPlace().geometry.location.lat();
        const lng = autoComplete.getPlace().geometry.location.lng();

        console.log({ lat, lng });

        setCoordinates({ lat, lng });
    }

    return (
        <div className='header'>
            <div className='header__toolbar'>
                <span>
                    Travel Advisor
                </span>
            </div>
            <div className='header__box'>
                <span>
                    Explore new places
                </span>
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <div className='header__box__search'>
                        <div className='header__box__search__icon'>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder='Search...' className='header__box__search__input'></InputBase>
                    </div>
                </Autocomplete>
            </div>
        </div>
    );
};

export default Header;

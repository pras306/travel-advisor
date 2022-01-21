import React from 'react';
// import { Autocomplete } from '@react-google-maps/api';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import './Header.css';

const Header = () => {
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
                {/* <Autocomplete> */}
                    <div className='header__box__search'>
                        <div className='header__box__search__icon'>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder='Search...' className='header__box__search__input'></InputBase>
                    </div>
                {/* </Autocomplete> */}
            </div>
        </div>
        // <AppBar position='static'>
        //     <Toolbar className='toolbar'>
        //         <Typography variant='h5' className='title'>
        //             Travel Advisor
        //         </Typography>
        //         <div className='box'>
        //             <Typography variant='h6' className='title'>
        //                 Explore new places
        //             </Typography>
        //             {/* <Autocomplete> */}
        //                 <div className='search'>
        //                     <div className='search__icon'>
        //                         <SearchIcon />
        //                     </div>
        //                     <InputBase placeholder='Search...' className='search__input'></InputBase>
        //                 </div>
        //             {/* </Autocomplete> */}
        //         </div>
        //     </Toolbar>
        // </AppBar>
    );
};

export default Header;

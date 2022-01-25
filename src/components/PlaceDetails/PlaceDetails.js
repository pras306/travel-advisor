import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Chip, Button } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import './PlaceDetails.css';

const PlaceDetails = ({ place, refProp, isSelected }) => {

    if(isSelected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    const renderPlaceCard = () => {
        if(place.name){
            return(
                <>
                    <Card elevation={6}>
                        <CardMedia 
                            style={{ height: 350 }} 
                            image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                            title={place.name}
                        />
                        <CardContent>
                            <h2>{place.name}</h2>
                            <div className='place-details__content'>
                                <Rating size='small' value={Number(place.rating)} readOnly />
                                <span>out of {place.num_reviews} reviews</span>
                            </div>
                            <div className='place-details__content'>
                                <span>Price</span>
                                <span>{place.price_level}</span>
                            </div>
                            <div className='place-details__content'>
                                <span>Ranking</span>
                                <span>{place.ranking}</span>
                            </div>
                            {place?.awards?.map((award) => (
                                <div className='place-details__content' key={award.display_name}>
                                    <img src={award.images.small} alt={award.display_name} />
                                    <span>{award.display_name}</span>
                                </div>
                            ))}
                            {place?.cuisine?.map(item => (
                                <Chip key={item.key} size='small' label={item.name} className='place-details__chips' />
                            ))}
                            {place?.address && (
                                <div className='place-details__address'>
                                    <LocationOnIcon /> {place.address}
                                </div>
                            )}
                            {place?.phone && (
                                <div className='place-details__address'>
                                    <PhoneIcon /> {place.phone}
                                </div>
                            )}
                            <CardActions>
                                <Button size='small' color='primary' onClick={() => window.open(place.web_url, '_blank')}>Trip Advisor</Button>
                                <Button size='small' color='primary' onClick={() => window.open(place.website, '_blank')}>Website</Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </>
            )
        }
    }

    return (
        <div className='place-details' ref={refProp}>
            {renderPlaceCard()}
        </div>
    );
};

export default PlaceDetails;

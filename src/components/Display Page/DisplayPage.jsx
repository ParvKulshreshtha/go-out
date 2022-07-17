import { useDispatch, useSelector } from 'react-redux/es/exports'
import React, { useEffect } from 'react'
import { ServiceSelection } from '../ServiceSelection'
import { useParams } from 'react-router-dom';
import { ServiceList } from './ServiceList';
import { getPlaceData } from '../../data';
import { coordinates, serviceDataChange } from '../../actions';
import { Map } from './Map';

export const DisplayPage = () => {
    // service = /:url
    const { service } = useParams()
    // useSelector()
    const optionSelection = useSelector((state) => (state.options))
    // useDispatch()
    const dispatch=useDispatch()

    var optionValueArray = optionSelection.map((value) =>  { return value.value; });

    useEffect(() => {
        //setting coordinates as user's current location
        navigator.geolocation.getCurrentPosition(({ coords:{latitude, longitude}}) => {
          dispatch(coordinates({lat:latitude, lng:longitude}))
        })
      }, [dispatch])

      const coordinate = useSelector((state) => (state.coordinates))
      
    useEffect(() => {
        // fetching api using axios
        getPlaceData({lat:coordinate.lat+0.05,lng:coordinate.lng+0.05},            
        {lat:coordinate.lat-0.05,lng:coordinate.lng-0.05},service)
        .then(data=>
            dispatch(serviceDataChange(data)))
    },[coordinate, dispatch, service])

    const service_data = useSelector((state) => (state.serviceData))
    const errorData = {
        name:"Loading..."
    }

  return (
    <>
        <div style={{
            backgroundImage:
            "url(https://cdn2.hubspot.net/hubfs/439788/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg)",
        }}>
            <div style={{
            margin:`10px`
        }}>
            <h1 style={{
                color:`white`
            }}>GoOut</h1>
        </div>
            <div style={{
                position:`sticky`,
                top:`0`
            }} >
                <ServiceSelection  default={service} />
            </div>
            
        </div>
        {optionValueArray.includes(service)? 
        <h1 style={{
            margin:`10px`,
            fontSize:`40px`
        }}>
            Best {service} Near You :
        </h1>
         : 
         <h2>
            {service} is an invalid service
         </h2> }
         <div style={{
            display:`flex`,
         }}>
            <div style={{
                width:`30%`
            }}>
                {service_data ? service_data?.map((service,i) => 
                <ServiceList 
                    key={i}
                    data={service} />):
                    <ServiceList data = {errorData}/>}
            </div>
            <div style={{
                margin:`10px`,
                marginLeft:0,
                width:`100%`,
                height:`100%`,
                position:`sticky`,
                top:`10px`
            }}>
                <Map
                    coordinates={coordinate}  />
            </div>
        
         </div>
         
    </>
    
  )
}

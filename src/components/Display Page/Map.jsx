import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { GoogleMap,InfoBox,InfoWindow,Marker,useJsApiLoader} from '@react-google-maps/api'

export const Map = (props) => {
  const location = useSelector(state => state.serviceLocation)
  const locations = {lat: Number(location.lat),lng: Number(location.lng)}
 
 
  console.log("location", locations);
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API
  })

  if(!isLoaded){
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
    <div >
        <GoogleMap 
          center={props.coordinates}
          zoom={15} 
          mapContainerStyle={{width:'100%', height:'100vh', margin:'0px' }}
          onChange={e=>{ console.log(e)
          }}>
            
            <Marker
              position={locations} />
        </GoogleMap>
    </div>
    
  )
}

import React from 'react'
import { GoogleMap,useJsApiLoader} from '@react-google-maps/api'

export const Map = (props) => {
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

  console.log(props.coordinates,"dchgj");
  return (
    <div >
        <GoogleMap 
          center={props.coordinates}
          zoom={15} 
          mapContainerStyle={{width:'100%', height:'100vh', margin:'0px' }}
          onChange={e=>{
            props.setCoordinates({lat:e.center.lat, lng:e.center.lng})
          }}>
        </GoogleMap>
    </div>
    
  )
}

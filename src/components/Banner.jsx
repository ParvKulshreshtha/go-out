import React from 'react'
import { ServiceSelection } from './ServiceSelection'

export const Banner = () => {
  return (
    <div style={{  
        // eslint-disable-next-line no-useless-concat
        backgroundImage:`url(https://cdn2.hubspot.net/hubfs/439788/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg)`,
        height:`100vh`,
        width:`100vw`,
        backgroundRepeat: 'no-repeat',
        display:`flex`,
        flexDirection:'column'
      }}>
      <div style={{
        // margin:`10px`
      }}>
        GoOut
      </div>
      <div style={{
        margin:`auto`
      }}>
        <ServiceSelection />
      </div>
    </div>
  )
}


// style={{
//  " + "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" + "
//         backgroundImage: `url(${require("https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768")}), backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh'`,
//     }}
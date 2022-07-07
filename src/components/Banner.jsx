import React from 'react'

export const Banner = () => {
  return (
    <div style={{
        backgroundImage: `url(${require("https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768")}), backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh'`,
        display:`flex`,
        justifyContent:`center`,
        alignItems:`center`,
    }}>Banner</div>
  )
}
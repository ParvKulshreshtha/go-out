import React from 'react'

export const ServiceSelection = () => {
  return (
    <div style={{
        padding:`1px`,
        backgroundColor:`white`,
        borderRadius:`15px`,
        display:'flex',
        alignItems:`center`
    }}>
        <div style={{
        height:`70px`,
        backgroundColor:`white`,
        padding:`10px`,
        display:`flex`,
        alignItems:`center`,
        border:`solid #f4567f`, 
        borderRadius:`15px`
    }}>
            Find
            <select style={{
                borderBottom:`solid grey`,
                boxSizing:`border-box`,
                border: `0 1px solid #aaaaaa`,
                borderRadius: `0.3em`,
                boxShadow: `inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4)`,
                overflow: `hidden`
            }} id="cars" name="cars">
                <option value="volvo">Hotels</option>
                <option value="saab">Restaurants</option>
                <option value="fiat">Attractions</option>
            </select>
            Near You
        </div>
    </div>
    
  )
}

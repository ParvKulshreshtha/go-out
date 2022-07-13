import { useSelector } from 'react-redux/es/exports'
import React from 'react'
import { ServiceSelection } from '../ServiceSelection'
import { useParams } from 'react-router-dom';

export const DisplayPage = () => {
    const { service } = useParams()
    const optionSelection = useSelector((state) => (state.options))
    // const serviceSelect = useSelector((state) => (state.serviceChange))
    console.log(optionSelection.text,"cfc");
    var optionValueArray = optionSelection.map((value) =>  { return value.value; });
  return (
    <>
        <div style={{
            backgroundImage:
            "url(https://cdn2.hubspot.net/hubfs/439788/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg)",
        }}>
            <div style={{
            margin:`10px`
        }}>
            GoOut
        </div>
            <ServiceSelection default={service} />
        </div>
        {optionValueArray.includes(service)? 
        <div>
            Best {service} Near You
        </div>
         : 
         <div>
            Service {service} not available
         </div> }
    </>
    
  )
}

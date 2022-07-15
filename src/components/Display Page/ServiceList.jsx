
import { getPlaceData } from '../../data';

export const ServiceList = (props) => {
  return (
    <>
        {props.data.name ?
            <div style={{
        boxShadow: `0 4px 8px 0 rgba(0,0,0,0.2)`,
        margin:`10px`,
        display:`block`,
        transition: `0.3s`,
        borderRadius: `5px`
    }}>
        {
            props.data.photo ? 
            <img style={{
                width:`100%`,
            }} src={props.data.photo.images.small.url} alt={props.data.name} />   :
            null
        }
        <div style={{
            padding: `2px 16px`
        }}>
            <h4><b> {props.data.name} </b></h4>
        </div>
    </div>:
    null}
    </>
    
  )
}

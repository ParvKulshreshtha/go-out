import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useParams } from 'react-router';
import { serviceClickLocation, serviceDataChange } from '../../actions';
import { getPlaceData } from '../../data';

export const ServiceList = (props) => {
    const { service } = useParams()
    const dispatch = useDispatch()
    const serviceClickHandler = () => {
        dispatch(serviceClickLocation({lat:props.data.latitude,lng:props.data.longitude}))
        getPlaceData({lat:coordinate.lat+0.05,lng:coordinate.lng+0.05},            
            {lat:coordinate.lat-0.05,lng:coordinate.lng-0.05},service)
            .then(data=>
                dispatch(serviceDataChange(data)))
    }
    const coordinate = useSelector((state) => (state.coordinates))
  return (
    <div>
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
                {
                    props.data.latitude && <button style={{
                        borderRadius:`10px`,
                        margin:`10px`,
                        padding:`3px`
                    }} onClick={serviceClickHandler}>
                    Mark Location on Map
                </button>
                }
                
            </div>:  null}
    </div>
    
  )
}

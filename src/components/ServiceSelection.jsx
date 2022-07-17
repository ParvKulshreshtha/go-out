import { useDispatch, useSelector } from 'react-redux/es/exports'
import { service } from '../actions'
import { optionSelect } from '../actions';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const option = [
    {value:"hotels", text:"Hotels"},
    {value:"restaurants", text:"Restaurants"},
    {value:"attractions", text:"Attractions"},
]

export const ServiceSelection = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(optionSelect(option))
    },[dispatch])
    const optionSelection = useSelector((state) => (state.options))
    // const serviceSelect = useSelector((state) => state.serviceChange)
    const serviceChangeHandler = (e) => {
        dispatch(service(e.target.value));
        navigate(`../${e.target.value}`, { replace: true });
    }
  return (
    <div style={{
        padding:`1px`,
        display:`inline`,
     }}>
        <div style={{
        height:`70px`,
        backgroundColor:`rgba(255, 255, 255, 0.7)`,
        padding:`10px`,
        display:`flex`,
        justifyContent:`center`,
        alignItems:`center`,
        border:`solid #f4567f`, 
        borderRadius:`15px`
    }}>
        <div style={{
        }}>
            Find
            <select style={{
                borderBottom:`solid grey`,
                boxSizing:`border-box`,
                border: `0 1px solid #aaaaaa`,
                borderRadius: `0.3em`,
                boxShadow: `inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4)`,
                overflow: `hidden`
            }} onChange={serviceChangeHandler} value={props.default} id="service" name="service">
                {optionSelection.map((option,i) => (
                    <option key={i} value={option.value}>{option.text}</option>
                ))}
            </select>
            Near You
        </div>
            
        </div>
    </div>
    
  )
}

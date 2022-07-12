import { useSelector, useDispatch } from 'react-redux/es/exports'
import { service } from '../actions'
// import { useNavigate } from 'react-router-dom';


export const ServiceSelection = () => {
    // const nav = useNavigate()
    const dispatch = useDispatch()
    const serviceSelect = useSelector((state) => state.serviceChange)
    const serviceChangeHandler = (e) => {
        dispatch(service(e.target.value));
        // nav.push('/hotel')
    }
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
            }} onChange={serviceChangeHandler} value={serviceSelect} id="service" name="service">
                <option value="hotels">Hotels</option>
                <option value="restaurants">Restaurants</option>
                <option value="attractions">Attractions</option>
            </select>
            Near You
        </div>
    </div>
    
  )
}

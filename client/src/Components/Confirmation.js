import confirm from '../assets/41.png'
import '../Css/Confirmation.css'
import { Back } from './Back'
import { Continue } from './Continue'

export const Confirmation=()=>{
    return(
        <div>
            <img src={confirm} alt="image" className="picture"/>
            <h3 className='wait'>Just a second! We're putting together your personalised curriculum....</h3>
            <Back/>
            
        </div>
    )
}
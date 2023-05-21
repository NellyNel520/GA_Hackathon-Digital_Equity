import '../Css/HowTech.css'
import { Back } from './Back'
import { Continue } from './Continue'

export const HowTech= () =>{
    return(
        <div className='howtech'>
            <h1 className="pagehead">How tech savy are you?</h1>
            <div className="ages">
            <h3 className="age">Ages 7-12</h3>
            <h3 className="age13">Ages13+</h3>
            </div>
            <div className='optionbuttons'>
            <button className="options">BEGINNER</button>
            <button className="options">INTERMEDIATE</button>
            <button className="options">ADVANCED</button>
            <Back/>
            <Continue/>
            </div>
        </div>

    )
}
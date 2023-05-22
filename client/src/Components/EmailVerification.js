import '../Css/EmailVerification.css'
import { Back } from './Back'
import { Continue } from './Continue'

export const EmailVerification = ({ onContinue }) => {
    return (
        <div className="email">
            <h1 className="emailver">Email Verification</h1>
            <h3 className="code"> We have sent you a verification code example@gmail.com. Please check your inbox and enter the verification code bellow to continue.</h3>
            <form>
                <label className="concode">Confirmation code</label>
                <input id='code' />
            </form>
            <h4 className="newcode">Alternatively, if you not recieved a code, we can resend a new one. Click Here</h4>
            <button className="signInBtn bg-[#3D5A80] mb-2"
                onClick={onContinue}
            >
                Continue</button>
        </div>
    )
}
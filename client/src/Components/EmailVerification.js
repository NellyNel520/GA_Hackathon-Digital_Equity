import '../Css/EmailVerification.css'

export const EmailVerification=()=>{
    return(
        <div className="email">
            <h1 className="emailver">Email Verification</h1>
            <h3 className="code"> We have sent you a verification code example@gmail.com. Please check your inbox and enter the verification code bellow to continue.</h3>
            <form>
                <label className="concode">Confirmation code</label>
                <input id='code'/>
            </form>
            <h4 className="newcode">Alternatively, if you not recieved a code, we can resend a new one. Click Here</h4>
        </div>
    )
}
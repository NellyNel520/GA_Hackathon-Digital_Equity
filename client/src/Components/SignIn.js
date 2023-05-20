


export const SignIn=()=>{
    return(
        <div className="border-2 border-cyan-800 border-radius:0.25rem">
            <h1>Company</h1>
            <h2>Welcome</h2>
            <h3>Sign in to Company</h3>
        <form>
            <input
              id='username'
              type='text'
              name="username"
              placeholder="Username"
              required
            />
            <input
              id='password'
              type='password'
              name="password"
              placeholder="Password"
              required
            />
            
            </form>
            <button>Log In</button>
            <h1>Forgot Password?</h1>
            <h1>Don't have an account? Sign up.</h1>
        </div>
    )
}
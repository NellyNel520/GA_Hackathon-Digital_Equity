export const SignUp = () => {
    return (
      <div>
        <h1>Sign Up</h1>
        <form >
        <input
            id='firstname'
            type='text'
            name='fistname'
            placeholder="Enter First Name"
          />
        <input
            id='lastname'
            type='text'
            name="lastname"
            placeholder="Enter Last Name"
            required
          />
          <input
            id='username'
            type='text'
            name="username"
            placeholder="Enter Username"
            required
          />
          <input
            id='email'
            type='text'
            name="email"
            placeholder="Input Your Email"
            required
          />
         <input
            id='password'
            type='password'
            name="password"
            placeholder="Password"
            required
          />
       
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
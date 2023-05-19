export const SignUp = () => {
    return (
      <div>
        <h1>Sign Up</h1>
        <form >
            <label>First Name:</label>
        <input
            id='firstname'
            type='text'
            name='fistname'
            placeholder="Enter First Name"
          />
          <label>Last Name:</label>
        <input
            id='lastname'
            type='text'
            name="lastname"
            placeholder="Enter Last Name"
            required
          />
          <label>Email:</label>
           <input
            id='email'
            type='text'
            name="email"
            placeholder="Input Your Email"
            required
          />
          <label>Username:</label>
          <input
            id='username'
            type='text'
            name="username"
            placeholder="Enter Username"
            required
          />
         <label>Password</label>
         <input
            id='password'
            type='password'
            name="password"
            placeholder="Password"
            required
          />
       
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
  }
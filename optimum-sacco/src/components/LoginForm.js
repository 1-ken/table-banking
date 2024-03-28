import React from 'react'

const LoginForm = () => {
  return (
    <div>
      {/*Creating a simple login form*/}
      <LoginFormForm />
    </div>
  )
}

export default LoginForm

function LoginFormForm() {
    return (
        <div >
            {/*Creating a simple login form*/}
            <h1 className='text-center m-10'>Login Form</h1>
            <form className='text-center'>
                <div className='text-left w-1/2 m-auto'>
                <label className='mr-5 text-black text-lg'>Username</label>
                <input type="text" className="border rounded p-0.5 text-lg" placeholder="Username" /><br></br>
                <label className='mr-5 text-black text-lg'>Password</label>
                <input type="password" placeholder="Password" /><br></br>
                <button type="submit" className="text-center bg-blue-200 p-0.5 rounded">Login</button>
                </div>
            </form>
        </div>
    )
}

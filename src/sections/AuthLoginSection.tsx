import React, { useEffect, useState } from 'react'

const LoginSection: React.FC = () => {

  const handleLogin = async (e: any) => {
    e.preventDefault()

    const user = {
      name: e.target[0].value,
      password: e.target[1].value
    }

    const result = await fetch('http://localhost:5000/api/mongousers/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    const data = await result.json()
    console.log(data.accessToken)
    localStorage.setItem('accessToken', data.accessToken)

    if (result.status === 200) {
      // Set tokenstatus if response OK!
      setTokenStatus(true);
    }

  }

  const [tokenStatus, setTokenStatus] = useState(Boolean)

  // Checks if token was created
  useEffect(() => {
    if (localStorage.getItem('accessToken') !== null) {
      setTokenStatus(true)
    }
    else {
      setTokenStatus(false)
    }
  }, [])


  // Delete token
  const deleteToken = () => {
    localStorage.removeItem('accessToken')
    if (localStorage.getItem('accessToken') !== null) {
      setTokenStatus(true)
    }
    else {
      setTokenStatus(false)
    }
  }



  return (
    <>
      <div className="login p-3 m-3 border rounded">
        <form onSubmit={handleLogin} className="form-group">
          <h3>Login</h3>
          <input autoComplete="username" type="text" className='form-control mb-1' placeholder='Enter username' />
          <input autoComplete="current-password" type="password" className='form-control mb-1' placeholder='Enter password' />
          <button type='submit' className='button bg-red'>Login</button>
        </form>
      </div>
      <div>
        <div className="token p-3 m-3 border rounded">
          <div className="status text-center">AccessToken:
            <div className={`current-status ${tokenStatus ? 'ACTIVE' : 'MISSING'}`}>
              {tokenStatus ? 'ACTIVE' : 'MISSING'}
            </div>
          </div>
        </div>
        <div className="token p-3 m-3 border rounded">
          <div className="status text-center">Delete token:
            <button onClick={deleteToken} className='button bg-red'>Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginSection
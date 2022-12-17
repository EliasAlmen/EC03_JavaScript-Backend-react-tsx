import React from 'react'

const RegisterSection: React.FC = () => {

    const handleRegister = async (e: any) => {
        e.preventDefault()

        const user = {
            name: e.target[0].value,
            password: e.target[1].value
        }
        
        const result = await fetch('http://localhost:5000/api/mongousers/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const data = await result.json()
        console.log(data);
        
    }
    
    
    
    return (
        <>
            <div className="register p-3 m-3 border rounded">
                <form onSubmit={handleRegister} className="form-group">
                    <h3>Register user</h3>
                    <input type="text" className='form-control mb-1' placeholder='Choose username' />
                    <input type="password" className='form-control mb-1' placeholder='Choose password' />
                    <button type='submit' className='button bg-red'>Register</button>
                </form>
            </div>
        </>
    )
}

export default RegisterSection
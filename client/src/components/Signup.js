import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { postUsers } from '../tools/api'

export default function Signup() {
    const [ user, setForm ] = useState( {} )
    const userInput = e => 
        setForm( pF => ( { ...pF, [e.target.name]: e.target.value } ) )

    const [ errors, setErrors ] = useState( {} )
    
    const attemptSignup = () => {
        const body = JSON.stringify( { user } )
        postUsers( body ).then( console.log )
    }
    const navigate = useNavigate()
    const goBack = () => navigate( "/" )
    
    return (
        <div className="cool">
            <h1>join the cathouse</h1>
     
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column', 
                    textAlign: 'right' }}>
                    <label htmlFor="username" style={{ margin: '3px'}}>
                        username:
                    </label>
                    <label htmlFor="password" style={{ margin: '3px'}}>
                        password:
                    </label>
                    <label htmlFor="password-confirmation" 
                        style={{ margin: '3px'}}>
                        password confirmation:
                    </label>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <input onChange={userInput} id="username" name="username" 
                        style={{ margin: '8px'}} />
                    <input onChange={userInput} id="password" type="password" 
                        name="password" style={{ margin: '8px'}} />
                    <input onChange={userInput} id="password-confirmation" 
                        type="password" name="password_confirmation"
                        style={{ margin: '8px'}} />
                </div>
            </div>
            <button onClick={attemptSignup} style={{ margin: '5px' }}>
                SIGN UP
            </button>
            <p>
                <button onClick={goBack}>back</button>
            </p>
            
        </div>
    )
}
import React, {useState} from 'react';


export const LoginPage = () => {
    const [user, setUser] = useState({username:'', password:''});
   
    const handleChange = (e) => {
       
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })    
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }

    return (
        <>
            <h3>Enter email and password</h3>
            <form>
                <label htmlFor='username'>
                    USERNAME:
                    <input 
                        type="username" 
                        name="username"
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='password'>
                    PASSWORD:
                    <input 
                        type="password" 
                        name="password" 
                        onChange={handleChange}
                    />
                </label>
                <button 
                    type="submit" 
                    onClick={handleSubmit}
                >
                    LogIn
                </button>
            </form>
        </>
    );
}
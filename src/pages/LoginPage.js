import React from 'react'
import Logo from '../components/Logo';
// dispatch
import { useDispatch } from "react-redux";
// actions
import { LOGIN_FAIL, LOGIN_SUCCESS } from "../store/actions";
import {
    BrowserRouter as Router,
    useNavigate,
  } from "react-router-dom";




function LoginPage() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const dispatch = useDispatch();

    //navigate
    const navigate = useNavigate();
   

    const handleInput = (e) => {
       
        const { name, value } = e.target;
        
        if (name === 'name') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
        
    }

    const login = (e) => {
        e.preventDefault();
        console.log('login');
        if (email === 'admin' && password === 'admin') {
            localStorage.setItem('login', true);
            // use dispatch
            dispatch({
                type: LOGIN_SUCCESS,
                user: "Guillermo Guzman Vargas"
              });
            // navigate to home
            navigate('/');
           
        }else{
            dispatch({
                type: LOGIN_FAIL,
              });
        }
    }


  return (
    
<div className="wrapper fadeInDown">
  <div id="formContent">
    
    <div className="fadeIn first">
      <Logo />
    </div>

    
    <form onSubmit={login}>
      <input type="text" id="name" className="fadeIn second" name="name" placeholder="Usuario" onChange={handleInput} />
      <input type="text" id="password" className="fadeIn third" name="password" placeholder="Contraseña" onChange={handleInput} />
      <input type="submit" className="fadeIn fourth" value="Entrar" />
    </form>

    
    

  </div>
</div>
  )
}

export default LoginPage
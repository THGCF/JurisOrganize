import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom'

class Login extends Component {
    state = {
        email: "",
        password: '',
    }

    handleOnChange = (evento) => {
        this.setState(
            {...this.state, [evento.target.type] : evento.target.value}
        )
    };
    

    handleSubmitLogin = () => {
       

        let loginApp = this.apiSimulator(this.state.email, this.state.password).then(resulte => {
           loginApp = resulte;
           if (loginApp == true) <Link to = '/home'/>
           else alert ('Dados errados')
       })
        console.log(this.apiSimulator)
    }

    apiSimulator = (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout (() => {
                if (email == 'teste@teste.com' && password == '123') resolve(true)
                resolve(false)
            }, 200)
        })
    }


    render() { 
        return (
            <div className='login_page'>
                <div className='login_logo_container'>
                    <h1 className='login_tittle'>
                        Login
                    </h1>
                    <div className='login_input'>
                        <label>Usuário:</label>
                        <input type='email' placeholder='Usuário' onChange = {this.handleOnChange} />
                        
                        <label>Senha:</label>
                        <input type='password' placeholder='Senha' onChange = {this.handleOnChange}/>
                    </div>
                    <button className='login_button' onClick={this.handleSubmitLogin}>Entrar</button>
                </div>
            </div> 
        );
    }
}
 
export default Login;
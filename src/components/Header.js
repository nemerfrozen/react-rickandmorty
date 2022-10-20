import {useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import store from '../store/index';

function Header() {

    const [user, setUser] = useState('');

    useEffect(() => {
       
        store.subscribe(() => {
            
            setUser(store.getState().auth.user);
        });
    }, []);



    return (
        <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Rick y Morty</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/">{user}</a></li>
                    </ul>
                </div>
            </div>
        </Nav>
    )
}

export default Header
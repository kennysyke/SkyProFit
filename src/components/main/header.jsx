import React from 'react';
import logo from "../../images/icons/logo.svg"
import { Link } from 'react-router-dom';


export function Header () {

    return (
        <div>
            <img
            src={logo}
            alt="logo"
            />
            <Link
              to="/login"
            >
              Войти
            </Link>
        </div>
    )
}
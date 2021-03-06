import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return ( <
        div className = 'header' >
        <
        IconButton >
        <
        PersonIcon fontSize = "large"
        className = "header__icon" / >
        <
        /IconButton> <
        img className = "header__logo"
        src = "https://cdn.designrush.com/uploads/inspirations/2354/crop_683_410__1513706350_604_tin.png"
        alt = "Logo" /
        >
        <
        IconButton >
        <
        ForumIcon fontSize = "large"
        className = "header__icon" / >
        <
        /IconButton> < /
        div >
    )
}

export default Header
import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img
               className="header__logo"
               src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
               alt="Logo"
            />
            <IconButton>
               <ForumIcon  />
            </IconButton>
        </div>
    )
}

export default Header

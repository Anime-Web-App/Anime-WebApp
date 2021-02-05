import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './Static/Nav.css'
  
function Nav() {

    const [show, handleShow] = useState(false);
    const [expand, setExpand] = useState(false);

    const profile = () => setExpand(true);
    const Shrink = () => setExpand(false);
    const useStyles = makeStyles((theme) => ({
        search: {
          position: 'relative',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: fade(theme.palette.common.white, 0.85),
          '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 1),
          }, 
          
          marginLeft: 0,
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
          },
        },
        searchIcon: {
          padding: theme.spacing(0, 2),
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        inputRoot: {
          color: 'inherit',
        },
        inputInput: {
          // padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
          transition: theme.transitions.create('width'),
          height: '2.5vh',
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
      const classes = useStyles();
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            
            <div className='navigation' >
            <img
                className="nav_logo"
                src="https://lh3.googleusercontent.com/proxy/L1uNLKSv95VndzXcOE69J7ZWnSnflTWskSqJDMN_g-02aQDtgzDt8Ypx_TX1qgHL_6G2tCkqHOd1LwUqgfBNxndLzlsF58ve2soJvGiX2_YE69MrGCHbPcPLtSaFDU8Rw6-35iJJWwaIbE-QP9VpxMw"
                alt="logo"
            />
                <NavLink to ='/' className='link'>Home</NavLink>
                <NavLink to ='/index' className='link'>Index</NavLink>
                <NavLink to ='/random' className='link'>Random</NavLink>
            </div>
            <div className='right-div'>
            <div className={classes.search} >
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <img
                className="nav_avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmX1IYrleu5pZkTWvD6cBrp4E0knysir8f-A&usqp=CAU"
                alt="Profile Logo"
                onClick={profile}
            />
            
          </div>
          {expand?
                <div className='list'>
                    <div className='flex'>
                        <ExitToAppIcon style={{fontSize:"1.2rem", paddingRight:'4px'}}/>
                        <span>Log Out</span>
                    </div>    
                </div>
            :null}
        </div>
        
    )
}

export default Nav;
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './Static/Nav.css'
  
function Nav() {

    const [show, handleShow] = useState(false);
    const useStyles = makeStyles((theme) => ({
        search: {
          position: 'relative',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: fade(theme.palette.common.white, 0.15),
          '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
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
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
          transition: theme.transitions.create('width'),
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
            <img
                className="nav_logo"
                src="https://lh3.googleusercontent.com/proxy/jG3Hz87bROsgDzovDF1PV2pgkTIsMIpMz-kxyAcChe1Gc2Ftb2DVOvkuzkIOFcNGgAAnsrjjdAPQZAjuhWZOCoPpuLmAQ-GnJNrhk_oL5X2PaZpSt__UVzsWFmzjyOUZYRQPDsZS5coccFZahV_KjPI"
                alt="logo"
            />
            <div className='navigation'>
                <NavLink to ='/'>Home</NavLink>
                <NavLink to ='/index'>Index</NavLink>
                <NavLink to ='/random'>Random</NavLink>
            </div>
            <div className={classes.search}>
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
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav;
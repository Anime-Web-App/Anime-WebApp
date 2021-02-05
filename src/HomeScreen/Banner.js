import React from 'react';
import './Static/Banner.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const styles = {
    root: {
        color: "202020",
        background: "#00FFFF",
        '&:hover': {
            background: "#202020",
            color: '#00FFFF'
        },
    }

}
const useStyle = makeStyles(styles);

function Banner(props) {
    //Function to cut the info after 150 words
    function truncate(str, n) {
        return str.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    const classes = useStyle();
    return (
        <div className="Banner">
            <div className="banner_fadeLeft" />
            <div className="main_banner">
                <h1 className="main_banner_heading">Black Clover</h1>
                <p className="main_banner_info">
                    {
                        truncate(
                            "Everyone within the Clover Kingdom is born with the natural ability to perform magic. Asta and Yuno are both orphans, abandoned at the same church at the same time, and the two have become inseparable throughout their childhood."
                            , 150)
                    }
                </p>
                <Button variant="contained" size="large" className={classes.root} style={{ minWidth: '30px', minHeight: '30px' }}>
                    <PlayArrowIcon /> Watch Now
                </Button>
            </div>
            <div className="banner_fadeBottom" />
        </div>
    );
}

export default Banner;
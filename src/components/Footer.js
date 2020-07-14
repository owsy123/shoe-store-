import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AppBar from '@material-ui/core/AppBar';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles({
    root: {
        // width: 100,
    },
});

function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='footerdiv'>
            <AppBar position="static">
                <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                    <h3 className="footertext" >Created By Muhammad Owais</h3>
                    <a href="https://github.com/owais17">
                        <BottomNavigationAction label="Github" icon={<GitHubIcon />} />
                    </a>
                    <a href="https://www.facebook.com/owais.sohail.92">
                    <BottomNavigationAction label="Facebook" value="favorites" icon={<FacebookIcon />} />
                    </a>
                    <a href="https://www.linkedin.com/in/owais-sohail-808729190/">
                    <BottomNavigationAction label="LinkedIn" value="nearby" icon={<LinkedInIcon />} />
                    </a>
                </BottomNavigation>
            </AppBar>
        </div>
    );
}
export default Footer




import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Telegram from '@mui/icons-material/Telegram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Grid } from '@mui/material';


export default function Footer() {
    return (
        <div className='Footer' >
            <Grid container direction="row-reverse">
                <Grid item xs={12} md={6} >
                    <a href='https://m.facebook.com' target="_blank" rel="noopener noreferrer" className='icon'><FacebookRoundedIcon /></a>
                    <a href='https://www.instagram.com' target="_blank" rel="noopener noreferrer" className='icon'><InstagramIcon /></a>
                    <a href='https://www.twitter.com' target="_blank" rel="noopener noreferrer" className='icon'><TwitterIcon /></a>
                    <a href='https://www.linkedin.com' target="_blank" rel="noopener noreferrer" className='icon'><Telegram /></a>
                    <a href='https://www.linkedin.com' target="_blank" rel="noopener noreferrer" className='icon'><LinkedIn /></a>
                </Grid>
                <Grid item xs={12} md={6} >
                    <a href='/' className='a left'><CopyrightIcon fontSize='small' className='icon' /> YALNGUEMBU 2022 - powerd by YALNGUEMBU</a>
                </Grid>
            </Grid>

        </div>
    )
}

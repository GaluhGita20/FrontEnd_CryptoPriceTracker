import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {green} from '@mui/material/colors';
import {alpha, useTheme} from '@mui/material/styles';

const ContentHeader = () => {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Grid 
                item
                alignItems='center'
                justifyContent='space-between'
                container
                spacing={3}
                >
                    <Grid item>
                        <Typography
                            color={theme.palette.text.primary}
                            variant='h3'> Realtime Datatable Crypto Price Tracker
                        </Typography>
                        <Box>
                            <Typography>
                                <span>{'Today:'}</span>
                                {' '}
                                <span 
                                    style={{
                                        color:theme.palette.mode == 'dark' ? green[500] : theme.palette.success.dark,
                                        background:theme.palette.mode == 'dark' ?alpha(green[500], 0.1): alpha(green[500], 0.2),
                                        padding: '5px', 
                                        borderRadius: '5px', 
                                        marginRight: '20px'
                                    }}>
                                        {new Date().toLocaleDateString('en-GB', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                        })}
                                </span>
                                </Typography>
                        </Box>
                    </Grid>
                </Grid>
        </React.Fragment>
    )
}

export default ContentHeader;
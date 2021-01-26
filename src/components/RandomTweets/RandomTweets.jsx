import React from 'react';
import { Card, CardContent, Typography, Grid}  from '@material-ui/core';
import cx from 'classnames';

import styles from './RandomTweets.module.css';

const RandomTweets = () => {
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={12} className={cx(styles.card, styles.positive)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Losowy pozytywny tweet</Typography>
                        <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default RandomTweets;
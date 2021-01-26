import React from 'react';
import { Card, CardContent, Typography, Grid, GridListTile } from '@material-ui/core';
import cx from 'classnames';

import styles from './RandomTweets.module.css';

const RandomTweets = () => {
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={12} className={cx(styles.card, styles.positive)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Losowy pozytywny tweet</Typography>
                        <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={12} className={cx(styles.card, styles.neutral)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Losowy neutralny tweet</Typography>
                        <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={12} className={cx(styles.card, styles.negative)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Losowy negatywny tweet</Typography>
                        <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default RandomTweets;
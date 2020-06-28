import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    width: 1024,
  },
  appBar: {
    backgroundColor: '#ff0000',
    width: '100%',
  },
  toolbar: {
    paddingRight: 24,
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.appBar}>
          <CssBaseline />
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit">
              @yamazaki_sensei
            </Typography>
          </Toolbar>
        </div>
      </div>
    </div>
  );
}

export default Home;

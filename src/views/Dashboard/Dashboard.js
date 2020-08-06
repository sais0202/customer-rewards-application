import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <UsersToolbar />
    </div>
  );
};

export default Dashboard;

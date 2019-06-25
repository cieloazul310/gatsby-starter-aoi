import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 300,
      margin: '0 auto',
      textAlign: 'center'
    },
    header: {
      backgroundColor: theme.palette.primary.main,
      padding: '1.5em',
      boxShadow: theme.shadows[2]
    },
    container: {
      width: '100%',
      padding: '3em'
    },
    counter: {
      fontSize: 72,
      margin: '0 auto'
    },
    buttonContainer: {
      padding: '1em'
    },
    button: {
      width: 120,
      margin: '0 .2em'
    }
  })
);

interface Props {
  title?: string;
}

function CounterApp({ title }: Props) {
  const classes = useStyles({});
  const [counter, setCounter] = React.useState(0);
  const [increment, toggleIncrement] = React.useState(true);

  const _onClicked = () => {
    setCounter(increment ? counter + 1 : counter - 1);
  };
  const _toggleIncrement = () => {
    toggleIncrement(!increment);
  };
  return (
    <Paper className={classes.root}>
      <Typography variant="h6" className={classes.header}>
        {title || 'Simple Counter'}
      </Typography>
      <div className={classes.container}>
        <span className={classes.counter}>{counter}</span>
      </div>
      <div className={classes.buttonContainer}>
        <Button className={classes.button} variant="contained" color="primary" onClick={_onClicked}>
          {increment ? 'INCREMENT' : 'DECREMENT'}
        </Button>
        <Button className={classes.button} variant="contained" color="secondary" onClick={_toggleIncrement}>
          REVERSE
        </Button>
      </div>
    </Paper>
  );
}

export default CounterApp;

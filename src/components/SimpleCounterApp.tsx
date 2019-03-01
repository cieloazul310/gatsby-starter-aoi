import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, {
  WithStyles,
  StyleRules,
} from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      width: 300,
      margin: '0 auto',
      textAlign: 'center',
    },
    header: {
      backgroundColor: theme.palette.primary.main,
      padding: '1.5em',
      boxShadow: theme.shadows[2],
    },
    container: {
      width: '100%',
      padding: '3em',
    },
    counter: {
      fontSize: 72,
      margin: '0 auto',
    },
    buttonContainer: {
      padding: '1em',
    },
    button: {
      width: 120,
      margin: '0 .2em',
    },
  });

interface Props extends WithStyles<typeof styles> {
  title?: string;
}

interface State {
  counter: number;
  increment: boolean;
}

class CounterApp extends React.Component<Props, State> {
  readonly state: State = {
    counter: 0,
    increment: true,
  };

  private _onClicked = () => {
    this.setState(prevState => ({
      counter: prevState.increment
        ? prevState.counter + 1
        : prevState.counter - 1,
    }));
  };

  private _toggleIncrement = () => {
    this.setState(prevState => ({
      increment: !prevState.increment,
    }));
  };

  public render() {
    const { classes, title } = this.props;
    const { counter, increment } = this.state;
    return (
      <Paper className={classes.root}>
        <Typography variant="h6" className={classes.header}>
          {title || 'Simple Counter'}
        </Typography>
        <div className={classes.container}>
          <span className={classes.counter}>{counter}</span>
        </div>
        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={this._onClicked}
          >
            {increment ? 'INCREMENT' : 'DECREMENT'}
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={this._toggleIncrement}
          >
            REVERSE
          </Button>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(CounterApp);

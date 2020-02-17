import * as React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { useDispatch } from '../utils/AppStateContext';

interface Props extends ButtonProps {
  countaction: 'INCREMENT' | 'DECREMENT' | 'RESET_COUNT';
}

export default function CounterButton(props: Props) {
  const dispatch = useDispatch();
  const { countaction } = props;
  const _onClick = React.useCallback(() => {
    dispatch({ type: countaction });
  }, [dispatch, countaction]);

  return (
    <Button {...props} onClick={_onClick}>
      {props.children}
    </Button>
  );
}

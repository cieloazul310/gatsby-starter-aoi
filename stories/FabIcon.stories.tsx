import * as React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

//import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../src/utils/theme';

import FabIcon from '../src/components/FabIcon';
import { faTwitter, faYoutube, faAmazon, faApple } from '@fortawesome/free-brands-svg-icons';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

storiesOf('FabIcon', module)
  //  .addDecorator(muiTheme([theme]))
  .add('Twitter', () => <FabIcon icon={faTwitter} color="primary" />)
  .add('YouTube', () => <FabIcon icon={faYoutube} color="secondary" />)
  .add('Amazon', () => <FabIcon icon={faAmazon} />)
  .add('Apple', () => <FabIcon icon={faApple} />)
  .add('In AppBar', () => (
    <AppBar>
      <Toolbar>
        <IconButton color="inherit">
          <FabIcon icon={faTwitter} />
        </IconButton>
      </Toolbar>
    </AppBar>
  ))
  .add('In Button', () => (
    <Button variant="contained" color="primary">
      <FabIcon icon={faAmazon} color="inherit" />
      Amazon Link
    </Button>
  ));

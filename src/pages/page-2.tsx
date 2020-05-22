import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableView from 'react-swipeable-views';
import TabPageLayout from '../layouts/TabPageLayout';
import TabPane from '../layout/TabPane';
import { AppLink } from '../components/AppLink';
import CounterButton from '../components/CounterButton';
import LoremIpsum from '../components/lorem-ipsum/LoremIpusm';
import Jugem from '../components/lorem-ipsum/Jugem';
import Korean from '../components/lorem-ipsum/Korean';
import { useAppState, useDispatch } from '../utils/AppStateContext';
import { AppState } from '../utils/AppState';

function SecondPage() {
  const { count, tab } = useAppState();
  const dispatch = useDispatch();
  const _handleChangeTab = (event: React.ChangeEvent<unknown>, newValue: AppState['tab']) => {
    dispatch({ type: 'SET_TAB', index: newValue });
  };
  const _handleChangeIndex = (index: AppState['tab']) => {
    dispatch({ type: 'SET_TAB', index });
  };
  const tabs = (
    <Tabs value={tab} onChange={_handleChangeTab} variant="scrollable" scrollButtons="auto">
      <Tab label="Tab 1" />
      <Tab label="Tab 2" />
      <Tab label="Tab 3" />
      <Tab label="Tab 4" />
      <Tab label="Tab 5" />
    </Tabs>
  );
  return (
    <TabPageLayout title="Second Page" disablePaddingTop tabSticky tabs={tabs}>
      <SwipeableView index={tab} onChangeIndex={_handleChangeIndex} resistance>
        <TabPane index={0} value={tab}>
          <Typography variant="h2" gutterBottom>
            Jugem
          </Typography>
          <Jugem paragraph />
        </TabPane>
        <TabPane index={1} value={tab}>
          <Typography variant="h2" gutterBottom>
            Latin
          </Typography>
          <LoremIpsum paragraph />
        </TabPane>
        <TabPane index={2} value={tab}>
          <Typography variant="h2" gutterBottom>
            Korean
          </Typography>
          <Korean paragraph />
        </TabPane>
        <TabPane index={3} value={tab}>
          <Typography variant="h2" gutterBottom>
            Hi from the second page
          </Typography>
          <Typography variant="h3" gutterBottom>
            Typography h3 gutterBottom
          </Typography>
          <Typography variant="h4" gutterBottom>
            Current Value: {count}
          </Typography>
          <ButtonGroup variant="contained">
            <CounterButton countaction="INCREMENT" color="primary">
              Increment
            </CounterButton>
            <CounterButton countaction="DECREMENT" color="secondary">
              Decrement
            </CounterButton>
            <CounterButton countaction="RESET_COUNT" color="default">
              RESET
            </CounterButton>
          </ButtonGroup>
        </TabPane>
        <TabPane index={4} value={tab}>
          <Typography variant="h2" gutterBottom>
            Hi from the second page
          </Typography>
          <Typography variant="h5" gutterBottom>
            Typography h5 gutterBottom
          </Typography>
          <Typography variant="h6" gutterBottom>
            Typography h6 gutterBottom
          </Typography>
          <Typography variant="body1">Typography body1</Typography>
          <Typography variant="body2">Typography body2</Typography>
          <Typography variant="body1">
            永い冬休みをどうして暮そうかと、物憂ものうい毎日をホトホト持て余していた折なので、私にはその招待がとても嬉しく、渡りに船で早速さっそく招きに応ずることにした。林が日頃仲の悪い義弟と一緒だというのが一寸ちょっと気がかりだったが、兎とも角かく橘を誘って二人で出掛ける事になった。何でも前の日の雨が名残なごりなく霽はれた十二月の、小春日和こはるびよりの暖かい日であった。別に身仕度みじたくの必要もない私等らは、旅行といっても至極簡単で、身柄一つで列車に乗込めばよかった。この日、橘はこれが彼の好みらしかったが、制服の上にインバネスという変な格好で、車室の隅に深々と身を沈め、絶えずポオのレーヴンか何かを口誦くちずさんでいた。そうやって、インバネスの片袖から突出した肘ひじを窓枠に乗せ、移り行く窓の外の景色をうっとりと眺め乍ながら、物凄い怪鳥けちょうの詩を口誦んでいる彼の様子が、私には何かしらひどく神秘的に見えたものだ。
          </Typography>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="default">
            Default
          </Button>
          <Button variant="outlined" color="default">
            Default
          </Button>
          <Typography variant="body1">
            <AppLink to="/">Go back to the homepage</AppLink>
          </Typography>
        </TabPane>
      </SwipeableView>
    </TabPageLayout>
  );
}

export default SecondPage;

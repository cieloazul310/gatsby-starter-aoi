import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import SwipeableView from 'react-swipeable-views';
import Layout from '../layout';
import { AppLink } from '../components/AppLink';
import CounterButton from '../components/CounterButton';
import LoremIpsum from '../components/lorem-ipsum/LoremIpusm';
import Jugem from '../components/lorem-ipsum/Jugem';
import Korean from '../components/lorem-ipsum/Korean';
import { useAppState, useDispatch } from '../utils/AppStateContext';
import { AppState } from '../types';

interface TabPaneProps {
  hidden: boolean;
  children: JSX.Element | JSX.Element[];
}

function TabPane({ hidden, children }: TabPaneProps) {
  return (
    <Box py={4} hidden={hidden} role="tabpanel">
      {children}
    </Box>
  );
}

function SecondPage() {
  const { count, tab } = useAppState();
  const dispatch = useDispatch();
  const _handleChangeTab = (event: React.ChangeEvent<{}>, newValue: AppState['tab']) => {
    dispatch({ type: 'SET_TAB', index: newValue });
  };
  const _handleChangeIndex = (index: AppState['tab']) => {
    dispatch({ type: 'SET_TAB', index });
  };
  return (
    <Layout title="Second Page" disablePaddingTop>
      <Tabs value={tab} onChange={_handleChangeTab} indicatorColor="primary" textColor="primary" variant="scrollable" scrollButtons="auto">
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
        <Tab label="Tab 4" />
        <Tab label="Tab 5" />
      </Tabs>
      <SwipeableView index={tab} onChangeIndex={_handleChangeIndex} resistance>
        <TabPane hidden={tab !== 0}>
          <Typography variant="h2" gutterBottom>
            Jugem
          </Typography>
          <Jugem />
        </TabPane>
        <TabPane hidden={tab !== 1}>
          <Typography variant="h2" gutterBottom>
            Latin
          </Typography>
          <LoremIpsum />
        </TabPane>
        <TabPane hidden={tab !== 2}>
          <Typography variant="h2" gutterBottom>
            Korean
          </Typography>
          <Korean />
        </TabPane>
        <TabPane hidden={tab !== 3}>
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
        <TabPane hidden={tab !== 4}>
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
    </Layout>
  );
}

export default SecondPage;

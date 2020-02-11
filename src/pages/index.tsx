import * as React from 'react';
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Layout from '../layout';
import { AppLink } from '../components/AppLink';
import reducer from '../utils/reducer';
import locationToRelativePath from '../utils/locationToRelativePath';
import { LocationWithState, createInitialAppState, useInitialAppState } from '../types';

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  location: LocationWithState;
}

function IndexPage({ data, location }: Props) {
  console.log(location);
  const [appState, dispatch] = React.useReducer(reducer, createInitialAppState(location));
  console.log(useInitialAppState());

  return (
    <Layout title="Index Page" appState={appState} dispatch={dispatch}>
      <Typography variant="h2" gutterBottom>
        Gatsby Starter TypeScript App Shell
      </Typography>
      <Typography variant="h5" gutterBottom>
        Welcome to your new <strong>{data.site.siteMetadata.title}</strong> site.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Features
      </Typography>
      <Typography variant="body1">Now go build something great.</Typography>
      <p>Now go build something great.</p>
      <Typography variant="body1">
        或年あるとしの冬休み、私は友人の林一郎はやしいちろうから一通の招待状を受け取った。手紙は、弟の二郎じろうと一緒に一週間ばかり前からこちらに来て、毎日狩猟しゅりょうに日を暮しているが、二人だけでは面白くないから、暇ひまがあれば私にも遊びに来ないか、という文面だった。封筒はホテルのもので、Ａ山麓さんろくＳホテルと名前が刷ってあった。
      </Typography>
      <Typography variant="body1">
        永い冬休みをどうして暮そうかと、物憂ものうい毎日をホトホト持て余していた折なので、私にはその招待がとても嬉しく、渡りに船で早速さっそく招きに応ずることにした。林が日頃仲の悪い義弟と一緒だというのが一寸ちょっと気がかりだったが、兎とも角かく橘を誘って二人で出掛ける事になった。何でも前の日の雨が名残なごりなく霽はれた十二月の、小春日和こはるびよりの暖かい日であった。別に身仕度みじたくの必要もない私等らは、旅行といっても至極簡単で、身柄一つで列車に乗込めばよかった。この日、橘はこれが彼の好みらしかったが、制服の上にインバネスという変な格好で、車室の隅に深々と身を沈め、絶えずポオのレーヴンか何かを口誦くちずさんでいた。そうやって、インバネスの片袖から突出した肘ひじを窓枠に乗せ、移り行く窓の外の景色をうっとりと眺め乍ながら、物凄い怪鳥けちょうの詩を口誦んでいる彼の様子が、私には何かしらひどく神秘的に見えたものだ。
      </Typography>
      <p>昔々あるところにお爺さんとお婆さんが平和に暮らしておったとさ。</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <AppLink to="/page-2/" appState={appState}>
        Go to page 2
      </AppLink>
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

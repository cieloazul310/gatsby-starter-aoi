import * as React from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

type Props = Pick<TypographyProps, 'variant' | 'paragraph'>

export default function Korea({ variant = 'body1', paragraph = false }: Props) {
  return (
    <>
      <Typography variant={variant} paragraph={paragraph}>
        국가원로자문회의의 의장은 직전대통령이 된다. 국가나 국민에게 중대한 재정적 부담을 지우는 조약 또는 입법사항에 관한 조약의
        체결·비준에 대한 동의권을 가진다. 국군의 조직과 편성은 법률로 정한다. 국가안전보장회의는 대통령이 주재한다.
      </Typography>
      <Typography variant={variant} paragraph={paragraph}>
        농업생산성의 제고와 농지의 합리적인 이용을 위하거나 불가피한 사정으로 발생하는 농지의 임대차와 위탁경영은 법률이 정하는 바에 의하여
        인정된다. 근로자는 근로조건의 향상을 위하여 자주적인 단결권·단체교섭권 및 단체행동권을 가진다, 군인은 현역을 면한 후가 아니면
        국무총리로 임명될 수 없다. 누구든지 법률에 의하지 아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며.
      </Typography>
      <Typography variant={variant} paragraph={paragraph}>
        국회는 상호원조 또는 안전보장에 관한 조약. 위원은 정당에 가입하거나 정치에 관여할 수 없다. 국회는 헌법 또는 법률에 특별한 규정이
        없는 한 재적의원 과반수의 출석과 출석의원 과반수의 찬성으로 의결한다. 국가는 사회보장·사회복지의 증진에 노력할 의무를 진다.
      </Typography>
      <Typography variant={variant} paragraph={paragraph}>
        국무회의의 구성원으로서 국정을 심의한다, 재판의 전심절차로서 행정심판을 할 수 있다. 대법원과 각급법원의 조직은 법률로 정한다. 국채를
        모집하거나 예산외에 국가의 부담이 될 계약을 체결하려 할 때에는 정부는 미리 국회의 의결을 얻어야 한다.
      </Typography>
      <Typography variant={variant} paragraph={paragraph}>
        모든 국민은 신속한 재판을 받을 권리를 가진다. 국가는 대외무역을 육성하며. 군사법원의 조직·권한 및 재판관의 자격은 법률로 정한다.
        사법절차가 준용되어야 한다.
      </Typography>
      <Typography variant={variant} paragraph={paragraph}>
        법령의 범위안에서 자치에 관한 규정을 제정할 수 있다. 국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에
        노력하여야 한다, 강화조약. 대한민국의 주권은 국민에게 있고.
      </Typography>
      <Typography variant={variant} paragraph={paragraph}>
        모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다, 선거와 국민투표의 공정한 관리 및 정당에 관한
        사무를 처리하기 위하여 선거관리위원회를 둔다. 그 재의를 요구할 수 있다. 형사상 자기에게 불리한 진술을 강요당하지 아니한다.
      </Typography>
      <Typography variant={variant} paragraph={paragraph}>
        국가는 그 균형있는 개발과 이용을 위하여 필요한 계획을 수립한다. 다만. 국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을
        사명으로 하며. 중임할 수 없다.
      </Typography>
      <Typography variant={variant} paragraph={paragraph}>
        법률과 적법한 절차에 의하지 아니하고는 처벌·보안처분 또는 강제노역을 받지 아니한다. 국가는 과학기술의 혁신과 정보 및 인력의 개발을
        통하여 국민경제의 발전에 노력하여야 한다. 헌법재판소에서 법률의 위헌결정, 모든 국민은 근로의 의무를 진다.
      </Typography>
      <Typography variant={variant} paragraph={paragraph}>
        군사재판을 관할하기 위하여 특별법원으로서 군사법원을 둘 수 있다. 재적의원과반수의 출석과 출석의원 3분의 2 이상의 찬성으로 전과 같은
        의결을 하면 그 법률안은 법률로서 확정된다, 중임할 수 없다, 다만.
      </Typography>
    </>
  );
}

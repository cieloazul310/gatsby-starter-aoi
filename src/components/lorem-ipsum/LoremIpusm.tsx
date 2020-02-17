import * as React from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

interface Props {
  variant?: TypographyProps['variant'];
}

export default function LoremIpsum({ variant = 'body1' }: Props) {
  return (
    <>
      <Typography variant={variant}>
        Lorem ipsum dolor sit amet, in facete percipit sea, cu suavitate qualisque scriptorem mel, prima intellegat est ut. Ei eos case
        dolores, in nibh erroribus nam. Dicat sonet qui cu, et per populo dissentiunt. Natum adolescens ut pri. Assum tibique indoctum ex
        duo, ei quas lorem laudem has. Mea fabulas accommodare ex, te vix modo aliquid, tollit mentitum detraxit ei usu. No audiam mandamus
        sea.
      </Typography>
      <Typography variant={variant}>
        Ex qui accusam detracto petentium, ea sit nobis eloquentiam. Cum nulla aliquid ea, homero iriure intellegam sed at. Nam et suas esse
        expetendis, sit cu dolores honestatis intellegebat. Eos id adipisci complectitur.
      </Typography>
      <Typography variant={variant}>
        Sit at impetus nominati definiebas, cu altera feugait sadipscing per. Mollis vocent percipit mea ne, sea partem epicuri splendide
        ad, pri id posse praesent voluptatum. Quo no ullum labitur prodesset. Ancillae offendit mediocrem cu eam, eum facer inciderint in,
        ea vel tation scaevola persecuti. Timeam intellegat interesset sit id, zril ridens duo ne. Numquam molestie et duo, duo soleat
        graeco in, in quo nibh inani iusto.
      </Typography>
      <Typography variant={variant}>
        Decore ceteros appellantur est ea. Mel illum democritum complectitur ei, mei at ferri option. Malis vitae molestie ius cu. Cu pro
        quaeque vivendum necessitatibus, decore facete volumus eu sit, eum no elit omnesque iracundia. Eu vix menandri vituperata.
      </Typography>
      <Typography variant={variant}>
        Te vim simul inciderint, sumo sale mundi est at, te cum eius prompta alterum. Duo an veri detracto consequat, an mei dicat gubergren
        definitiones, per tamquam definitiones ne. An eos habeo verear aliquip. Tollit exerci scripta has no, ut qui audire omnesque.
        Appareat facilisi pericula eu mel.
      </Typography>
      <Typography variant={variant}>
        Ne sed habeo detracto, at cum semper adversarium. Et fabulas appellantur conclusionemque eam, ius te purto etiam. Sea paulo causae
        quaerendum no, no vis accusata sadipscing, has enim vituperata ea. Ex his veniam possit, cu brute fuisset placerat vim. Mea eu
        voluptua reprimique, nam ne saperet voluptatum.
      </Typography>
      <Typography variant={variant}>
        Et harum aliquam vim, id qui idque mnesarchum percipitur. His ei diceret impedit accusata, utinam nominavi conceptam per ex, ad qui
        adhuc quidam possit. Tractatos assentior ex eam, quando malorum periculis nam ei. Eum an dictas eripuit, no singulis repudiare per.
      </Typography>
      <Typography variant={variant}>
        Quod sonet graecis quo in, homero soluta melius sit ad. Latine ornatus laoreet ne his. Iusto efficiantur has ea, qui ne quas dicat
        sensibus, vim ne latine consequat. Vim duis putant invenire id. Ad vocibus posidonium mei.
      </Typography>
      <Typography variant={variant}>
        Ut sed dicit cetero similique, eu electram mnesarchum sed. Has at agam postea. Pri definiebas voluptatibus eu, qui modo nullam
        insolens in, eros nobis pro in. Est in viris bonorum oporteat. Vix saepe dicunt causae in. Sit iisque viderer ocurreret ei.
      </Typography>
      <Typography variant={variant}>
        In vix euismod indoctum, ad vim reque salutandi gloriatur. Everti invenire consulatu vix ea, in pro ceteros gubergren, at justo
        quando sea. Ignota meliore cum an, ne choro noster vix, an quodsi tritani maiestatis vix. Id pri malorum perfecto. Inani referrentur
        dissentiunt no usu, an nec dictas volumus definiebas.
      </Typography>
    </>
  );
}

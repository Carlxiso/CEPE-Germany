const states = [
  {
    name: "Baden-Württemberg",
    svg: "/baden-w.svg",
    textName:
      "Baden-Württemberg é um dos estados mais prósperos da Alemanha, localizado no sudoeste do país, fazendo fronteira com a França e a Suíça.",
    population: "População",
    textPop:
      "Com cerca de 11 milhões de habitantes, Baden-Württemberg é o terceiro estado alemão mais populoso, sendo Estugarda a sua capital e maior cidade. ",
    comunity: "Comunidade Portuguesa",
    textComunity: "",
    text: "Baden-Württemberg acolhe uma das mais antigas e expressivas comunidades portuguesas da Alemanha. A presença portuguesa neste estado remonta aos anos 60 do século XX, no contexto da emigração laboral que trouxe milhares de trabalhadores portugueses para a indústria e construção civil alemãs.Hoje, a comunidade portuguesa em Baden-Württemberg mantém uma identidade cultural viva e organizada, expressa através de associações culturais e desportivas, grupos de folclore, paróquias e escolas de língua portuguesa. Cidades como Estugarda, Mannheim e Heidelberg concentram núcleos significativos de famílias portuguesas que, ao longo de gerações, foram construindo raízes profundas sem perder o vínculo à língua e à cultura de origem.Esta comunidade representa hoje não apenas uma história de trabalho e resiliência, mas também uma ponte viva entre Portugal e a Alemanha.",
    coursesSubtitle:
      "Vê onde podes aprender português em Baden-Württemberg! Consulta aqui as nossas escolas e localidades disponíveis neste estado.",
    basico: [
      { name: "Appenweier", slug: "appenweier", coords: [48.5477, 7.9745] },
      { name: "Backnang", slug: "backnang", coords: [48.9471, 9.4342] },
      {
        name: "Bad Liebenzell",
        slug: "bad liebenzell",
        coords: [48.7747, 8.73],
      },
      { name: "Bad Urach", slug: "bad-urach", coords: [48.4931, 9.4042] },
      { name: "Baiersbronn", slug: "baiersbronn", coords: [48.5089, 8.3707] },
      { name: "Blaubeuren", slug: "blaubeuren", coords: [48.4073, 9.7835] },
      { name: "Calw", slug: "calw", coords: [48.7127, 8.7425] },
      { name: "Esslingen", slug: "esslingen", coords: [48.7422, 9.3144] },
      { name: "Freiburg", slug: "freiburg", coords: [47.999, 7.8421] },
      {
        name: "Friedrichshafen",
        slug: "friedrichshafen",
        coords: [47.6567, 9.465],
      },
      { name: "Göppingen", slug: "göppingen", coords: [48.7054, 9.6512] },
      { name: "Heidelberg", slug: "heidelberg", coords: [49.3988, 8.6724] },
      { name: "Heilbronn", slug: "heilbronn", coords: [49.1427, 9.2109] },
      { name: "Ittlingen", slug: "ittlingen", coords: [49.1924, 8.9321] },
      { name: "Karlsruhe", slug: "karlsruhe", coords: [49.0069, 8.4037] },
      {
        name: "Kirchheim Teck",
        slug: "kirchheim-teck",
        coords: [48.6471, 9.452],
      },
      { name: "Ludwigsburg", slug: "ludwigsburg", coords: [48.8891, 9.1943] },
      { name: "Magstadt", slug: "magstadt", coords: [48.7425, 8.9666] },
      { name: "Mannheim", slug: "mannheim", coords: [49.4873, 8.4646] },
      {
        name: "Markgröningen",
        slug: "markgröningen",
        coords: [48.9035, 9.0865],
      },
      { name: "Nürtingen", slug: "nürtingen", coords: [48.6244, 9.3469] },
      {
        name: "Pfalzgrafenweiler",
        slug: "pfalzgrafenweiler",
        coords: [48.5253, 8.5648],
      },
      { name: "Pforzheim", slug: "pforzheim", coords: [48.8922, 8.6946] },
      { name: "Ravensburg", slug: "ravensburg", coords: [47.7854, 9.6104] },
      { name: "Renningen", slug: "renningen", coords: [48.7717, 8.9344] },
      { name: "Reutlingen", slug: "reutlingen", coords: [48.4944, 9.2028] },
      { name: "Rottenburg", slug: "rottenburg", coords: [48.4791, 8.9409] },
      { name: "Sindelfingen", slug: "sindelfingen", coords: [48.7075, 9.0044] },
      { name: "Singen", slug: "singen", coords: [47.7628, 8.838] },
      { name: "Stuttgart", slug: "stuttgart", coords: [48.7758, 9.1829] },
      { name: "Titisee", slug: "titisee", coords: [47.9238, 8.1912] },
      { name: "Ulm", slug: "ulm", coords: [48.4011, 9.9876] },
      {
        name: "Villingen-Schwenningen",
        slug: "villingen-Schwenningen",
        coords: [48.0594, 8.4641],
      },
      { name: "Waldshut", slug: "waldshut", coords: [47.6327, 8.2719] },
      { name: "Walldorf", slug: "walldorf", coords: [49.3064, 8.6428] },
      {
        name: "Wangen im Allgäu",
        slug: "wangen im allgäu",
        coords: [47.6875, 9.8318],
      },
      {
        name: "Weilheim-Teck",
        slug: "weilheim-teck",
        coords: [48.6179, 9.5356],
      },
      { name: "Weinheim", slug: "weinheim", coords: [49.545, 8.6603] },
    ],
    superior: [],
    distance: [
      { name: "Ansbach", slug: "ansbach", coords: [49.3004, 10.5719] },
      { name: "Baden-Baden", slug: "baden-Baden", coords: [48.7656, 8.2285] },
      {
        name: "Bietigheim-Bissingen",
        slug: "bietigheim-Bissingen",
        coords: [48.9472, 9.1305],
      },
      { name: "Briesen", slug: "briesen", coords: [52.3402, 14.2768] },
      { name: "Göttingen", slug: "göttingen", coords: [51.5413, 9.9158] },
      { name: "Jetzendorf", slug: "jetzendorf", coords: [48.4368, 11.4171] },
      { name: "Künzelsau", slug: "künzelsau", coords: [49.2841, 9.6909] },
      { name: "Lauingen", slug: "lauingen", coords: [48.5703, 10.4299] },
      { name: "Memmelsdorf", slug: "memmelsdorf", coords: [49.9312, 10.9586] },
      { name: "Schopfheim", slug: "schopfheim", coords: [47.6519, 7.8236] },
      { name: "Würzburg", slug: "würzburg", coords: [49.7913, 9.9534] },
    ],
  },

  {
    name: "Baviera",
    textName:
      "A Baviera é o maior estado da Alemanha em território, situado no sudeste do país, fazendo fronteira com a Áustria e a República Checa.",
    population: "População",
    textPop:
      "Com aproximadamente 13 milhões de habitantes, a Baviera é o segundo estado alemão mais populoso, tendo Munique como capital e maior metrópole.",
    comunity: "Comunidade Portuguesa",
    textComunity:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    text: "A Baviera alberga uma comunidade portuguesa com raízes profundas, cuja presença remonta igualmente às décadas de 1960 e 1970, período em que a emigração portuguesa para a Alemanha atingiu o seu auge, impulsionada pelos acordos de recrutamento de mão de obra entre os dois países. Munique, Nuremberga e Augsburgo são os principais polos de concentração desta comunidade, que ao longo das décadas foi construindo estruturas associativas, culturais e religiosas que preservam a língua portuguesa e as tradições lusas em solo bávaro. Associações desportivas, grupos culturais e missões católicas de língua portuguesa continuam a desempenhar um papel fundamental na coesão e na identidade desta comunidade.Hoje, os descendentes dessa primeira geração de emigrantes são cidadãos plenamente integrados na sociedade alemã, mantendo simultaneamente uma ligação afetiva e cultural a Portugal que se transmite de geração em geração.",
    coursesSubtitle:
      "Vê onde podes aprender português na Baviera! Consulta aqui as nossas escolas e localidades disponíveis neste estado.",
    basico: [
      { name: "Augsburg", slug: "augsburg", coords: [48.3705, 10.8978] },
      { name: "Erlangen", slug: "erlangen", coords: [49.5897, 11.012] },
      {
        name: "Fürstenfeldbruck",
        slug: "fürstenfeldbruck",
        coords: [48.1739, 11.243],
      },
      {
        name: "Garmisch-Partenkirchen",
        slug: "garmisch-Partenkirchen",
        coords: [47.4919, 11.0948],
      },
      { name: "München", slug: "münchen", coords: [48.1351, 11.582] },
      { name: "Nürnberg", slug: "nürnberg", coords: [49.4543, 11.0746] },
      { name: "Regensburg", slug: "regensburg", coords: [49.0134, 12.1016] },
    ],
    superior: [],
  },
  {
    name: "Berlim",
    textName:
      "Berlim é a capital e maior cidade da Alemanha, situada no nordeste do país, sendo simultaneamente cidade-estado e um dos 16 estados federais alemães.",
    population: "População",
    textPop:
      "Com cerca de 3,7 milhões de habitantes, Berlim é a cidade mais populosa da Alemanha e um dos maiores centros urbanos de toda a Europa.",
    comunity: "Comunidade Portuguesa",
    textComunity:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    text: "Berlim ocupa um lugar singular no mapa da emigração portuguesa na Alemanha. Ao contrário de estados como a Baviera ou Baden-Württemberg, cuja presença portuguesa remonta à emigração laboral dos anos 60, a comunidade portuguesa em Berlim tem um perfil mais diversificado e contemporâneo, marcado por sucessivas vagas migratórias com motivações e características distintas.Se as primeiras gerações vieram sobretudo em busca de trabalho na construção e na indústria, as vagas mais recentes — em particular após a crise económica de 2008 e durante a pandemia — trouxeram para Berlim uma comunidade mais jovem, qualificada e cosmopolita, atraída pelo dinamismo cultural, económico e criativo da capital alemã.   Hoje, Berlim conta com uma comunidade portuguesa ativa e visível, presente em associações culturais, no ensino da língua portuguesa através da rede do Camões I.P., em espaços de restauração, comércio e nas artes. As escolas Neues Tor e Kurt-Schwitters, com o seu projeto bilingue Português-Alemão integrado na Escola Estatal Europeia de Berlim, são um dos símbolos mais expressivos do enraizamento e da vitalidade da presença lusófona na capital alemã.",
    coursesSubtitle:
      "Vê onde podes aprender português em Berlim! Consulta aqui as nossas escolas e localidades disponíveis neste estado.",
    basico: [{ name: "Berlim", slug: "berlim", coords: [52.52, 13.405] }],
    superior: [],
    distance: [{ name: "Berlim", slug: "berlim", coords: [52.52, 13.405] }],
  },
  {
    name: "Hamburgo",
    textName:
      "Hamburgo é o segundo maior estado-cidade da Alemanha, localizado no norte do país, às margens do rio Elba, sendo um dos maiores portos marítimos da Europa.",
    population: "População",
    textPop:
      "Com aproximadamente 1,9 milhões de habitantes, Hamburgo é a segunda cidade mais populosa da Alemanha, reconhecida internacionalmente pelo seu cosmopolitismo e tradição comercial marítima..",
    comunity: "Comunidade Portuguesa",
    textComunity:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    text: "Hamburgo representa um capítulo particular da história da emigração portuguesa na Alemanha. A sua condição de grande porto comercial e cidade cosmopolita atraiu, desde cedo, trabalhadores portugueses que encontraram na cidade hanseática oportunidades laborais nos setores da construção, da hotelaria e da restauração, bem como nas atividades portuárias e logísticas que sempre caracterizaram esta metrópole do norte alemão. A comunidade portuguesa em Hamburgo, embora menos numerosa do que a dos grandes estados industriais do sul e do centro da Alemanha, soube construir ao longo das décadas uma presença organizada e coesa. Associações culturais e desportivas, missões católicas de língua portuguesa e grupos de convívio comunitário têm desempenhado um papel essencial na preservação da língua, das tradições e da identidade lusófona entre os seus membros. As gerações mais jovens, já nascidas ou crescidas em Hamburgo, vivem hoje entre duas culturas e duas línguas, mantendo laços afetivos com Portugal enquanto se afirmam como cidadãos plenamente integrados na sociedade alemã. A comunidade portuguesa de Hamburgo é, assim, mais um testemunho vivo da resiliência e da capacidade de adaptação do povo português além-fronteiras.",
    coursesSubtitle:
      "Vê onde podes aprender português em Hamburgo! Consulta aqui as nossas escolas e localidades disponíveis neste estado.",
    basico: [
      { name: "Altona", slug: "altona", coords: [53.5792, 9.8746] },
      { name: "Farmsen", slug: "farmsen", coords: [53.6107, 10.1166] },
      { name: "Hamburgo", slug: "hamburgo", coords: [53.5488, 9.9872] },
      { name: "Harburg", slug: "harburg", coords: [53.4608, 9.9836] },
      {
        name: "Wilhelmsburg",
        slug: "wilhelmsburg",
        coords: [53.5003, 10.0181],
      },
    ],
    superior: [],
  },
  {
    name: "Hessen",
    textName:
      "Hessen é um estado localizado no centro da Alemanha, fazendo fronteira com seis outros estados federais, sendo Wiesbaden a sua capital administrativa e Francoforte a sua maior cidade.",
    population: "População",
    textPop:
      "Com cerca de 6,4 milhões de habitantes, Hessen é o quinto estado alemão mais populoso, destacando-se como um dos mais importantes centros económicos e financeiros da Europa.",
    comunity: "Comunidade Portuguesa",
    textComunity:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    text: "Hessen ocupa um lugar de destaque no mapa da emigração portuguesa na Alemanha. A sua posição geográfica central, aliada ao dinamismo económico de Francoforte — sede do Banco Central Europeu e principal praça financeira do continente — e ao importante nó de transportes que representa o aeroporto internacional de Francoforte, tornaram este estado um destino privilegiado para muitos portugueses ao longo das décadas. A presença portuguesa em Hessen remonta aos anos 60 e 70 do século XX, quando milhares de trabalhadores portugueses chegaram ao estado atraídos pelas oportunidades laborais na indústria, na construção civil e nos serviços. Francoforte, Darmstadt, Offenbach e Wiesbaden tornaram-se os principais polos de concentração desta comunidade, que ao longo das gerações foi construindo estruturas associativas, culturais e religiosas sólidas. Missões católicas de língua portuguesa, associações culturais e desportivas e grupos de convívio comunitário continuam hoje a desempenhar um papel fundamental na preservação da identidade lusófona em Hessen. A comunidade portuguesa deste estado é, assim, um testemunho duradouro da capacidade de adaptação e do espírito de resiliência que sempre caracterizou a emigração portuguesa no mundo.",
    coursesSubtitle:
      "Vê onde podes aprender português em Hessen! Consulta aqui as nossas escolas e localidades disponíveis neste estado.",
    basico: [
      { name: "Babenhausen", slug: "babenhausen", coords: [49.9594, 8.9589] },
      { name: "Bischofsheim", slug: "bischofsheim", coords: [49.9879, 8.3559] },
      { name: "Breuberg", slug: "breuberg", coords: [49.8166, 9.0234] },
      { name: "Darmstadt", slug: "darmstadt", coords: [49.8728, 8.6512] },
      { name: "Frankfurt", slug: "frankfurt", coords: [50.1109, 8.6821] },
      {
        name: "Friedrichsdorf",
        slug: "friedrichsdorf",
        coords: [50.2538, 8.6417],
      },
      { name: "Groß-Umstadt", slug: "groß-Umstadt", coords: [49.8702, 8.9263] },
      {
        name: "Hofheim am Taunus",
        slug: "hofheim-am-taunus",
        coords: [50.0842, 8.4432],
      },
      { name: "Kelsterbach", slug: "kelsterbach", coords: [50.0597, 8.5298] },
      {
        name: "Limburg an der Lahn",
        slug: "limburg-an-der-lahn",
        coords: [50.3986, 8.0796],
      },
      { name: "Mainz-Kastel", slug: "mainz-Kastel", coords: [50.0193, 8.2806] },
      { name: "Wetzlar", slug: "wetzlar", coords: [50.5635, 8.5003] },
      { name: "Wiesbaden", slug: "wiesbaden", coords: [50.0782, 8.2398] },
    ],
    superior: [],
  },
  {
    name: "Schleswig-Holstein",
    textName:
      "Schleswig-Holstein é o estado mais a norte da Alemanha, fazendo fronteira com a Dinamarca a norte e com o Mar do Norte a oeste e o Mar Báltico a leste.",
    population: "População",
    textPop:
      "Com aproximadamente 2,9 milhões de habitantes, Schleswig-Holstein é um estado de dimensão média na Alemanha, tendo Kiel como capital e Lübeck como a sua cidade histórica mais emblemática.",
    comunity: "Comunidade Portuguesa",
    textComunity:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    text: "Schleswig-Holstein representa um dos capítulos menos conhecidos, mas não menos significativos, da presença portuguesa na Alemanha. Sendo um estado predominantemente rural e marítimo, com uma economia assente na agricultura, na pesca, na indústria alimentar e no turismo costeiro, atraiu ao longo das décadas trabalhadores portugueses dispostos a construir uma nova vida nas margens do Mar do Norte e do Mar Báltico. A comunidade portuguesa em Schleswig-Holstein é, comparativamente a outros estados alemães, menos numerosa e mais dispersa pelo território. No entanto, essa dispersão não impediu que os seus membros fossem construindo laços de solidariedade e de identidade comunitária, muitas vezes em torno das missões católicas de língua portuguesa e de redes informais de apoio mútuo que sempre caracterizaram a emigração portuguesa em contextos de menor concentração urbana. Kiel e Lübeck concentram os núcleos portugueses mais visíveis do estado, onde restaurantes, pequenos negócios e encontros comunitários mantêm viva a língua e a cultura lusófona. As gerações mais jovens, nascidas e criadas neste canto mais setentrional da Alemanha, crescem entre a identidade portuguesa herdada dos pais e avós e a cultura alemã e escandinava que as envolve quotidianamente, construindo pontes únicas entre o sul da Europa e o norte do continente.",
    coursesSubtitle:
      "Vê onde podes aprender português em Schleswig-Holstein! Consulta aqui as nossas escolas e localidades disponíveis neste estado.",
    basico: [
      { name: "Glinde", slug: "glinde", coords: [53.5401, 10.2114] },
      { name: "Norderstedt", slug: "norderstedt", coords: [53.6993, 10.0009] },
      { name: "Pinneberg", slug: "pinneberg", coords: [53.6634, 9.7926] },
    ],
    superior: [],
  },
  {
    name: "Niedersachsen",
    textName:
      "A Baixa-Saxónia é o segundo maior estado da Alemanha em território, localizado no noroeste do país, fazendo fronteira com os Países Baixos a oeste e com o Mar do Norte a norte.",
    textPop:
      "Com cerca de 8 milhões de habitantes, a Baixa-Saxónia é o quarto estado alemão mais populoso, tendo Hanôver como capital e principal centro urbano, económico e cultural do estado.",
    comunity: "Comunidade Portuguesa",
    textComunity:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    text: "A Baixa-Saxónia integra o conjunto de estados alemães onde a presença portuguesa se foi consolidando ao longo de várias décadas, acompanhando os fluxos migratórios que marcaram profundamente a relação entre Portugal e a Alemanha desde os anos 60 do século XX. A indústria automóvel, com particular destaque para a Volkswagen em Wolfsburgo, foi um dos principais motores de atração de trabalhadores portugueses para este estado, tornando Wolfsburgo um dos polos de concentração lusófona mais expressivos e historicamente significativos de toda a Alemanha. Esta ligação entre a comunidade portuguesa e a Volkswagen é, aliás, um dos traços mais distintivos da emigração lusa na Baixa-Saxónia, tendo gerado ao longo das gerações uma identidade comunitária fortemente marcada pela cultura operária e pela solidariedade entre trabalhadores vindos do mesmo país, muitas vezes das mesmas regiões de Portugal. Para além de Wolfsburgo, cidades como Hanôver, Braunschweig e Osnabrück acolhem também núcleos portugueses ativos, com associações culturais e desportivas, missões católicas de língua portuguesa e espaços de convívio que mantêm vivos os laços com a cultura e a língua de origem. A comunidade portuguesa da Baixa-Saxónia é, assim, um exemplo eloquente de como a emigração pode ser simultaneamente motor de integração e guardiã de identidade.",
    coursesSubtitle:
      "Vê onde podes aprender português em Niedersachsen/Baixa-Saxónia! Consulta aqui as nossas escolas e localidades disponíveis neste estado.",
    basico: [
      {
        name: "Braunschweig",
        slug: "braunschweig",
        coords: [52.2678, 10.5246],
      },
      { name: "Cuxhaven", slug: "cuxhaven", coords: [53.8593, 8.6879] },
      { name: "Hameln", slug: "hameln", coords: [52.1042, 9.3616] },
      { name: "Hannover", slug: "hannover", coords: [52.3759, 9.732] },
      { name: "Nordhorn", slug: "nordhorn", coords: [52.4407, 7.0649] },
      { name: "Osnabrück", slug: "osnabrück", coords: [52.2799, 8.0472] },
      { name: "Wolfsburg", slug: "Wolfsburg", coords: [52.4227, 10.7865] },
    ],
    superior: [],
  },
  {
    name: "Nordrhein-Westfalen",
    textName:
      "A Renânia do Norte-Vestefália é o estado mais populoso da Alemanha, localizado no oeste do país, fazendo fronteira com a Bélgica e os Países Baixos, sendo Düsseldorf a sua capital administrativa.",
    population: "População",
    textPop:
      "Com cerca de 18 milhões de habitantes, a Renânia do Norte-Vestefália é o estado alemão mais populoso e um dos mais densamente urbanizados da Europa, albergando grandes metrópoles como Colónia, Dortmund, Essen e Düsseldorf.",
    comunity: "Comunidade Portuguesa",
    textComunity:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    text: "A Renânia do Norte-Vestefália ocupa um lugar central e incontornável na história da emigração portuguesa na Alemanha. Foi neste estado, o mais industrializado e populoso do país, que milhares de trabalhadores portugueses encontraram, a partir dos anos 60 do século XX, as condições laborais que os levaram a atravessar a Europa em busca de uma vida melhor. As minas de carvão e as siderurgias do Ruhr, uma das maiores regiões industriais do mundo, foram o principal destino desta primeira vaga migratória, atraindo portugueses oriundos sobretudo do interior norte e centro de Portugal, das regiões de Trás-os-Montes, Beiras e Minho. Cidades como Colónia, Dortmund, Duisburgo, Essen, Düsseldorf e Wuppertal tornaram-se verdadeiros polos de vida lusófona, onde a comunidade portuguesa foi construindo ao longo das décadas uma presença organizada, visível e culturalmente rica. Associações culturais e desportivas, grupos de folclore, missões católicas de língua portuguesa, rádios comunitárias e restaurantes portugueses teceram uma rede de pertença que atravessou gerações e resistiu às transformações económicas e sociais que foram redesenhando o perfil industrial deste estado. A desindustrialização progressiva da região do Ruhr, a partir dos anos 80 e 90, obrigou muitos portugueses a reconverter-se profissionalmente e a adaptar-se a novas realidades laborais, o que é também testemunho da resiliência e da capacidade de reinvenção que sempre caracterizou esta comunidade. Hoje, os descendentes dessa primeira geração de mineiros e operários são professores, empresários, profissionais de saúde e agentes culturais plenamente integrados na sociedade alemã, mas que continuam a cultivar com orgulho a sua herança lusófona. A Renânia do Norte-Vestefália alberga assim uma das maiores e mais antigas comunidades portuguesas da Alemanha, sendo um espelho fiel da história partilhada entre dois povos que, ao longo de décadas, foram construindo juntos muito mais do que fronteiras económicas.",
    coursesSubtitle:
      "Vê onde podes aprender português na Renânia do Norte-Vestefália! Consulta aqui as nossas escolas e localidades disponíveis neste estado.",
    basico: [
      { name: "Bonn", slug: "bonn", coords: [50.7374, 7.0982] },
      { name: "Bochum", slug: "bochum", coords: [51.4818, 7.2162] },
      { name: "Dülmen", slug: "dülmen", coords: [51.8304, 7.2794] },
      { name: "Essen", slug: "essen", coords: [51.4576, 7.0225] },
      { name: "Gütersloh", slug: "gütersloh", coords: [51.9032, 8.3858] },
      { name: "Iserlohn", slug: "iserlohn", coords: [51.3765, 7.6961] },
      { name: "Krefeld", slug: "krefeld", coords: [51.3345, 6.5654] },
      { name: "Lohmar", slug: "lohmar", coords: [50.8378, 7.2127] },
      { name: "Minden", slug: "minden", coords: [52.2924, 8.9161] },
      { name: "Paderborn", slug: "paderborn", coords: [51.7189, 8.7575] },
      { name: "Schwelm", slug: "schwelm", coords: [51.2841, 7.2915] },
      { name: "Stadtlohn", slug: "stadtlohn", coords: [51.9939, 6.9147] },
      { name: "Vlotho", slug: "vlotho", coords: [52.1665, 8.8616] },
      { name: "Witten", slug: "Witten", coords: [51.4439, 7.3532] },
    ],
    superior: [],
  },
  {
    name: "Freie Hansestadt Bremen",
    textName:
      "Bremen é o menor estado da Alemanha em território e o segundo estado-cidade do país, localizado no noroeste, encravado no estado da Baixa-Saxónia e banhado pelo rio Weser, afluente do Mar do Norte.",
    population: "População",
    textPop:
      "Com cerca de 700 mil habitantes, Bremen é o estado menos populoso da Alemanha, sendo constituído por duas cidades: Bremen, a capital, e Bremerhaven, o seu importante porto marítimo no litoral norte.",
    comunity: "Comunidade Portuguesa",
    textComunity:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    text: "Bremen representa um dos capítulos mais singulares da presença portuguesa na Alemanha. A sua condição de estado-cidade portuária, com uma economia historicamente assente no comércio marítimo, na logística, na indústria aeronáutica — onde a Airbus tem uma presença muito significativa — e nos serviços, conferiu a esta pequena mas dinâmica cidade-estado um perfil de atração migratória próprio e distinto dos grandes estados industriais alemães. A comunidade portuguesa em Bremen, embora não sendo das mais numerosas no contexto nacional, soube ao longo das décadas criar raízes sólidas nesta cidade hanseática de tradição cosmopolita e aberta ao mundo. Os primeiros portugueses chegaram a Bremen, tal como a outros pontos da Alemanha, no contexto da emigração laboral das décadas de 1960 e 1970, integrando-se sobretudo nos setores da construção civil, da indústria e dos serviços. A dimensão reduzida da cidade favoreceu, paradoxalmente, uma integração mais próxima e uma convivência intercultural mais intensa, criando laços entre a comunidade portuguesa e a sociedade bremense que se foram aprofundando ao longo das gerações. Missões católicas de língua portuguesa, pequenas associações de convívio e redes informais de solidariedade constituíram os pilares desta comunidade, que manteve sempre viva a sua identidade lusófona mesmo longe dos grandes centros de concentração portuguesa na Alemanha. Hoje, os portugueses de Bremen e os seus descendentes são parte integrante do tecido multicultural desta cidade, contribuindo ativamente para a sua vida económica, social e cultural, e mantendo simultaneamente uma ligação afetiva profunda à língua e à cultura que trouxeram consigo das diversas regiões de Portugal.",
    coursesSubtitle:
      "Vê onde podes aprender português em Bremen! Consulta aqui as nossas escolas e localidades disponíveis neste estado.",
    basico: [
      { name: "Bremen", slug: "bremen", coords: [53.0793, 8.8017] },
      { name: "Bremerhaven", slug: "bremerhaven", coords: [53.5396, 8.5809] },
    ],
    superior: [],
  },
];

export default states;

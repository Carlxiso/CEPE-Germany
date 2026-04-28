const states = [
  {
    name: "Baden-Württemberg",
    svg: "/baden-w.svg",
    textName:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    population: "População",
    textPop:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    comunity: "Comunidade Portuguesa",
    textComunity:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi. Quas consectetur dolorum accusantium similique quaerat vitae, iure a, excepturi nihil alias obcaecati iste itaque dolores maiores voluptatem tempora quam. Impedit illo accusamus architecto neque minima, autem quae modi dolor rerum at quo nisi aut ea tempore eligendi obcaecati corrupti esse magnam! Exercitationem, ullam ducimus id sint quod expedita cum ab. Incidunt exercitationem veritatis doloribus libero esse quisquam alias consectetur modi voluptate eligendi illum ipsum, nemo nostrum vero nesciunt, quidem perferendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi placeat sapiente voluptatum saepe, explicabo ducimus reprehenderit qui error doloribus consequatur. Lorem, ips um dolor sit amet consectetur adipisicing elit. Dignissimos dolorem culpa tempora dolorum quasi iure quas beatae minus aut mollitia assumenda, eos explicabo libero. Vitae culpa, amet possimus totam sapiente animi iusto earum odio minus pariatur, beatae ut, doloribus quasi.",
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
      { name: "Ingolstadt", slug: "ingolstadt", coords: [48.7667, 11.4226] },
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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    population: "População",
    textPop:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    comunity: "Comunidade Portuguesa",
    textComunity:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi. Quas consectetur dolorum accusantium similique quaerat vitae, iure a, excepturi nihil alias obcaecati iste itaque dolores maiores voluptatem tempora quam. Impedit illo accusamus architecto neque minima, autem quae modi dolor rerum at quo nisi aut ea tempore eligendi obcaecati corrupti esse magnam! Exercitationem, ullam ducimus id sint quod expedita cum ab. Incidunt exercitationem veritatis doloribus libero esse quisquam alias consectetur modi voluptate eligendi illum ipsum, nemo nostrum vero nesciunt, quidem perferendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi placeat sapiente voluptatum saepe, explicabo ducimus reprehenderit qui error doloribus consequatur. Lorem, ips um dolor sit amet consectetur adipisicing elit. Dignissimos dolorem culpa tempora dolorum quasi iure quas beatae minus aut mollitia assumenda, eos explicabo libero. Vitae culpa, amet possimus totam sapiente animi iusto earum odio minus pariatur, beatae ut, doloribus quasi.",
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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    population: "População",
    textPop:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    comunity: "Comunidade Portuguesa",
    textComunity:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi. Quas consectetur dolorum accusantium similique quaerat vitae, iure a, excepturi nihil alias obcaecati iste itaque dolores maiores voluptatem tempora quam. Impedit illo accusamus architecto neque minima, autem quae modi dolor rerum at quo nisi aut ea tempore eligendi obcaecati corrupti esse magnam! Exercitationem, ullam ducimus id sint quod expedita cum ab. Incidunt exercitationem veritatis doloribus libero esse quisquam alias consectetur modi voluptate eligendi illum ipsum, nemo nostrum vero nesciunt, quidem perferendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi placeat sapiente voluptatum saepe, explicabo ducimus reprehenderit qui error doloribus consequatur. Lorem, ips um dolor sit amet consectetur adipisicing elit. Dignissimos dolorem culpa tempora dolorum quasi iure quas beatae minus aut mollitia assumenda, eos explicabo libero. Vitae culpa, amet possimus totam sapiente animi iusto earum odio minus pariatur, beatae ut, doloribus quasi.",
    basico: [{ name: "Berlim", slug: "berlim", coords: [52.52, 13.405] }],
    superior: [],
    distance: [{ name: "Berlim", slug: "berlim", coords: [52.52, 13.405] }],
  },
  {
    name: "Hamburgo",
    textName:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    population: "População",
    textPop:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    comunity: "Comunidade Portuguesa",
    textComunity:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi. Quas consectetur dolorum accusantium similique quaerat vitae, iure a, excepturi nihil alias obcaecati iste itaque dolores maiores voluptatem tempora quam. Impedit illo accusamus architecto neque minima, autem quae modi dolor rerum at quo nisi aut ea tempore eligendi obcaecati corrupti esse magnam! Exercitationem, ullam ducimus id sint quod expedita cum ab. Incidunt exercitationem veritatis doloribus libero esse quisquam alias consectetur modi voluptate eligendi illum ipsum, nemo nostrum vero nesciunt, quidem perferendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi placeat sapiente voluptatum saepe, explicabo ducimus reprehenderit qui error doloribus consequatur. Lorem, ips um dolor sit amet consectetur adipisicing elit. Dignissimos dolorem culpa tempora dolorum quasi iure quas beatae minus aut mollitia assumenda, eos explicabo libero. Vitae culpa, amet possimus totam sapiente animi iusto earum odio minus pariatur, beatae ut, doloribus quasi.",
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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    population: "População",
    textPop:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    comunity: "Comunidade Portuguesa",
    textComunity:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi. Quas consectetur dolorum accusantium similique quaerat vitae, iure a, excepturi nihil alias obcaecati iste itaque dolores maiores voluptatem tempora quam. Impedit illo accusamus architecto neque minima, autem quae modi dolor rerum at quo nisi aut ea tempore eligendi obcaecati corrupti esse magnam! Exercitationem, ullam ducimus id sint quod expedita cum ab. Incidunt exercitationem veritatis doloribus libero esse quisquam alias consectetur modi voluptate eligendi illum ipsum, nemo nostrum vero nesciunt, quidem perferendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi placeat sapiente voluptatum saepe, explicabo ducimus reprehenderit qui error doloribus consequatur. Lorem, ips um dolor sit amet consectetur adipisicing elit. Dignissimos dolorem culpa tempora dolorum quasi iure quas beatae minus aut mollitia assumenda, eos explicabo libero. Vitae culpa, amet possimus totam sapiente animi iusto earum odio minus pariatur, beatae ut, doloribus quasi.",
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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    population: "População",
    textPop:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    comunity: "Comunidade Portuguesa",
    textComunity:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi. Quas consectetur dolorum accusantium similique quaerat vitae, iure a, excepturi nihil alias obcaecati iste itaque dolores maiores voluptatem tempora quam. Impedit illo accusamus architecto neque minima, autem quae modi dolor rerum at quo nisi aut ea tempore eligendi obcaecati corrupti esse magnam! Exercitationem, ullam ducimus id sint quod expedita cum ab. Incidunt exercitationem veritatis doloribus libero esse quisquam alias consectetur modi voluptate eligendi illum ipsum, nemo nostrum vero nesciunt, quidem perferendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi placeat sapiente voluptatum saepe, explicabo ducimus reprehenderit qui error doloribus consequatur. Lorem, ips um dolor sit amet consectetur adipisicing elit. Dignissimos dolorem culpa tempora dolorum quasi iure quas beatae minus aut mollitia assumenda, eos explicabo libero. Vitae culpa, amet possimus totam sapiente animi iusto earum odio minus pariatur, beatae ut, doloribus quasi.",
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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    population: "População",
    textPop:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    comunity: "Comunidade Portuguesa",
    textComunity:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi. Quas consectetur dolorum accusantium similique quaerat vitae, iure a, excepturi nihil alias obcaecati iste itaque dolores maiores voluptatem tempora quam. Impedit illo accusamus architecto neque minima, autem quae modi dolor rerum at quo nisi aut ea tempore eligendi obcaecati corrupti esse magnam! Exercitationem, ullam ducimus id sint quod expedita cum ab. Incidunt exercitationem veritatis doloribus libero esse quisquam alias consectetur modi voluptate eligendi illum ipsum, nemo nostrum vero nesciunt, quidem perferendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi placeat sapiente voluptatum saepe, explicabo ducimus reprehenderit qui error doloribus consequatur. Lorem, ips um dolor sit amet consectetur adipisicing elit. Dignissimos dolorem culpa tempora dolorum quasi iure quas beatae minus aut mollitia assumenda, eos explicabo libero. Vitae culpa, amet possimus totam sapiente animi iusto earum odio minus pariatur, beatae ut, doloribus quasi.",
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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    population: "População",
    textPop:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    comunity: "Comunidade Portuguesa",
    textComunity:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi. Quas consectetur dolorum accusantium similique quaerat vitae, iure a, excepturi nihil alias obcaecati iste itaque dolores maiores voluptatem tempora quam. Impedit illo accusamus architecto neque minima, autem quae modi dolor rerum at quo nisi aut ea tempore eligendi obcaecati corrupti esse magnam! Exercitationem, ullam ducimus id sint quod expedita cum ab. Incidunt exercitationem veritatis doloribus libero esse quisquam alias consectetur modi voluptate eligendi illum ipsum, nemo nostrum vero nesciunt, quidem perferendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi placeat sapiente voluptatum saepe, explicabo ducimus reprehenderit qui error doloribus consequatur. Lorem, ips um dolor sit amet consectetur adipisicing elit. Dignissimos dolorem culpa tempora dolorum quasi iure quas beatae minus aut mollitia assumenda, eos explicabo libero. Vitae culpa, amet possimus totam sapiente animi iusto earum odio minus pariatur, beatae ut, doloribus quasi.",
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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    population: "População",
    textPop:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    comunity: "Comunidade Portuguesa",
    textComunity:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo. Ad, eligendi. Quas consectetur dolorum accusantium similique quaerat vitae, iure a, excepturi nihil alias obcaecati iste itaque dolores maiores voluptatem tempora quam. Impedit illo accusamus architecto neque minima, autem quae modi dolor rerum at quo nisi aut ea tempore eligendi obcaecati corrupti esse magnam! Exercitationem, ullam ducimus id sint quod expedita cum ab. Incidunt exercitationem veritatis doloribus libero esse quisquam alias consectetur modi voluptate eligendi illum ipsum, nemo nostrum vero nesciunt, quidem perferendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi placeat sapiente voluptatum saepe, explicabo ducimus reprehenderit qui error doloribus consequatur. Lorem, ips um dolor sit amet consectetur adipisicing elit. Dignissimos dolorem culpa tempora dolorum quasi iure quas beatae minus aut mollitia assumenda, eos explicabo libero. Vitae culpa, amet possimus totam sapiente animi iusto earum odio minus pariatur, beatae ut, doloribus quasi.",
    basico: [
      { name: "Bremen", slug: "bremen", coords: [53.0793, 8.8017] },
      { name: "Bremerhaven", slug: "bremerhaven", coords: [53.5396, 8.5809] },
    ],
    superior: [],
  },
];

export default states;

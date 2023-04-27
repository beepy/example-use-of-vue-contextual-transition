type Author = {
  slug: string;
  title: string; // name
  content: string; // bio
  img: string;
};

export type Post = {
  slug: string;
  title: string;
  content: string;
  color:
    | 'gray'
    | 'red'
    | 'pink'
    | 'grape'
    | 'violet'
    | 'indigo'
    | 'blue'
    | 'cyan'
    | 'teal'
    | 'green'
    | 'lime'
    | 'yellow'
    | 'orange';
  authorSlug: string;
  author?: Author;
  thumbnailUrl: string;
  headerUrl: string;
};

export const authors: Author[] = [
  {
    slug: 'amanda-brown',
    title: 'Amanda Brown',
    content:
      '<p>Lorem ipsum dolor sit amet labore curabitur duis. Congue praesent adipiscing tellus in bibendum tempus urna et nibh ac eiusmod morbi facilisis. Dui porttitor convallis volutpat et eros platea fringilla urna lacinia nisi magna morbi tellus risus. Odio nunc pharetra gravida neque tortor justo sagittis. Vel integer nec quam venenatis magna erat aliquam ultricies justo ut purus do suspendisse.</p>',
    img: '/sample-09-woman-sewing-machine-pexels-andrea-piacquadio-3852974-thumbnail.jpg'
  },
  {
    slug: 'marcus-carter',
    title: 'Marcus Carter',
    content:
      '<p>Lorem ipsum dolor sit amet tincidunt aenean facilisis. Tempus fringilla erat tempor curabitur eget fames facilisi duis. Scelerisque consequat donec erat scelerisque hendrerit dolore libero iaculis suspendisse viverra lobortis venenatis dictum lectus. Eiusmod proin nisi a eros rhoncus lacinia volutpat at lacinia feugiat facilisi consectetur pretium. Dictumst sodales venenatis auctor praesent donec hendrerit nunc phasellus vitae at congue hac.</p>',
    img: '/sample-08-man-open-mouth-pexels-andrea-piacquadio-3965232-thumbnail.jpg'
  },
  {
    slug: 'olivia-lee',
    title: 'Olivia Lee',
    content:
      '<p>Lorem ipsum dolor sit amet labore curabitur duis. Congue praesent adipiscing tellus in bibendum tempus urna et nibh ac eiusmod morbi facilisis. Dui porttitor convallis volutpat et eros platea fringilla urna lacinia nisi magna morbi tellus risus. Odio nunc pharetra gravida neque tortor justo sagittis. Vel integer nec quam venenatis magna erat aliquam ultricies justo ut purus do suspendisse.</p>',
    img: '/sample-11-woman-green-hair-pexels-michael-burrows-7147862-thumbnail.jpg'
  }
];
export const posts: Post[] = [
  {
    slug: 'post-1',
    title: 'Lorem Ipsum Dolor Sit Amet',
    content:
      '<p>Nisi deserunt exercitation elit officia labore adipisicing. Ex ea culpa in ullamco eu laboris Lorem sit magna quis officia. Excepteur dolor ex eiusmod pariatur aliqua veniam enim excepteur nulla laborum qui. Reprehenderit cupidatat magna incididunt sunt in. Ipsum exercitation minim aliquip dolor voluptate occaecat culpa magna dolor exercitation aliquip laboris excepteur.</p>\n<p>Irure ex nostrud eiusmod et do incididunt proident excepteur sit eiusmod. Minim tempor veniam proident commodo officia aute enim cupidatat elit reprehenderit quis voluptate officia. Sunt nostrud nulla deserunt officia. Amet nisi do sit duis sint ex quis. Ex ut voluptate ea laborum amet ut ea esse dolore laboris aute qui reprehenderit.</p>',
    color: 'gray',
    authorSlug: 'amanda-brown',
    thumbnailUrl: '/sample-01-carrots-pexels-pixabay-54082-thumbnail.jpg',
    headerUrl: '/sample-01-carrots-pexels-pixabay-54082-header.jpg'
  },
  {
    slug: 'post-2',
    title: 'Consectetur Adipiscing Elit',
    content:
      '<p>Duis nisi ex deserunt minim ea excepteur ut proident aliquip. Enim do Lorem anim ut officia Lorem cupidatat fugiat aliqua commodo cillum fugiat. Ut dolor sint et proident voluptate. Sint adipisicing consectetur duis adipisicing. Magna sint fugiat magna magna.</p>\n<p>Aliqua nisi ullamco adipisicing duis sunt commodo voluptate pariatur adipisicing do labore nostrud deserunt. Sit nulla labore enim dolor. Quis ad cillum aliqua consequat labore anim anim do anim culpa proident. Proident tempor labore irure esse reprehenderit ex. Do nisi enim pariatur nisi. Dolore commodo excepteur et occaecat excepteur do exercitation exercitation aliquip nulla cillum.</p>',
    color: 'red',
    authorSlug: 'marcus-carter',
    thumbnailUrl: '/sample-02-corn-pexels-adonyi-gabor-1414642-thumbnail.jpg',
    headerUrl: '/sample-02-corn-pexels-adonyi-gabor-1414642-header.jpg'
  },
  {
    slug: 'post-3',
    title: 'Vestibulum Vitae Lacus At Leo',
    content:
      '<p>Commodo labore ad deserunt et eiusmod elit fugiat voluptate. Aliqua et aliquip nulla qui irure nisi amet est eu mollit excepteur in. Sunt occaecat officia consequat aliquip commodo incididunt. Do exercitation irure proident est culpa ullamco sunt. Occaecat culpa dolor laboris nostrud. Ea laboris adipisicing ex minim esse in non anim aliquip reprehenderit reprehenderit.</p>\n<p>Consequat occaecat sint dolor sunt ad enim anim mollit sunt. Incididunt consequat mollit pariatur sint sint. Ut ut aute ex sit.</p>',
    color: 'pink',
    authorSlug: 'marcus-carter',
    thumbnailUrl:
      '/sample-03-garlic-pexels-kevin-bidwell-3689846-thumbnail.jpg',
    headerUrl: '/sample-03-garlic-pexels-kevin-bidwell-3689846-header.jpg'
  },
  {
    slug: 'post-4',
    title: 'Sed Quis Nunc Eget Nisl',
    content:
      '<p>Excepteur tempor amet excepteur cillum sunt ullamco eiusmod nisi amet non non fugiat aliqua adipisicing. Reprehenderit non sunt do nulla Lorem ut officia. Eiusmod elit eu minim aliquip irure et consequat eiusmod excepteur ea consectetur sunt. Et aliquip incididunt pariatur nostrud commodo irure quis in aute mollit consectetur laboris irure exercitation. Voluptate quis laborum Lorem duis ad cillum Lorem. Laboris qui enim sint labore deserunt cupidatat aliqua dolor. Id ex non est duis veniam velit occaecat aliqua anim.</p>\n<p>Duis excepteur nostrud qui cupidatat culpa incididunt culpa consectetur. Ullamco eu Lorem laborum eu proident. Aute mollit nulla qui exercitation aute eiusmod et est. Deserunt adipisicing qui fugiat dolore nostrud commodo officia veniam. Ipsum reprehenderit quis anim anim aliqua deserunt cupidatat ut. Proident nisi duis minim veniam et labore sint duis excepteur.</p>',
    color: 'grape',
    authorSlug: 'amanda-brown',
    thumbnailUrl:
      '/sample-04-basil-and-grape-tomatoes-pexels-pixabay-248420-thumbnail.jpg',
    headerUrl:
      '/sample-04-basil-and-grape-tomatoes-pexels-pixabay-248420-header.jpg'
  },
  {
    slug: 'post-5',
    title: 'Etiam Id Diam In Magna',
    content:
      '<p>Cupidatat pariatur reprehenderit ut mollit anim officia id elit. Mollit irure et exercitation officia eu. Culpa laborum qui incididunt commodo est amet do esse. Exercitation enim ea occaecat anim. Consequat pariatur laboris ipsum ex tempor voluptate elit laborum anim duis mollit reprehenderit duis amet.</p>\n<p>Pariatur magna anim laborum enim tempor. Ex do qui ullamco non amet minim irure ullamco. Officia veniam ipsum in excepteur deserunt officia. Deserunt ad do consequat irure fugiat adipisicing.</p>',
    color: 'violet',
    authorSlug: 'olivia-lee',
    thumbnailUrl: '/sample-05-peas-pexels-pixabay-255469-thumbnail.jpg',
    headerUrl: '/sample-05-peas-pexels-pixabay-255469-header.jpg'
  },
  {
    slug: 'post-6',
    title: 'Nulla Tempor Est Eu Nibh',
    content:
      '<p>Dolore non exercitation ad nisi amet et Lorem. Culpa laborum do elit aute. Exercitation commodo eiusmod pariatur nulla ullamco fugiat magna in duis sit voluptate commodo proident proident.</p>\n<p>Irure non labore aute consectetur proident id adipisicing non minim voluptate ex incididunt. Mollit esse et do minim cupidatat eiusmod ullamco duis officia. Nostrud sint eu Lorem elit voluptate quis quis. Ad commodo excepteur quis enim elit minim non cupidatat reprehenderit aute dolor tempor excepteur sint. Nulla officia consectetur duis est laborum enim mollit.</p>',
    color: 'indigo',
    authorSlug: 'olivia-lee',
    thumbnailUrl:
      '/sample-06-lettuce-pexels-nastyasensei-1199562-thumbnail.jpg',
    headerUrl: '/sample-06-lettuce-pexels-nastyasensei-1199562-header.jpg'
  },
  {
    slug: 'post-7',
    title: 'Quisque Egestas Nunc In Arcu',
    content:
      '<p>Elit cillum excepteur in deserunt sit deserunt Lorem adipisicing. Dolore eiusmod mollit nisi cupidatat. Occaecat anim Lorem deserunt dolore quis ut elit ad proident duis nostrud.</p>\n<p>Aliquip fugiat ad velit velit enim adipisicing cupidatat nulla aliqua occaecat cillum in. Culpa culpa voluptate nostrud duis aliquip officia. Aliquip magna amet ut ipsum mollit velit.</p>',
    color: 'blue',
    authorSlug: 'amanda-brown',
    thumbnailUrl:
      '/sample-07-ocean-above-pexels-muffin-creatives-1646311-thumbnail.jpg',
    headerUrl:
      '/sample-07-ocean-above-pexels-muffin-creatives-1646311-header.jpg'
  },
  {
    slug: 'post-8',
    title: 'Praesent Velit Orci, Mollis Nec',
    content:
      '<p>Labore et voluptate nulla occaecat elit enim eu velit in laborum commodo dolor ad. Reprehenderit eu amet minim dolor pariatur velit. Irure ad nulla enim mollit veniam excepteur ipsum.</p>\n<p>Nulla aliquip laborum consectetur cillum aliquip labore. Et fugiat aute anim officia minim reprehenderit laborum tempor veniam laboris magna id. Aliquip tempor proident est elit nostrud magna dolor voluptate proident esse. Adipisicing officia commodo labore aliqua eu excepteur minim. Non velit minim ipsum ipsum deserunt consectetur.</p>',
    color: 'cyan',
    authorSlug: 'marcus-carter',
    thumbnailUrl:
      '/sample-10-laptop-pexels-junior-teixeira-2047905-thumbnail.jpg',
    headerUrl: '/sample-10-laptop-pexels-junior-teixeira-2047905-header.jpg'
  },
  {
    slug: 'post-9',
    title: 'Aenean Lacinia Nisi Ut Dolor',
    content:
      '<p>Labore et culpa ut sunt voluptate duis adipisicing laborum pariatur laborum sit labore anim fugiat. Nulla voluptate commodo Lorem sint quis nostrud et sint reprehenderit veniam nisi pariatur laborum quis. Incididunt culpa quis irure id elit anim. Veniam ut id eu in laboris non officia velit adipisicing amet deserunt reprehenderit pariatur. Cillum dolor exercitation deserunt nostrud esse velit sint cupidatat nisi qui occaecat excepteur nulla quis. Et in anim tempor consequat magna laboris est aliqua culpa proident mollit laboris consectetur.</p>\n<p>Incididunt ex sint ad velit nisi dolor amet. Laboris labore aliquip irure id adipisicing aliquip. Velit cupidatat Lorem incididunt ex nisi Lorem irure duis elit commodo occaecat.</p>',
    color: 'teal',
    authorSlug: 'olivia-lee',
    thumbnailUrl:
      '/sample-12-greenhouse-pexels-cottonbro-studio-5561356-thumbnail.jpg',
    headerUrl:
      '/sample-12-greenhouse-pexels-cottonbro-studio-5561356-header.jpg'
  },
  {
    slug: 'post-10',
    title: 'Fusce Eget Mauris In Erat',
    content:
      '<p>Do dolor ipsum occaecat incididunt deserunt dolor dolor non cillum velit. Ad eu amet minim est minim qui ipsum ullamco Lorem. Laborum velit elit et ex culpa Lorem proident.</p>',
    color: 'green',
    authorSlug: 'amanda-brown',
    thumbnailUrl:
      '/sample-13-woman-camera-pexels-andrea-piacquadio-3812979-thumbnail.jpg',
    headerUrl:
      '/sample-13-woman-camera-pexels-andrea-piacquadio-3812979-header.jpg'
  },
  {
    slug: 'post-11',
    title: 'Curabitur Sollicitudin Neque Ac',
    content:
      '<p>Fugiat occaecat do minim ullamco labore laboris. Pariatur est amet ullamco excepteur. Ipsum voluptate proident quis cillum cillum et ut est eu anim proident sunt. Sit labore mollit in tempor proident ex reprehenderit ullamco veniam fugiat tempor aliqua.</p>\n<p>Cupidatat consequat pariatur ex enim ex aliqua reprehenderit incididunt quis magna aliqua. Labore cillum commodo veniam velit laboris deserunt enim Lorem eiusmod irure. Aliqua nisi est voluptate in ut ea pariatur ex. Eu id ullamco enim in cupidatat est elit sit Lorem ad irure excepteur velit. Aliquip et do quis tempor ad laborum.</p>',
    color: 'lime',
    authorSlug: 'marcus-carter',
    thumbnailUrl:
      '/sample-15-ferns-pexels-gilberto-olimpio-3686307-thumbnail.jpg',
    headerUrl: '/sample-15-ferns-pexels-gilberto-olimpio-3686307-header.jpg'
  },
  {
    slug: 'post-12',
    title: 'Donec Velit Nisl, Luctus Id',
    content:
      '<p>Irure elit minim esse nostrud esse sunt ex sunt irure officia. Sunt aute eiusmod aliquip mollit dolor sint aliqua quis irure dolor nostrud anim et. Aute id cupidatat ex fugiat sunt voluptate officia in ipsum duis Lorem sint velit ad. Laborum magna cupidatat mollit et. Ipsum est aliquip id officia irure irure consequat dolor pariatur. Consequat elit culpa consectetur aute do.</p>\n<p>Mollit et Lorem proident exercitation enim Lorem est eiusmod qui amet esse qui. Do amet culpa quis ea aliquip dolore sit. Reprehenderit sint tempor nulla deserunt exercitation. Eiusmod do aute amet qui deserunt.</p>',
    color: 'yellow',
    authorSlug: 'olivia-lee',
    thumbnailUrl:
      '/sample-16-succulant-pexels-toni-cuenca-572490-thumbnail.jpg',
    headerUrl: '/sample-16-succulant-pexels-toni-cuenca-572490-header.jpg'
  },
  {
    slug: 'post-13',
    title: 'Phasellus Ut Massa Quis Magna',
    content:
      '<p>Deserunt non commodo incididunt nisi eu id ea adipisicing dolore. Ea proident reprehenderit voluptate qui veniam excepteur deserunt adipisicing eu consequat aute nostrud duis ipsum. Voluptate tempor occaecat commodo eiusmod eu irure consequat nulla. Proident anim reprehenderit aliqua minim incididunt esse ut nulla consectetur dolor.</p>\n<p>Commodo laboris labore ut esse minim non officia deserunt excepteur duis do. Esse ad fugiat do reprehenderit sunt esse irure. Reprehenderit minim aliquip id nostrud proident adipisicing anim eu laborum pariatur esse magna. Pariatur labore laborum duis dolor aute dolore et.</p>',
    color: 'orange',
    authorSlug: 'amanda-brown',
    thumbnailUrl:
      '/sample-17-ivy-pexels-photomix-company-101841-thumbnail.jpg',
    headerUrl: '/sample-17-ivy-pexels-photomix-company-101841-header.jpg'
  }
];

const randomInput = {
  adjective: [
    'attractive',
    'bald',
    'beautiful',
    'chubby',
    'clean',
    'dazzling',
    'drab',
    'elegant',
    'fancy',
    'fit',
    'flabby',
    'glamorous',
    'gorgeous',
    'handsome',
    'long',
    'magnificent',
    'muscular',
    'plain',
    'plump',
    'quaint',
    'scruffy',
    'shapely',
    'short',
    'skinny',
    'stocky',
    'ugly',
    'unkempt',
    'unsightly'
  ],
  noun: [
    'area',
    'book',
    'business',
    'case',
    'child',
    'company',
    'country',
    'day',
    'eye',
    'fact',
    'family',
    'government',
    'group',
    'hand',
    'home',
    'job',
    'life',
    'lot',
    'man',
    'money',
    'month',
    'mother',
    'Mr',
    'night',
    'number',
    'part',
    'people',
    'place',
    'point',
    'problem',
    'program',
    'question',
    'right',
    'room',
    'school',
    'state',
    'story',
    'student',
    'study',
    'system',
    'thing',
    'time',
    'water',
    'way',
    'week',
    'woman',
    'word',
    'work',
    'world',
    'year'
  ],
  pluralNoun: [
    'analyses',
    'statuses',
    'moose',
    'crises',
    'fishes',
    'appendixes',
    'sheep',
    'lives',
    'apparatuses',
    'deer',
    'oxen',
    'focuses',
    'bases',
    'platypuses',
    'cactuses',
    'analyses',
    'women',
    'equipment',
    'dice',
    'leaves',
    'lives',
    'phenomena',
    'staff',
    'geniuses',
    'radiuses',
    'staff',
    'alumni',
    'software',
    'data',
    'addenda',
    'viruses',
    'synopses',
    'mongooses',
    'formulas',
    'roofs',
    'phenomena',
    'businesses',
    'data',
    'chassis',
    'crises',
    'heroes',
    'axes'
  ],
  game: [
    'Chess',
    'Monopoly',
    'Scrabble',
    'Risk',
    'Settlers of Catan',
    'Clue',
    'Ticket to Rid',
    'Uno',
    'Battleship (2012)',
    'Apples to Apples',
    'Dominion',
    'Puerto Rico',
    'Yahtzee',
    'Trivial Pursuit',
    'Stratego',
    'Checkers',
    'Sorry!',
    'Agricola',
    'Carcassonne',
    'Pictionary',
    'Pandemic',
    'Connect Four',
    'Go',
    'Backgammon',
    'Arkham Horror',
    'Axis and Allies',
    'Power Grid',
    'The Game of Life',
    'Candyland',
    'A Game of Thrones',
    'Battlestar Galactica',
    'Cosmic Encounter',
    'Small World',
    'Twilight Struggle',
    'Trouble',
    'Tigris and Euphrates',
    '7 Wonders ',
    'Twilight Imperium',
    'Chinese Checkers',
    'Mastermind'
  ],
  verb_ing: [
    'opening',
    'pleasing',
    'printing',
    'riding',
    'running',
    'sitting',
    'smoking',
    'writing',
    'leaving',
    'changing',
    'cheering'
  ],
  plant: [
    'Adonis',
    'Alberta Spruce, Dwarf',
    'Almond',
    'Aloe Vera',
    'Alyssum',
    'Alyssum',
    'Ambassador Allium',
    'Angelina Stonecrop',
    'Apple Trees',
    'Arctic Beauty Kiwi',
    'Arborvitae',
    'Arborvitae',
    'Arrowwood Viburnum',
    'Ash Trees',
    'Aspen Trees',
    'Autumn Blaze Maple',
    'Autumn Clematis',
    'Autumn Joy Sedum',
    'Avens',
    'Azaleas',
    'Azalea',
    'Bachelor Buttons',
    'Bamboo Plants',
    'Baneberry',
    'Barberry',
    'Barrenwort',
    'Bayberry',
    'Beautyberry',
    'Bee Balm',
    'Beech Trees',
    'Bellflower',
    'Birch Trees',
    'Bird of Paradise',
    'Bitterroot',
    'Bittersweet',
    'Black-Eyed Susan',
    'Black Knight Delphinium',
    'Black Mondo Grass',
    'Black Shamrocks',
    'Bleeding Heart',
    'Bloodgood Japanese Maple',
    'Bloodroot',
    'Bluebeard Shrubs',
    'Bluebells',
    'Blue Chiffon Rose of Sharon',
    'Blue Fescue Grass',
    'Blue Hill Salvia',
    'Blue Princess Holly',
    'Blue Rug Juniper',
    'Blue Spruce',
    'Blue Star Juniper',
    'Boston Ivy',
    'Bottlebrush Plant',
    'Bougainvillea',
    'Boxwood',
    'Bugleweed',
    'Bugloss',
    'Bunchberry',
    'Burning Bush',
    'Butterbur',
    'Butterfly Bush',
    'Butterfly Bush',
    'Butterfly Bush',
    'Butterfly Weed'
  ],
  bodypart: ['arm', 'foot', 'head', 'ankle', 'leg', 'neck', 'wrist', 'toes'],
  place: [
    'Paris',
    'France',
    'Italy',
    'Venice',
    'Rome',
    'California',
    'Utah',
    'Costa Rica',
    'Peru'
  ],
  number: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59',
    '60',
    '61',
    '62',
    '63',
    '64',
    '65',
    '66',
    '67',
    '68',
    '69',
    '70',
    '71',
    '72',
    '73',
    '74',
    '75',
    '76',
    '77',
    '78',
    '79',
    '80',
    '81',
    '82',
    '83',
    '84',
    '85',
    '86',
    '87',
    '88',
    '89',
    '90',
    '91',
    '92',
    '93',
    '94',
    '95',
    '96',
    '97',
    '98',
    '99',
    '100'
  ]
};


window.FIXTURES = {};

FIXTURES.NODES = [
  {
    id: 1,
    title: 'What do you want?',
    pathIds: [1,2,3,4,5]
  },
  {
    id: 2,
    title: 'Do you want to cook it?',
    pathIds: [6,7]
  },
  {
    id: 3,
    title: 'Boozy or non-alcoholic?',
    pathIds: [8,9]
  },
  {
    id: 4,
    title: 'What kind of clothes?',
    pathIds: [10,11]
  },
  {
    id: 5,
    title: 'Which drug?',
    pathIds: [36,37,38]
  },
  {
    id: 6,
    title: 'Magic or Butler',
    pathIds: []
  },
  {
    id: 7,
    title: 'What kind of food?',
    pathIds: [13,14,15,16,17]
  },
  {
    id: 8,
    title: 'Organic?',
    pathIds: [18,19,17]
  },
  {
    id: 9,
    title: 'GrubHub or Seamless'
  },
  {
    id: 10,
    title: 'Do you have an iPhone?',
    pathIds: [20,21]
  },
  {
    id: 11,
    title: 'Bento'
  },
  {
    id: 12,
    title: 'Sorry, try Postmates'
  },
  {
    id: 13,
    title: 'Caviar or Postmates'
  },
  {
    id: 14,
    title: 'When do you want it?',
    pathIds: [22,23]
  },
  {
    id: 15,
    title: 'When is now?',
    pathIds: [24,25,26]
  },
  {
    id: 16,
    title: 'SpoonRocket or Sprig',
  },
  {
    id: 17,
    title: 'Munchery, Sprig, or SpoonRocket'
  },
  {
    id: 18,
    title: 'Sprig'
  },
  {
    id: 19,
    title: 'Google "meal delivery [insert diet type]"'
  },
  {
    id: 20,
    title: 'Green Chef'
  },
  {
    id: 21,
    title: 'Din, Blue Apron, Hello Fresh, or Plated',
  },
  {
    id: 22,
    title: 'How quickly do you want it?',
    pathIds: [27,28,29]
  },
  {
    id: 23,
    title: 'Instacart or Amazon Fresh'
  },
  {
    id: 24,
    title: 'Good Eggs or a local CSA'
  },
  {
    id: 25,
    title: 'Postmates'
  },
  {
    id: 26,
    title: 'When do you want it?',
    pathIds: [30,31]
  },
  {
    id: 27,
    title: 'Instacart or Google Express'
  },
  {
    id: 28,
    title: 'Minibar or Postmates'
  },
  {
    id: 29,
    title: 'Wash.io or Rinse'
  },
  {
    id: 30,
    title: 'When do you need them?',
    pathIds: [34,35]
  },
  {
    id: 31,
    title: 'Amazon Prime'
  },
  {
    id: 32,
    title: 'TaskRabbit'
  },
  {
    id: 33,
    title: 'Eaze'
  },
  {
    id: 34,
    title: 'QuiQui'
  },
  {
    id: 35,
    title: 'Grams, but I didn\'t tell you that'
  }
];

FIXTURES.PATHS = [
  {
    id: 1,
    title: 'Food',
    nodeId: 2
  },
  {
    id: 2,
    title: 'Drink',
    nodeId: 3
  },
  {
    id: 3,
    title: 'Clothes',
    nodeId: 4
  },
  {
    id: 4,
    title: 'Drugs',
    nodeId: 5
  },
  {
    id: 5,
    title: 'Other',
    nodeId: 6
  },
  {
    id: 6,
    title: 'Yes', // do you want to cook it?
    nodeId: 8
  },
  {
    id: 7,
    title: 'Hell no', // do you want to cook it?
    nodeId: 7
  },
  {
    id: 8,
    title: 'Non-alcoholic',
    nodeId: 22
  },
  {
    id: 9,
    title: 'Boozy',
    nodeId: 26
  },
  {
    id: 10,
    title: 'Your own clothes, clean',
    nodeId: 29
  },
  {
    id: 11,
    title: 'New Clothes',
    nodeId: 30
  },
  {
    id: 13,
    title: 'Standard takeout fare',
    nodeId: 9
  },
  {
    id: 14,
    title: 'Bento box',
    nodeId: 10
  },
  {
    id: 15,
    title: 'Restaurant',
    nodeId: 13
  },
  {
    id: 16,
    title: 'Prepared and freshly packaged',
    nodeId: 14
  },
  {
    id: 17,
    title: 'Grocery store',
    nodeId: 22
  },
  {
    id: 18,
    title: 'Yes', // Organic?
    nodeId: 20
  },
  {
    id: 19,
    title: 'Nah', // Organic?
    nodeId: 21
  },
  {
    id: 20,
    title: 'Yes',
    nodeId: 11
  },
  {
    id: 21,
    title: 'No',
    nodeId: 12
  },
  {
    id: 22,
    title: 'Now',
    nodeId: 15
  },
  {
    id: 23,
    title: 'Deliveredy Weeky',
    nodeId: 19
  },
  {
    id: 24,
    title: 'M-F lunch',
    nodeId: 16
  },
  {
    id: 25,
    title: 'M-F dinner',
    nodeId: 17
  },
  {
    id: 26,
    title: 'Weekend',
    nodeId: 18
  },
  {
    id: 27,
    title: 'Soon',
    nodeId: 23,
  },
  {
    id: 28,
    title: 'Weekly',
    nodeId: 24
  },
  {
    id: 29,
    title: 'Now',
    nodeId: 25
  },
  {
    id: 30,
    title: 'Soon', // boozy, when do you want it
    nodeId: 27
  },
  {
    id: 31,
    title: 'Now', // boozy, when do you want it
    nodeId: 28
  },
  {
    id: 34,
    title: '1-2 days',
    nodeId: 31
  },
  {
    id: 35,
    title: 'ASAP',
    nodeId: 32
  },
  {
    id: 36,
    title: 'Weed',
    nodeId: 33
  },
  {
    id: 37,
    title: 'Prescription',
    nodeId: 34
  },
  {
    id: 38,
    title: 'Uh, other',
    nodeId: 35
  }
];

FIXTURES.BACKGROUND_COLORS = [
  '#00bcd4',
  '#ff9800',
  '#4caf50',
  '#3f51b5',
  '#f44336'
]
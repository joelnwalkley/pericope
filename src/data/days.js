//Will need to move to db to get number of links
//Bible abbreviations: https://www.logos.com/bible-book-abbreviations (omit the '.', using most common)
//TODO: add alternate names or additional search to handle when Propers are also called Ordinary

const days = [
  {
    name: 'First Sunday of Advent',
    id: 'Advent1B',
    texts: ['Isa 64:1-9', 'Ps 80:1-7, 17-19', '1 Cor 1:3-9', 'Mark 13:24-37'],
    years: ['B'],
    season: 'advent',
    color: 'blue',
  },
  {
    name: 'Second Sunday of Advent',
    id: 'Advent2B',
    texts: ['Isa 40:1-11', 'Ps 85:1-2, 8-13', '2 Pet 3:8-15a', 'Mark 1:1-8'],
    years: ['B'],
    season: 'advent',
    color: 'blue',
  },
  {
    name: 'Epiphany of the Lord',
    id: 'Epiphany',
    texts: ['Isa 60:1-6', 'Ps 72:1-7, 10-14', 'Eph 3:1-12', 'Matt 2:1-12'],
    years: ['A', 'B', 'C'],
    season: 'epiphany',
    color: 'white',
  },
  {
    name: 'First Sunday in Lent',
    id: 'Lent1B',
    texts: ['Gen 9:8-17', 'Ps 25:1-10', '1 Pet 3:18-22', 'Mark 1:9-15'],
    years: ['B'],
    season: 'lent',
    color: 'purple',
  },
  {
    name: 'Second Sunday in Lent',
    id: 'Lent2B',
    texts: [
      'Gen 17:1-7, 15-16',
      'Ps 22:23-31',
      'Rom 4:13-25',
      'Mark 8:31-38',
      'Mark 9:2-9',
    ],
    years: ['B'],
    season: 'lent',
    color: 'purple',
  },
  {
    name: 'Third Sunday in Lent',
    id: 'Lent3B',
    texts: ['Ex 20:1-17', 'Ps 19', '1 Cor 1:18-25', 'John 2:13-22'],
    years: ['B'],
    season: 'lent',
    color: 'purple',
  },
  {
    name: 'Fourth Sunday in Lent',
    id: 'Lent4B',
    texts: ['Num 21:4-9', 'Ps 107:1-3, 17-22', 'Eph 2:1-10', 'John 3:14-21'],
    years: ['B'],
    season: 'lent',
    color: 'purple',
  },
  {
    name: 'Fifth Sunday in Lent',
    id: 'Lent5B',
    texts: [
      'Jer 31:31-34',
      'Ps 51:1-12',
      'Ps 119:9-16',
      'Heb 5:5-10',
      'John 12:20-33',
    ],
    years: ['B'],
    season: 'lent',
    color: 'purple',
  },
  {
    name: 'Liturgy of the Palms',
    id: 'PalmsB',
    texts: ['Ps 118:1-2, 19-29', 'Mark 11:1-11', 'John 12:12-16'],
    years: ['B'],
    season: 'lent',
    color: 'red',
  },
  {
    name: 'Liturgy of the Passion',
    id: 'PassionB',
    texts: [
      'Isa 50:4-9a',
      'Ps 31:9-16',
      'Phil 2:5-11',
      'Mark 14:1-15:47',
      'Mark 15:1-39, (40-47)',
    ],
    years: ['B'],
    season: 'lent',
    color: 'red',
  },
  {
    name: 'Maundy Thursday',
    id: 'MaundyThursday',
    texts: [
      'Ex 12:1-4, (5-10), 11-14',
      'Ps 116:1-2, 12-19',
      '1 Cor 11:23-26',
      'John 13:1-17, 31b-35',
    ],
    years: ['A', 'B', 'C'],
    season: 'lent',
    color: 'white',
  },
  {
    name: 'Good Friday',
    id: 'GoodFriday',
    texts: [
      'Isa 52:13-53:12',
      'Ps 22',
      'Heb 10:16-25',
      'Heb 4:14-26, 5:7-9',
      'John 18:1-19:42',
    ],
    years: ['A', 'B', 'C'],
    season: 'holyweek',
    color: 'black',
  },
  {
    name: 'Easter Vigil',
    id: 'Vigil',
    texts: [
      'Gen 1:1-2:4a',
      'Ps 136:1-9, 23-26',
      'Gen 7:1-5, 11-18, 8:6-18, 9:8-13',
      'Ps 46',
      'Gen 22:1-18',
      'Ps 16',
      'Ex 14:10-31, 15:20-21',
      'Ex 15:1b-13, 17-18',
      'Isa 55:1-11',
      'Isa 12:2-6',
      'Bar 3:9-15, 3:32-4:4',
      'Prov 8:1-8, 19-21, 9:4b-6',
      'Ps 19',
      'Ezek 36:24-28',
      'Ps 42',
      'Ps 43',
      'Ezek 37:1-14',
      'Ps 143',
      'Zeph 3:14-20',
      'Ps 98',
      'Rom 6:3-11',
      'Ps 114',
      'Mark 16:1-8'
    ],
    years: ['B'],
    season: 'easter',
    color: 'white',
  },
  {
    name: 'Resurrection of the Lord - Easter',
    id: 'Easter',
    texts: [
      'Acts 10:34-43',
      'Isa 25:6-9',
      'Ps 118:1-2, 14-24',
      '1 Cor 15:1-11',
      'John 20:1-18',
      'Mark 16:1-8',
    ],
    years: ['B'],
    season: 'easter',
    color: 'white',
  },
  {
    name: 'Easter Evening',
    id: 'EasterEve',
    texts: [
      'Acts 10:34-43',
      'Isa 25:6-9',
      'Ps 114',
      '1 Cor 5:6b-8',
      'Luke 24:13-49',
    ],
    years: ['B'],
    season: 'easter',
    color: 'white',
  },
  {
    name: 'Second Sunday of Easter',
    id: 'Easter2B',
    texts: ['Acts 4:32-35', 'Ps 133', '1 John 1:1-2:2', 'John 20:19-31'],
    years: ['B'],
    season: 'easter',
    color: 'white',
  },
  {
    name: 'Third Sunday of Easter',
    id: 'Easter3B',
    texts: ['Acts 3:12-19', 'Ps 4', '1 John 3:1-7', 'Luke 24:36b-48'],
    years: ['B'],
    season: 'easter',
    color: 'white',
  },
  {
    name: 'Fourth Sunday of Easter',
    id: 'Easter4B',
    texts: ['Acts 4:5-12', 'Ps 23', '1 John 3:16-24', 'John 10:11-18'],
    years: ['B'],
    season: 'easter',
    color: 'white',
  },
  {
    name: 'Fifth Sunday of Easter',
    id: 'Easter5B',
    texts: ['Acts 8:26-40', 'Ps 22:25-31', '1 John 4:7-21', 'John 15:1-8'],
    years: ['B'],
    season: 'easter',
    color: 'white',
  },
  {
    name: 'Sixth Sunday of Easter',
    id: 'Easter6B',
    texts: ['Acts 10:44-48', 'Ps 98', '1 John 5:1-6', 'John 15:9-17'],
    years: ['B'],
    season: 'easter',
    color: 'white',
  },
  {
    name: 'Ascension of the Lord',
    id: 'Ascension',
    texts: ['Acts 1:1-11', 'Ps 47','Ps 93','Eph 1:15-23', 'Luke 24:44-53'],
    years: ['B'],
    season: 'easter',
    color: 'white',
  },
  {
    name: 'Seventh Sunday of Easter',
    id: 'Easter7B',
    texts: ['Acts 1:15-27, 21-26', 'Ps 1', '1 John 5:9-13', 'John 17:6-19'],
    years: ['B'],
    season: 'easter',
    color: 'white',
  },
  {
    name: 'Day of Pentecost',
    id: 'PentecostB',
    texts: [
      'Acts 2:1-21',
      'Ezek 37:1-14',
      'Ps 104:24-34, 35b',
      'Rom 8:22-27',
      'John 15:26-27, 16:4b-15',
    ],
    years: ['B'],
    season: 'pentecost',
    color: 'red',
  },
  {
    name: 'Trinity Sunday',
    id: 'TrinityB',
    texts: ['Isa 6:1-8', 'Ps 29', 'Rom 8:12-17', 'John 3:1-17'],
    years: ['B'],
    season: 'ordinary',
    color: 'white',
  },
  {
    name: 'Second Sunday after Pentecost',
    id: 'Proper5B',
    texts: [
      '1 Sam 8:4-11, (12-15), 16-20, (11:14-15)',
      'Ps 138',
      'Gen 3:8-15',
      'Ps 130',
      '2 Cor 4:13-5:1',
      'Mark 3:20-35',
    ],
    years: ['B'],
    season: 'ordinary',
    color: 'green',
  },
  //NARRATIVE LECTIONARY YEAR 3
  {
    name: 'Rich Man and Lazarus',
    id: 'NL334',
    texts: ['Luke 16:19-31','Ps 41:1-3'],
    years: ['3'],
    season: 'lent',
    color: 'purple'
  },
  {
    name: 'Zacchaeus',
    id: 'NL335',
    texts: ['Luke 18:31-19:10','Ps 84:1-4,10-12'],
    years: ['3'],
    season: 'lent',
    color: 'purple'
  },
  {
    name: 'Triumphal Entry',
    id: 'NL336',
    texts: ['Luke 19:29-44','Ps 118:19-23'],
    years: ['3'],
    season: 'lent',
    color: 'red'
  },
  {
    name: 'Last Supper',
    id: 'NL337',
    texts: ['Luke 22:1-27','Ps 34:8-10'],
    years: ['3'],
    season: 'lent',
    color: 'red'
  },
  {
    name: 'Crucifixion',
    id: 'NL338',
    texts: ['Luke 23:32-47','Ps 31:5-13'],
    years: ['3'],
    season: 'lent',
    color: 'black'
  },
  {
    name: 'Resurrection',
    id: 'NL339',
    texts: ['Luke 24:1-12','Ps 118:17,24-24'],
    years: ['3'],
    season: 'easter',
    color: 'yellow'
  },
  {
    name: 'Emmaus Road',
    id: 'NL340',
    texts: ['Luke 24:13-35','Ps 30'],
    years: ['3'],
    season: 'easter',
    color: 'yellow'
  },
  {
    name: "Stephen's Witness",
    id: 'NL341',
    texts: ['Acts 6:1-7:2a, 44-60','Luke 23:33-34a, 46'],
    years: ['3'],
    season: 'easter',
    color: 'yellow'
  },
  {
    name: 'Ethiopian Eunuch Baptized',
    id: 'NL342',
    texts: ['Acts 8:26-39','Luke 24:44-47'],
    years: ['3'],
    season: 'easter',
    color: 'yellow'
  },
  {
    name: 'Council at Jerusalem',
    id: 'NL343',
    texts: ['Acts 15:1-18','Luke 2:29-32'],
    years: ['3'],
    season: 'easter',
    color: 'yellow'
  },
  {
    name: 'Living by Faith',
    id: 'NL344',
    texts: ['Gal 1:13-17, 2:11-21','Luke 18:9-14'],
    years: ['3'],
    season: 'easter',
    color: 'yellow'
  },
  {
    name: 'One in Christ',
    id: 'NL345',
    texts: ['Gal 3:1-9, 23-29','Luke 1:68-79'],
    years: ['3'],
    season: 'easter',
    color: 'yellow'
  },
  {
    name: 'Pentecost',
    id: 'NL346',
    texts: ['Acts 2:1-4','Gal 4:1-7 (5:16-26)','Luke 11:11-13'],
    years: ['3'],
    season: 'pentecost',
    color: 'red'
  },
];

//create day and text options based on days.

const dayOptions = days.map((day) => ({
  key: day.id,
  text: `${day.name} (${day.years})`,
  value: day.id,
}));

const allTexts = [];
days.forEach((day) => {
  day.texts.forEach((text) => {
    allTexts.push(text);
  });
});

const uniqueTexts = [...new Set(allTexts)];
uniqueTexts.sort();

const readingOptions = uniqueTexts.map((reading) => ({
  key: reading,
  text: reading,
  value: reading,
}));

const dayTexts = (selectedDays=[]) => {
  let allSelectedDaysTexts = [];
  selectedDays.forEach(selectedDay => {
    const day = days.filter(day => day.id === selectedDay);
    allSelectedDaysTexts = [...allSelectedDaysTexts, ...day[0].texts];
  })
  return allSelectedDaysTexts;
}

export { days, dayOptions, readingOptions, dayTexts };

//sample data before committing to a model for the db.

const links = [
  {
    uid: '1',
    url:
      'https://www.workingpreacher.org/commentaries/revised-common-lectionary/second-sunday-in-lent-2/commentary-on-mark-831-38-5',
    title: 'Commentary on Mark 8:31-38',
    publisher: 'Working Preacher',
    days: ['Lent2B'],
    texts: ['Mark 8:31-38'],
    votes: 1,
    submit: {
      date: new Date(),
      email: 'joelnwalkley@gmail.com',
      displayName: 'Joel N. Walkley',
      userID: 'uid',
    },
    review: {
      //empty for not yet reviewed
      date: '',
      email: '',
      displayName: '',
      userID: '',
      approved: false, //false while pending approval
      denialReasons: [],
    },
  },
  {
    uid: '2',
    url:
      'https://www.workingpreacher.org/commentaries/revised-common-lectionary/second-sunday-in-lent-2/commentary-on-genesis-171-7-15-16-5',
    title: 'Commentary on Genesis 17:1-7, 15-16',
    publisher: 'Working Preacher',
    days: ['Lent2B'],
    texts: ['Gen 17:1-7, 15-16'],
    dateAdded: new Date(),
    addedByEmail: 'joelnwalkley@gmail.com',
    approved: true,
    votes: 27,
    submit: {
      date: new Date(),
      email: 'joelnwalkley@gmail.com',
      userID: 'uid',
    },
    review: {
      //empty for not yet reviewed
      date: '',
      email: '',
      userID: '',
      approved: false, //false while pending approval
      denialReasons: [],
    },
  },
  {
    uid: '3',
    url: 'https://www.pulpitfiction.com/notes/lent2b',
    title: 'Lent 2B',
    publisher: 'Pulpit Fiction Podcast',
    days: ['Lent2B'],
    texts: [
      'Gen 17:1-7, 15-16',
      'Mark 8:31-38',
      'Ps 22:23-31',
      'Rom 4:13-25',
    ],
    dateAdded: new Date(),
    addedByEmail: 'joelnwalkley@gmail.com',
    approved: true,
    votes: 42,
    submit: {
      date: new Date(),
      email: 'joelnwalkley@gmail.com',
      userID: 'uid',
    },
    review: {
      //empty for not yet reviewed
      date: '',
      email: '',
      userID: '',
      approved: false, //false while pending approval
      denialReasons: [],
    },
  },
];

export { links };

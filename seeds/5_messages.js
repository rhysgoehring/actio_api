exports.seed = function(knex) {
  return knex('messages').del().then(function() {
    return knex('messages').insert([
      {
        id: 1,
        title: "I'll bring beer",
        body: "What should I bring?",
        event_id: 1
      }, {
        id: 2,
        title: 'Come swim with me!',
        body: "Hope everyone can come swim with me. Don't forget to bring a towel.",
        event_id: 1
      },
      {
        id: 3,
        title: "Please don't come if you're a beginner.",
        body: "Sorry to exclude people, but we're gunna be climbing real hard!",
        event_id: 2
      },
      {
        id: 4,
        title: "I've never golfed before",
        body: "Do I have to wear funny clothes and a hat?",
        event_id: 3
      },
      {
        id: 5,
        title: 'Just bought a new 9 iron!',
        body: "Yay!",
        event_id: 3
      },
      {
        id: 6,
        title: 'Sam I am',
        body: "I hope this is a good time.",
        event_id: 4
      },
      {
        id: 7,
        title: 'Maybe we can go to trivia later.',
        body: "That would be awesome.",
        event_id: 6
      }
    ]);
  }).then(() => {
    return knex.raw("select setval('messages_id_seq', (select max(id) from messages));")
  });
};

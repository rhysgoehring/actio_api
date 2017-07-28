exports.seed = function(knex) {
  return knex('messages').del().then(function() {
    return knex('messages').insert([
      {
        id: 1,
        title: "Rhys",
        body: "What should I bring?",
        event_id: 1
      }, {
        id: 2,
        title: 'Sam',
        body: "Hope everyone can come swim with me. Don't forget to bring a towel.",
        event_id: 1
      },
      {
        id: 3,
        title: "Rhys",
        body: "Sorry to exclude people, but we're gunna be climbing real hard!",
        event_id: 2
      },
      {
        id: 4,
        title: "Sam",
        body: "Do I have to wear funny clothes and a hat?",
        event_id: 3
      },
      {
        id: 5,
        title: 'Sean',
        body: "If you want!",
        event_id: 3
      },
      {
        id: 6,
        title: 'Sam',
        body: "I hope this is a good time. Should be a lot better than Sean's event.",
        event_id: 4
      },
      {
        id: 7,
        title: 'Rhys',
        body: "This should be a good time, see you there!",
        event_id: 6
      }
    ]);
  }).then(() => {
    return knex.raw("select setval('messages_id_seq', (select max(id) from messages));")
  });
};

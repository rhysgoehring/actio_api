exports.seed = function(knex) {
    return knex('events_users').del()
        .then(function() {
            return knex('events_users').insert([{
                    id: 1,
                    event_id: 1,
                    user_id: 1
                }, {
                    id: 2,
                    event_id: 1,
                    user_id: 2
                }, {
                    id: 3,
                    event_id: 2,
                    user_id: 1
                }, {
                    id: 4,
                    event_id: 5,
                    user_id: 3
                }, {
                    id: 5,
                    event_id: 3,
                    user_id: 1
                }, {
                    id: 6,
                    event_id: 4,
                    user_id: 2
                },
                {
                    id: 7,
                    event_id: 5,
                    user_id: 3
                },
                {
                    id: 8,
                    event_id: 6,
                    user_id: 2
                },
                {
                    id: 9,
                    event_id: 7,
                    user_id: 1
                },
                {
                    id: 10,
                    event_id: 10,
                    user_id: 3
                },
                {
                    id: 11,
                    event_id: 11,
                    user_id: 1
                },
                {
                    id: 12,
                    event_id: 12,
                    user_id: 1
                }
            ]);
        }).then(() => {
            return knex.raw("select setval('events_users_id_seq', (select max(id) from events_users));")
        });
};

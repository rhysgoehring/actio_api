
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1,
        title: 'basketball',
        icon: '.../public/images/basketball.jpg'
        },
        {id: 2,
        title: 'hiking',
        icon: '.../public/images/hiker.png'
        },
        {id: 3,
        title: 'swimming',
        icon: '.../public/images/swimming.png'
        },
        {id: 4,
        title: 'climbing',
        icon: '.../public/images/climbing.png'
        },
        {id: 5,
        title: 'soccer',
        icon: '.../public/images/soccer.png'
        },
        {id: 6,
        title: 'golfing',
        icon: '.../public/images/golfing.jpg'
        }
      ]);
    }).then(() => {
      return knex.raw("select setval('categories_id_seq', (select max(id) from categories));")
    });
};

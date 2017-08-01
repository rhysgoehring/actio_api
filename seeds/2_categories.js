
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1,
        title: 'basketball',
        icon: 'https://s3-us-west-2.amazonaws.com/rhysactio/basketball.png'
        },
        {id: 2,
        title: 'hiking',
        icon: 'https://s3-us-west-2.amazonaws.com/rhysactio/hiker.png'
        },
        {id: 3,
        title: 'swimming',
        icon: 'https://s3-us-west-2.amazonaws.com/rhysactio/swimming.png'
        },
        {id: 4,
        title: 'climbing',
        icon: 'https://s3-us-west-2.amazonaws.com/rhysactio/climbing.png'
        },
        {id: 5,
        title: 'soccer',
        icon: 'https://s3-us-west-2.amazonaws.com/rhysactio/soccer.png'
        },
        {id: 6,
        title: 'golfing',
        icon: 'https://s3-us-west-2.amazonaws.com/rhysactio/golfing.png'
        }
      ]);
    }).then(() => {
      return knex.raw("select setval('categories_id_seq', (select max(id) from categories));")
    });
};

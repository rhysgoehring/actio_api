exports.seed = function(knex) {
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
        id: 1,
        first_name: 'Rhys',
        last_name: 'Goehring',
        email: 'rhysgoehring@gmail.com',
        hashed_password: '$2a$12$YbS5MlJIsaRiYs2Qt8cxeOgAwyLpbT2qnwgNRQLv0Hvx6wb9mxQaC',
        zip: 80301,
        profile_pic: 'http://lfsufseq9i2bo0hk2tyezb8b.wpengine.netdna-cdn.com/wp-content/uploads/2016/04/tabphoto-summer-2.jpg'
      },
      {
        id: 2,
        first_name: 'Sam',
        last_name: 'Miller',
        email: 'climber_sam@hotmail.com',
        hashed_password: '$2a$12$YbS5MlJIsaRiYs2Qt8cxeOgAwyLpbT2qnwgNRQLv0Hvx6wb9mxQaC',
        zip: 80301,
        profile_pic: 'http://wac.450f.edgecastcdn.net/80450F/etsn.fm/files/2014/05/Canton_Sam_Miller_06_web.jpg'
      },
      {
        id: 3,
        first_name: 'Sean',
        last_name: 'Kelly',
        email: 'seankelly@seankelly.com',
        hashed_password: '$2a$12$YbS5MlJIsaRiYs2Qt8cxeOgAwyLpbT2qnwgNRQLv0Hvx6wb9mxQaC',
        zip: 80301,
        profile_pic: 'http://www.crainscleveland.com/apps/pbcsi.dll/cceimg?Site=CC&Module=350&Class=3501&Type=35010&Date=20151018&ID=3369258&MaxW=440&v=20151021165457'
      }
    ]);
    }).then(() => {
      return knex.raw("select setval('users_id_seq', (select max(id) from users));")
    });
};

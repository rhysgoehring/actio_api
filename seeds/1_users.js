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
        about: 'I enjoy nice hikes anywhere in Boulder and am normally trying to organize a pickup basketball game. I also likes a good swim in the summer and would really like to find a beginners ski event to get back on the mountain in the winter',
        hashed_password: '$2a$12$YbS5MlJIsaRiYs2Qt8cxeOgAwyLpbT2qnwgNRQLv0Hvx6wb9mxQaC',
        zip: 80301,
        profile_pic: 'http://lfsufseq9i2bo0hk2tyezb8b.wpengine.netdna-cdn.com/wp-content/uploads/2016/04/tabphoto-summer-2.jpg'
      },
      {
        id: 2,
        first_name: 'Sam',
        last_name: 'Miller',
        email: 'climber_sam@hotmail.com',
        about: 'I\'m is an experienced climber, I love climbing and hiking with people of all skill levels. Also really like to swim, ski, and find new activities to add to my list of hobbies. I\'m good for a round of Golf every now and then, but I\', terrible.',
        hashed_password: '$2a$12$YbS5MlJIsaRiYs2Qt8cxeOgAwyLpbT2qnwgNRQLv0Hvx6wb9mxQaC',
        zip: 80301,
        profile_pic: 'http://wac.450f.edgecastcdn.net/80450F/etsn.fm/files/2014/05/Canton_Sam_Miller_06_web.jpg'
      },
      {
        id: 3,
        first_name: 'Sean',
        last_name: 'Kelly',
        email: 'seankelly@seankelly.com',
        about: 'I love trying new things; I enjoy hiking and soccer regularly but would love to try out climbing. I\'ve also been looking to get back onto the mountain this upcoming winter, I used to snowboard but really want to try out skiing.',
        hashed_password: '$2a$12$YbS5MlJIsaRiYs2Qt8cxeOgAwyLpbT2qnwgNRQLv0Hvx6wb9mxQaC',
        zip: 80301,
        profile_pic: 'http://www.crainscleveland.com/apps/pbcsi.dll/cceimg?Site=CC&Module=350&Class=3501&Type=35010&Date=20151018&ID=3369258&MaxW=440&v=20151021165457'
      }
    ]);
    }).then(() => {
      return knex.raw("select setval('users_id_seq', (select max(id) from users));")
    });
};

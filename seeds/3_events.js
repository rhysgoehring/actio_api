
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1,
        name: 'Swim With Sam',
        cat_id: 3,
        location: '2102 Spruce St, Boulder, CO 80302',
        description: 'Pack your water wings and noodles for a day of fun in the sun.  Our 10 foot diameter, above ground pool is the perfect way to cool off and have some fun.',
        lat: 40.021403,
        lng: -105.268281,
        owner_id: 2,
        event_date: '12-15-2017',
        skill_level: 'beginner',
        event_pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Girl_with_styrofoam_swimming_board.jpg/220px-Girl_with_styrofoam_swimming_board.jpg'},
        {id: 2,
        name: 'Climbing with Rhys',
        cat_id: 4,
        location: '91 Fourmile Canyon Dr, Boulder, CO 80302',
        lat: 40.017989,
        lng: -105.326301,
        description: "I'm a really good climber, so only come if you want to get rad.",
        owner_id: 1,
        event_date: '12-18-2017',
        skill_level: 'master',
        event_pic: 'https://thumbs.dreamstime.com/t/homem-de-neg%C3%B3cios-que-escala-para-o-sucesso-5060844.jpg'},
        {
        id: 3,
        name: 'Golfing with Sean',
        cat_id: 6,
        location: '5706 Arapahoe Ave, Boulder, CO 80303',
        lat: 40.011535,
        lng: -105.221015,
        description: "I've never golfed, but I figured we could just ride around in the cart and drink.",
        owner_id: 3,
        event_date: '10-10-2017',
        skill_level: 'beginner',
        event_pic: 'https://res.cloudinary.com/simpleview/image/fetch/c_fill,f_auto,h_336,q_75,w_630/http://res.cloudinary.com/simpleview/image/upload/v1461089435/clients/laurel/Brenda_T_Golf_Shot_Jump_8e086973-952f-4cbb-bf73-dd3e219759c6.jpg'},
        {
          id:4,
          name:'Golfing Party!',
          cat_id: 6,
          location: '7350 Clubhouse Rd, Boulder, CO 80301',
          lat: 40.065027,
          lng: -105.186722,
          owner_id:2,
          description: "Party on the golf course!!",
          event_date: '7-13-2017',
          skill_level: 'beginner',
          event_pic: 'https://i1.wp.com/blovelyevents.com/wp-content/uploads/2014/03/The-look-and-feel-of-this-golf-birthday-party-is-lovely.jpg'
        },
        {
          id:5,
          name:'Basketball Hoops!',
          cat_id: 1,
          location: '1505 30th St, Boulder, CO 80303',
          lat: 40.012616,
          lng: -105.254988,
          owner_id:1,
          description: "I love shooting hoops!!",
          event_date: '7-13-2017',
          skill_level: 'advanced',
          event_pic: 'https://cdn.shopify.com/s/files/1/0546/0157/products/Net_White.png?v=1448163544'
        },
        {
          id:6,
          name:'Basketball Horse',
          cat_id: 1,
          location: '5660 Sioux Dr, Boulder, CO 80303',
          lat: 39.992141,
          lng: -105.220004,
          owner_id:3,
          description: "Bringing back the old times with good games - yay! See you there.",
          event_date: '7-13-2017',
          skill_level: 'beginner',
          event_pic: 'https://images2.onionstatic.com/clickhole/3564/7/original/600.jpg'
        },
        {
          id:7,
          name:'Hole in One',
          cat_id: 6,
          location: '1360 Gillaspie Dr, Boulder, CO 80305',
          lat: 39.974637,
          lng: -105.248627,
          owner_id:1,
          description: "Only advanced golfers please! I'm getting ready for a tournament and want to practice. Thanks!",
          event_date: '7-13-2017',
          skill_level: 'master',
          event_pic: 'https://az760333.vo.msecnd.net/-/media/property/sunriverresort/hotel/sunriver-resort_golf_sunrise-tee-off-crpd566x566.jpg?ts=9d44703e-221e-4d1f-a07e-331605742dbf'
        },
        {
          id:8,
          name:'We love golf!',
          cat_id: 6,
          location: '3240 Prairie Ave, Boulder, CO 80301',
          lat: 40.021527,
          lng: -105.250587,
          owner_id:2,
          description: "Everyone can enjoy golf - not just old people",
          event_date: '7-13-2017',
          skill_level: 'beginner',
          event_pic: 'http://s3.amazonaws.com/product-images.imshopping.com/nimblebuy/world-of-golf-18-holes-lunch-2-7306472-original.jpg'
        },
        {
          id:9,
          name:'Orange is my favorite color - just like this basketball',
          cat_id: 1,
          location: '1821 30th St B, Boulder, CO 80301',
          lat: 40.018705,
          lng: -105.254867,
          owner_id:1,
          description: "Wear orange to be consistent with the theme!",
          event_date: '7-13-2017',
          skill_level: 'beginner',
          event_pic: 'http://a.espncdn.com/combiner/i?img=/redesign/assets/img/icons/ESPN-icon-basketball.png&w=288&h=288&transparent=true'
        },
        {
          id:10,
          name:'Only Hard Routes',
          cat_id: 4,
          location: '2727 29th St, Boulder, CO 80301',
          lat: 40.027993,
          lng: -105.256722,
          owner_id:1,
          description: "5.11a or bust",
          event_date: '7-13-2017',
          skill_level: 'advanced',
          event_pic: 'http://www.bivouacit.com/wp-content/uploads/2013/05/Ben_Bishop_Blog_12.jpg'
        },
        {
          id:11,
          name:'Swim with not Sam',
          cat_id: 3,
          location: '3870 Broadway St, Boulder, CO 80304',
          lat: 40.044787,
          lng: -105.28147000000001,
          owner_id:2,
          description: "Whoever hated that event with Sam can come swim with me!",
          event_date: '7-13-2017',
          skill_level: 'master',
          event_pic: 'http://www.ironman.today/wp-content/uploads/2016/07/swimming.jpg'
        },
        {
          id:12,
          name:'Bouldering with some rad people - yeaaa!',
          cat_id: 4,
          location: '2700 Winding Trail Dr, Boulder, CO 80304',
          lat: 40.044787,
          lng: -105.281470,
          owner_id:3,
          description: "Bouldering so no harnesses allowed",
          event_date: '7-13-2017',
          skill_level: 'beginner',
          event_pic: 'https://i.ytimg.com/vi/8J_bB1vI0uE/maxresdefault.jpg'
        },

      ]);
    }).then(() => {
      return knex.raw("select setval('events_id_seq', (select max(id) from events));")
    });
};

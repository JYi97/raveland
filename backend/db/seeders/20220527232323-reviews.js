'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reviews', [{
      userId: 3,
      raveId: 1,
      content: "Took my friend and her sister to their first rave and had a great experience. Parking was a pain but other than that, I would definitely go again.",
      photoUrl: "https://edm.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY1Mzg0NzM5MDc3NzYwNDY2/dasenergy1.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      raveId: 2,
      content: "Under the Electric Sky, we come together to celebrate life, love, art, and music.",
      photoUrl: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/13120224/EDC-hero-image-972x486.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      raveId: 3,
      content: "The festival will take place rain or shine no matter what.",
      photoUrl: "https://media.timeout.com/images/105889121/750/422/image.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      raveId: 4,
      content: "I had a really fun time at this rave but my phone got stolen :(.",
      photoUrl: "https://www.respectmyregion.com/wp-content/uploads/2021/10/674T7vA-1000x667.jpeg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      raveId: 5,
      content: "Learned my lesson last time and made sure my phone was with me at all times so we did not get pickpocketed.",
      photoUrl: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/52/2019/07/05130254/ringmaster-sq.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      raveId: 6,
      content: "First time seeing Tchami X Malaa live and it was the best set I have ever been to.",
      photoUrl: "https://www.ministryofsound.com/media/4268/tchami-x-malaa-1200x630.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      raveId: 7,
      content: "Went with my friends in San Diego and the bleachers on the side were really convenient if you wanted to sit or relax for a bit.",
      photoUrl: "https://www.eventslanow.com/wp-content/uploads/2019/12/OMFG-NYE-2019-HDR-700.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      raveId: 8,
      content: "I am very excited for this as I heard many good things about this show from the people who went the past years.",
      photoUrl: "https://1ryzas42x65e2oosia40bgli-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/SFX19986_RESIZE.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      raveId: 9,
      content: "Friend invited me to go to a club to see a DJ and I had a blast. Would definitely go to another one of his shows.",
      photoUrl: "https://crowdsurfermag.files.wordpress.com/2021/07/july-24-2021_40connortherealgaskey_gryffin_time-nightclub-7.jpeg?w=683",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      raveId: 10,
      content: "This was my first show that I went to and this is when I started to become a huge fan of raves and attended more afterwards.",
      photoUrl: "https://i.pinimg.com/originals/e0/47/e2/e047e22ad2f5eb75c471b7453d73dfe6.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      raveId: 11,
      content: "Always a great show to go to. Will definitely be returning next year like always",
      photoUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/ce/70/29/electric-zoo-2017.jpg?w=1200&h=-1&s=1",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 7,
      raveId: 11,
      content: "It was the perfect place for me!",
      photoUrl: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      raveId: 12,
      content: "I love Miami and the vibe it gave off. Be careful though! It was realy hot so make sure to stay hydrated",
      photoUrl: "https://ewscripps.brightspotcdn.com/dims4/default/abe5fac/2147483647/strip/true/crop/640x360+0+60/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.abcactionnews.com%2Fphoto%2F2018%2F09%2F27%2Fultra-music-festival_1538084522784_98853211_ver1.0_640_480.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      raveId: 13,
      content: "I really love the alien theme that they always go with for countdown. It always makes the experience more amazing.",
      photoUrl: "https://edm.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU5NTQyNDc0NjQ4MzMxODY0/insomniac.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      raveId: 14,
      content: "Always down to travel to Chicago if it means we are going to Lollapalooza. Their lineups are always great and the vibe with everyone was just amazing.",
      photoUrl: "https://cdn.cnn.com/cnnnext/dam/assets/210812115348-01-lollapalooza-foo-fighters-2021-super-tease.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      raveId: 5,
      content: "Would definitely not want to go to this rave alone, I had hella fun but some of the themes were too dark for me to handle",
      photoUrl: "https://i.ytimg.com/vi/JmDjcSDtFEQ/maxresdefault.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      raveId: 2,
      content: "I really want EDC to happen again. The weekend past by so fast and I already wish it was next year so I can go again.",
      photoUrl: "https://www.dancemusicnw.com/wp-content/uploads/2019/06/edclasvegas2019_bestofrecordbreaking_720.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      raveId: 2,
      content: "Really enjoyed my time at EDC with my girlfriend.",
      photoUrl: "https://www.dancemusicnw.com/wp-content/uploads/2019/10/Christopher-Pearce-for-Insomniac-Events-1.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      raveId: 3,
      content: "Our rave fam!!!!",
      photoUrl: "https://i.pinimg.com/originals/62/54/d3/6254d3aaa29628f0644553391a48954a.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Reviews', null, {});
  }
};

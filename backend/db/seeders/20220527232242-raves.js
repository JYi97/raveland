'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Raves', [{
      userId: 3,
      title: "Das Energi",
      photoUrl: "https://photos.bandsintown.com/large/10016351.jpeg",
      description: "Das Energi Festival 2021 has Trance, House, EDM, Trap Music, Dubstep, and more at The Saltair in Salt Lake City! The Das Energi Festival lineup is out: Illenium, LSDream, Claude Von Stroke, Ganja White Night and Kaskade top the lineup.",
      address: "12408 W Saltair Dr",
      city: "Magna",
      state: "UT",
      zipCode: "84044",
      date: "2021-08-13",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      title: "Electric Daisy Carnival",
      photoUrl: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2022/02/01171129/EDCLV2021_1024_042113-7803_AGP_768x440.jpg",
      description: "The annual flagship event, EDC Las Vegas, is held in May at the Las Vegas Motor Speedway, and is currently the largest electronic dance music festival in North America.",
      address: "7000 N. Las Vegas Blvd",
      city: "Las Vegas",
      state: "NV",
      zipCode: "89115",
      date: "2022-05-20",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      title: "Hard Summer",
      photoUrl: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2018/01/11235133/ourworld2.jpg",
      description: "HARD Summer music festival comes to the NOS Events Center!",
      address: "689 S. E St",
      city: "San Bernardino",
      state: "CA",
      zipCode: "92408",
      date: "2022-07-29",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      title: "Beyond Wonderland",
      photoUrl: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2019/01/07194912/1200x630-beyond_wonderland_socal_2019_an_insomniac_com_news_hero_1300x650_r01.jpg",
      description: "HARD Summer music festival comes to the NOS Events Center!",
      address: "689 S. E St",
      city: "San Bernardino",
      state: "CA",
      zipCode: "92408",
      date: "2019-03-22",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      title: "Escape Psycho Circus",
      photoUrl: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2019/07/12161342/escape2019_onsale_1200x800.jpg",
      description: "This year, Escape: Psycho Circus will transform the NOS Events Center into a living, breathing freak show across two terrifying nights. The reimagined Escape: Psycho Circus will feature brand-new, never-before-seen stage designs, newly themed areas, spine-tingling art installations, creepy décor, and even more freakish theatrical performers. Plus, we’re debuting an all-new interactive area where outlandish horrors come to life and the Red Ringmaster himself returns to lead Headliners on an eerie journey through Escape’s nightmarish realm.",
      address: "689 S. E St",
      city: "San Bernardino",
      state: "CA",
      zipCode: "92408",
      date: "2019-10-25",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      title: "Audiotistic",
      photoUrl: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/63/2019/09/30152033/audiotistic_socal_2019_lu_lubs_1080x1350_r05.png",
      description: "Check out the stacked artist roster from Audiotistic SoCal 2019.",
      address: "689 S. E St",
      city: "San Bernardino",
      state: "CA",
      zipCode: "92408",
      date: "2019-12-28",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      title: "OMFG!",
      photoUrl: "https://dancingastro-wpengine.netdna-ssl.com/wp-content/uploads/2021/12/omfg-700x350.jpeg",
      description: "Come celebrate New Year's Eve in San Diego at OMFG! and countdown to the new year",
      address: "3500 Sports Arena Blvd",
      city: "San Diego",
      state: "CA",
      zipCode: "92110",
      date: "2021-12-31",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      title: "Second Sky",
      photoUrl: "https://edmidentity.com/wp-content/uploads/2019/03/Second-Sky-Music-Festival-2019-Lineup.jpg",
      description: "Come see Porter Robinson and his friends perform in this this festival with a special set of Porter and GJones!",
      address: "7000 Coliseum Way",
      city: "Oakland",
      state: "CA",
      zipCode: "94621",
      date: "2022-10-29",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      title: "Gryffin",
      photoUrl: "https://nightout.s3.amazonaws.com/media/posters/75501/large-4d1409222a3475c7.jpg?1623799253",
      description: "Come to Time Nightclub in Costa Mesa to see Gryffin perform live!",
      address: "1875 Newport Blvd B245",
      city: "Costa Mesa",
      state: "CA",
      zipCode: "92627",
      date: "2021-07-23",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      title: "Illenium",
      photoUrl: "https://dancingastro-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/illenium-NYE-flyer.jpg",
      description: "Illenium comes to perform on Huntington Beach for New Year's Even with special guests Armnhmr and Ookay!",
      address: "21601 Pacific Coast Hwy",
      city: "Huntington Beach",
      state: "CA",
      zipCode: "92646",
      date: "2018-12-31",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      title: "Electric Zoo",
      photoUrl: "https://www.jambase.com/wp-content/uploads/2020/10/electric-zoo-supernaturals-2021-1200x675.jpg",
      description: "Electric Zoo is an annual electronic music festival held over Labor Day weekend in New York City on Randall's Island. The festival represents all genres of electronic music, bringing top international DJs and live acts from multiple countries to four stages.",
      address: "61 Wythe Ave",
      city: "Brooklyn",
      state: "NY",
      zipCode: "11249",
      date: "2022-07-29",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      title: "Ultra",
      photoUrl: "https://ultramusicfestival.com/wp-content/uploads/2022/05/ULTRA-2023-WEB-TICKETS-ON-SALE.jpg",
      description: "Ultra Music Festival is an annual outdoor electronic music festival that takes place during March in Miami, Florida, United States. The festival was founded in 1999 by Russell Faibisch and Alex Omes and is named after the Ultra Music label.",
      address: "301 North Biscayne Boulevard",
      city: "Miami",
      state: "FL",
      zipCode: "33132",
      date: "2023-03-24",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      title: "Countdown",
      photoUrl: "https://www.frontgatetickets.com/wp-content/uploads/2017/08/csc_2021_as_key_art_1920x1080_r01.png",
      description: "Turn up and count down with Insomniac this New Year's Eve Weekend! 2 Days of Alien Invasion for fans of electronic music in SoCal, at the largest NYE event!",
      address: "689 S. E St",
      city: "San Bernardino",
      state: "CA",
      zipCode: "92408",
      date: "2021-12-31",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      title: "Lollapalooza",
      photoUrl: "https://www.livenationentertainment.com/wp-content/uploads/2022/03/Lolla-Chicago.jpg",
      description: "Lollapalooza is an annual four-day music festival held in Grant Park in Chicago. It originally started as a touring event in 1991 but several years later made Chicago the permanent location for the annual music festival.",
      address: "337 E Randolph St",
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
      date: "2022-07-28",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Raves', null, {});

  }
};

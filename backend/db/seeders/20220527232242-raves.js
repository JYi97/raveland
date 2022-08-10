'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Raves', [
      // 1
      {
      userId: 10,
      title: "Das Energi",
      photoUrl: "https://photos.bandsintown.com/large/10016351.jpeg",
      description: "Das Energi Festival 2021 has Trance, House, EDM, Trap Music, Dubstep, and more at The Saltair in Salt Lake City! The Das Energi Festival lineup is out: Illenium, LSDream, Claude Von Stroke, Ganja White Night and Kaskade top the lineup.",
      address: "12408 W Saltair Dr",
      city: "Magna",
      state: "UT",
      zipCode: "84044",
      date: new Date(2021, 7, 13),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 9,
      title: "Electric Daisy Carnival",
      photoUrl: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2022/02/01171129/EDCLV2021_1024_042113-7803_AGP_768x440.jpg",
      description: "The annual flagship event, EDC Las Vegas, is held in May at the Las Vegas Motor Speedway, and is currently the largest electronic dance music festival in North America.",
      address: "7000 N. Las Vegas Blvd",
      city: "Las Vegas",
      state: "NV",
      zipCode: "89115",
      date: new Date(2022, 4, 20),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 4,
      title: "Hard Summer",
      photoUrl: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2018/01/11235133/ourworld2.jpg",
      description: "HARD Summer music festival comes to the NOS Events Center!",
      address: "689 S. E St",
      city: "San Bernardino",
      state: "CA",
      zipCode: "92408",
      date: new Date(2022, 6, 29),
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
      date: new Date(2019, 2, 22),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // 5
    {
      userId: 3,
      title: "Escape Psycho Circus",
      photoUrl: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2019/07/12161342/escape2019_onsale_1200x800.jpg",
      description: "This year, Escape: Psycho Circus will transform the NOS Events Center into a living, breathing freak show across two terrifying nights. The reimagined Escape: Psycho Circus will feature brand-new, never-before-seen stage designs, newly themed areas, spine-tingling art installations, creepy décor, and even more freakish theatrical performers. Plus, we’re debuting an all-new interactive area where outlandish horrors come to life and the Red Ringmaster himself returns to lead Headliners on an eerie journey through Escape’s nightmarish realm.",
      address: "689 S. E St",
      city: "San Bernardino",
      state: "CA",
      zipCode: "92408",
      date: new Date(2019, 9, 25),
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
      date: new Date(2019, 11, 28),
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
      date: new Date(2021, 11, 31),
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
      date: new Date(2022, 9, 29),
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
      date: new Date(2021, 6, 23),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // 10th
    {
      userId: 9,
      title: "Illenium",
      photoUrl: "https://dancingastro-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/illenium-NYE-flyer.jpg",
      description: "Illenium comes to perform on Huntington Beach for New Year's Even with special guests Armnhmr and Ookay!",
      address: "21601 Pacific Coast Hwy",
      city: "Huntington Beach",
      state: "CA",
      zipCode: "92646",
      date: new Date(2018, 11, 31),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 7,
      title: "Electric Zoo",
      photoUrl: "https://www.jambase.com/wp-content/uploads/2020/10/electric-zoo-supernaturals-2021-1200x675.jpg",
      description: "Electric Zoo is an annual electronic music festival held over Labor Day weekend in New York City on Randall's Island. The festival represents all genres of electronic music, bringing top international DJs and live acts from multiple countries to four stages.",
      address: "61 Wythe Ave",
      city: "Brooklyn",
      state: "NY",
      zipCode: "11249",
      date: new Date(2021, 8, 3),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 8,
      title: "Ultra",
      photoUrl: "https://ultramusicfestival.com/wp-content/uploads/2022/05/ULTRA-2023-WEB-TICKETS-ON-SALE.jpg",
      description: "Ultra Music Festival is an annual outdoor electronic music festival that takes place during March in Miami, Florida, United States. The festival was founded in 1999 by Russell Faibisch and Alex Omes and is named after the Ultra Music label.",
      address: "301 North Biscayne Boulevard",
      city: "Miami",
      state: "FL",
      zipCode: "33132",
      date: new Date(2023, 2, 24),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 6,
      title: "Countdown",
      photoUrl: "https://www.frontgatetickets.com/wp-content/uploads/2017/08/csc_2021_as_key_art_1920x1080_r01.png",
      description: "Turn up and count down with Insomniac this New Year's Eve Weekend! 2 Days of Alien Invasion for fans of electronic music in SoCal, at the largest NYE event!",
      address: "689 S. E St",
      city: "San Bernardino",
      state: "CA",
      zipCode: "92408",
      date: new Date(2021, 11, 31),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 5,
      title: "Lollapalooza",
      photoUrl: "https://www.livenationentertainment.com/wp-content/uploads/2022/03/Lolla-Chicago.jpg",
      description: "Lollapalooza is an annual four-day music festival held in Grant Park in Chicago. It originally started as a touring event in 1991 but several years later made Chicago the permanent location for the annual music festival.",
      address: "337 E Randolph St",
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
      date: new Date(2022, 6, 28),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // 15
    {
      userId: 8,
      title: "Outside Lands Music and Arts Festival",
      photoUrl: "https://2ldw4l2udukh2ozi6v3q9uyy-wpengine.netdna-ssl.com/wp-content/uploads/2016/04/OL22-FDP-FINAL.jpg",
      description: "The Outside Lands Music and Arts Festival is a music festival held annually in San Francisco, California, at Golden Gate Park. The festival is produced by Another Planet Entertainment, Superfly Presents, and Starr Hill Presents. It is the largest independently owned music festival in the US.",
      address: "Golden Gate Park",
      city: "San Francisco",
      state: "CA",
      zipCode: "	94121",
      date: new Date(2022, 7, 5),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      title: "Beyond Wonderland",
      photoUrl: "https://static-label.frontgatetickets.com/common/label/2966/images/bwsc_2023_mk_ps_fgt_pb_2426x1356_r01.png",
      description: "When day breaks in Wonderland, a curious cast of characters emerges, and fantastical animals of all shapes and sizes run wild. In this place beyond our imaginations, colors shine brighter, smiles are wider, and the secrets of Wonderland come to light. Follow Alice on her wondrous journey through the various realms of Beyond Wonderland. We groove to the same universal beat and, together, create beautiful experiences that will never be forgotten. Venture beyond the music, into an otherworldly land of multidimensional environments, interactive feats of technology, and wonders of color and light. A whole new story comes to life beyond the looking glass, where Alice and the Queen hold court with Formal Foxes, Leopard Ladies, and many more eccentric characters.",
      address: "689 S. E St",
      city: "San Bernardino",
      state: "CA",
      zipCode: "92408",
      date: new Date(2023, 2, 24),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      title: "Escape Psycho Circus",
      photoUrl: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/05184038/escape-ourworld-2022-1-overlay.jpg",
      description: "Sinister sights and rattling sounds will shock, amaze, beguile, astound Escape with us, and come inside—Halloween has arrived! Each realm of Escape Halloween offers up a unique musical treat, full of audiovisual trickery to captivate your soul. Dance among freaks, geeks, fortune-tellers, contortionists, and a host of formidable characters who haunt this place. Enter a world of three-dimensional superstructures, glow-in-the-dark environments, and technological feats of light, sound and fire.",
      address: "689 S. E St",
      city: "San Bernardino",
      state: "CA",
      zipCode: "92408",
      date: new Date(2022, 9, 28),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      title: "Countdown",
      photoUrl: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/59/2022/07/19095600/csc_2022_mk_teaser_fest_site_dh_3200x1520_r01-scaled.jpg",
      description: "Officials have issued public warnings of an alien attack planned against the human inhabitants of Raveland at midnight! Multiple universes coexist in the world of Countdown, each with its own array of sights and sounds. Our musical frequencies transcend time and space, emitting signals heard—and felt— across the galaxy. Explore interactive feats of technology, displays of color and light, and signs of extraterrestrial life. You may find yourself dancing among beings from outer space. Don’t panic—our fearless space cadets will protect you.",
      address: "689 S. E St",
      city: "San Bernardino",
      state: "CA",
      zipCode: "92408",
      date: new Date(2022, 11, 31),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      title: "North Coast Festival",
      photoUrl: "https://www.seatgeekstadium.com/wp-content/uploads/NC_22_square_lineup_SATURDAY-1024x1024.png",
      description: "North Coast is more than music. We strive to create an experience that allows our Coasties to create their own journey. With installations that interact with all your senses.",
      address: "7000 S Harlem Ave",
      city: "Bridgeview",
      state: "IL",
      zipCode: "60455",
      date: new Date(2022, 8, 2),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Raves', null, {});

  }
};

const searchForm = document.querySelector("#search-form");
const searchOutput = document.querySelector(`.search-output`);

searchForm.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const formData = new FormData(searchForm);
  const userInput = formData.get("search-bar");

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDQyOTU0NTdiMDFjNmJjZTYxZWU4MjA4M2ZhMGYzMyIsIm5iZiI6MTcyOTY2NzU0MC43OTg5OTEsInN1YiI6IjY3MTFlNzI2OThmNmE3NThjZDU0OGVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aOZpQNoVCITZD0A7guGGPkmv2jnuC5oj_D2iWwhNHXo'
    }
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${userInput}&include_adult=false&language=en-US&page=1`, options);
    const data = await response.json();
    
    const moviesLists = data.results;
    moviesLists.forEach(movie => {
      const image = document.createElement("img")
      
      image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`      
      

      const movieCard = document.createElement("div")
      const movieTitleElemnt = document.createElement("h1")
      movieTitleElemnt.textContent = `${movie.original_title}` 
      movieCard.classList.add("movie-card")

      
      searchOutput.appendChild(movieTitleElemnt);
      searchOutput.appendChild(image);

    });
  } catch (err) {
    console.error(err);
  }
});










// {
//   "page": 1,
//   "results": [
//       {
//           "adult": false,
//           "backdrop_path": "/2va32apQP97gvUxaMnL5wYt4CRB.jpg",
//           "genre_ids": [
//               14,
//               28,
//               80
//           ],
//           "id": 268,
//           "original_language": "en",
//           "original_title": "Batman",
//           "overview": "Batman must face his most ruthless nemesis when a deformed madman calling himself \"The Joker\" seizes control of Gotham's criminal underworld.",
//           "popularity": 58.626,
// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
//           "poster_path": "/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg",
//           "release_date": "1989-06-21",
//           "title": "Batman",
//           "video": false,
//           "vote_average": 7.234,
//           "vote_count": 7773
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/bxxupqG6TBLKC60M6L8iOvbQEr6.jpg",
//           "genre_ids": [
//               28,
//               35,
//               80
//           ],
//           "id": 2661,
//           "original_language": "en",
//           "original_title": "Batman",
//           "overview": "The Dynamic Duo faces four super-villains who plan to hold the world for ransom with the help of a secret invention that instantly dehydrates people.",
//           "popularity": 41.205,
//           "poster_path": "/zzoPxWHnPa0eyfkMLgwbNvdEcVF.jpg",
//           "release_date": "1966-07-30",
//           "title": "Batman",
//           "video": false,
//           "vote_average": 6.4,
//           "vote_count": 946
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/bHxJA9rllKF2jhb11ARAwZJYSp6.jpg",
//           "genre_ids": [
//               28,
//               12,
//               80,
//               878,
//               53,
//               10752
//           ],
//           "id": 125249,
//           "original_language": "en",
//           "original_title": "Batman",
//           "overview": "Japanese master spy Daka operates a covert espionage-sabotage organization located in Gotham City's now-deserted Little Tokyo, which turns American scientists into pliable zombies. The great crime-fighters Batman and Robin, with the help of their allies, are in pursuit.",
//           "popularity": 19.799,
//           "poster_path": "/AvzD3mrtokIzZOiV6zAG7geIo6F.jpg",
//           "release_date": "1943-07-16",
//           "title": "Batman",
//           "video": false,
//           "vote_average": 6.427,
//           "vote_count": 109
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/5fX1oSGuYdKgwWmUTAN5MNSQGzr.jpg",
//           "genre_ids": [
//               28,
//               12,
//               14
//           ],
//           "id": 209112,
//           "original_language": "en",
//           "original_title": "Batman v Superman: Dawn of Justice",
//           "overview": "Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.",
//           "popularity": 89.679,
//           "poster_path": "/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
//           "release_date": "2016-03-23",
//           "title": "Batman v Superman: Dawn of Justice",
//           "video": false,
//           "vote_average": 6,
//           "vote_count": 17852
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/tRS6jvPM9qPrrnx2KRp3ew96Yot.jpg",
//           "genre_ids": [
//               80,
//               9648,
//               53
//           ],
//           "id": 414906,
//           "original_language": "en",
//           "original_title": "The Batman",
//           "overview": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
//           "popularity": 198.258,
//           "poster_path": "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
//           "release_date": "2022-03-01",
//           "title": "The Batman",
//           "video": false,
//           "vote_average": 7.671,
//           "vote_count": 10185
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/iQJ1gC2p6yn5wnBEklhPaEFJ3n1.jpg",
//           "genre_ids": [
//               16,
//               28,
//               878
//           ],
//           "id": 886396,
//           "original_language": "en",
//           "original_title": "Batman and Superman: Battle of the Super Sons",
//           "overview": "After discovering he has powers, 11-year-old Jonathan Kent and assassin-turned-Boy-Wonder Damian Wayne must join forces to rescue their fathers (Superman & Batman) and save the planet from the malevolent alien force known as Starro.",
//           "popularity": 26.952,
//           "poster_path": "/mvffaexT5kA3chOnGxwBSlRoshh.jpg",
//           "release_date": "2022-10-17",
//           "title": "Batman and Superman: Battle of the Super Sons",
//           "video": false,
//           "vote_average": 7.7,
//           "vote_count": 287
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/geeAPcb9iBEWfft6uRnL8aCwBmF.jpg",
//           "genre_ids": [
//               16,
//               28,
//               878
//           ],
//           "id": 485942,
//           "original_language": "ja",
//           "original_title": "ニンジャバットマン",
//           "overview": "Batman, along with many of his allies and adversaries, finds himself transported to feudal Japan by Gorilla Grodd's time displacement machine.",
//           "popularity": 16.901,
//           "poster_path": "/5xSB0Npkc9Fd9kahKBsq9P4Cdzp.jpg",
//           "release_date": "2018-06-15",
//           "title": "Batman Ninja",
//           "video": false,
//           "vote_average": 5.8,
//           "vote_count": 839
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/kaYyrF2iPVtGN3f4eKI0AqHtVNc.jpg",
//           "genre_ids": [
//               12,
//               14,
//               16,
//               28,
//               878
//           ],
//           "id": 21683,
//           "original_language": "en",
//           "original_title": "Batman: Mystery of the Batwoman",
//           "overview": "As if the Penguin wasn't enough to contend with, a new vigilante has surfaced in Gotham City, and her strong-arm tactics give Batman cause for concern.",
//           "popularity": 20.104,
//           "poster_path": "/mlmhpUArJdpRPO211v3lETe3uzg.jpg",
//           "release_date": "2003-10-21",
//           "title": "Batman: Mystery of the Batwoman",
//           "video": false,
//           "vote_average": 6.6,
//           "vote_count": 387
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/lh5lbisD4oDbEKgUxoRaZU8HVrk.jpg",
//           "genre_ids": [
//               28,
//               80,
//               18
//           ],
//           "id": 272,
//           "original_language": "en",
//           "original_title": "Batman Begins",
//           "overview": "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
//           "popularity": 99.208,
//           "poster_path": "/4MpN4kIEqUjW8OPtOQJXlTdHiJV.jpg",
//           "release_date": "2005-06-10",
//           "title": "Batman Begins",
//           "video": false,
//           "vote_average": 7.709,
//           "vote_count": 20832
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/snlu32RmjldF9b068UURJg8sQtn.jpg",
//           "genre_ids": [
//               28,
//               80,
//               14
//           ],
//           "id": 414,
//           "original_language": "en",
//           "original_title": "Batman Forever",
//           "overview": "Batman must battle a disfigured district attorney and a disgruntled former employee with help from an amorous psychologist and a young circus acrobat.",
//           "popularity": 56.006,
//           "poster_path": "/mzzNBVwTiiY94xAXDMWJpNPW2US.jpg",
//           "release_date": "1995-06-16",
//           "title": "Batman Forever",
//           "video": false,
//           "vote_average": 5.432,
//           "vote_count": 5109
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/3WP0RObZ2t7ShHfqQpKPljF9B22.jpg",
//           "genre_ids": [
//               28,
//               14
//           ],
//           "id": 364,
//           "original_language": "en",
//           "original_title": "Batman Returns",
//           "overview": "Batman must face The Penguin, a sewer-dwelling gangleader intent on being accepted into Gotham society.  Meanwhile, another Gotham resident finds herself transformed into Catwoman and is out for revenge...",
//           "popularity": 55.451,
//           "poster_path": "/jKBjeXM7iBBV9UkUcOXx3m7FSHY.jpg",
//           "release_date": "1992-06-19",
//           "title": "Batman Returns",
//           "video": false,
//           "vote_average": 6.929,
//           "vote_count": 6442
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/rREVL1BKqXIhSM2My60wEja43Og.jpg",
//           "genre_ids": [
//               28,
//               878,
//               12
//           ],
//           "id": 415,
//           "original_language": "en",
//           "original_title": "Batman & Robin",
//           "overview": "Batman and Robin deal with relationship issues while preventing Mr. Freeze and Poison Ivy from attacking Gotham City.",
//           "popularity": 56.099,
//           "poster_path": "/cGRDufDDSrFrv7VI4YnmWnslne0.jpg",
//           "release_date": "1997-06-20",
//           "title": "Batman & Robin",
//           "video": false,
//           "vote_average": 4.358,
//           "vote_count": 4952
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/2jApwp78umL4dK9uSBJAngNDiG9.jpg",
//           "genre_ids": [
//               28,
//               16,
//               80,
//               18
//           ],
//           "id": 382322,
//           "original_language": "en",
//           "original_title": "Batman: The Killing Joke",
//           "overview": "As Batman hunts for the escaped Joker, the Clown Prince of Crime attacks the Gordon family to prove a diabolical point mirroring his own fall into madness.",
//           "popularity": 27.683,
//           "poster_path": "/ibgiQ1a1q4UBEjOcqZzsRPhRK0g.jpg",
//           "release_date": "2016-07-24",
//           "title": "Batman: The Killing Joke",
//           "video": false,
//           "vote_average": 6.584,
//           "vote_count": 1790
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/eoMushgujydxFplE9yPZ54lwOvo.jpg",
//           "genre_ids": [
//               16,
//               28,
//               35,
//               10751
//           ],
//           "id": 324849,
//           "original_language": "en",
//           "original_title": "The Lego Batman Movie",
//           "overview": "A cooler-than-ever Bruce Wayne must deal with the usual suspects as they plan to rule Gotham City, while discovering that he has accidentally adopted a teenage orphan who wishes to become his sidekick.",
//           "popularity": 58.296,
//           "poster_path": "/snGwr2gag4Fcgx2OGmH9otl6ofW.jpg",
//           "release_date": "2017-02-08",
//           "title": "The Lego Batman Movie",
//           "video": false,
//           "vote_average": 7.226,
//           "vote_count": 4950
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/eevJuYAitUe6VwFN29aFwzeyeTr.jpg",
//           "genre_ids": [
//               28,
//               16,
//               80,
//               9648
//           ],
//           "id": 537056,
//           "original_language": "en",
//           "original_title": "Batman: Hush",
//           "overview": "A mysterious new villain known only as Hush uses a gallery of villains to destroy Batman's crime-fighting career as well as Bruce Wayne's personal life, which has been further complicated by a relationship with Selina Kyle/Catwoman.",
//           "popularity": 24.364,
//           "poster_path": "/eiVQORVyVuNNZHPAELuWtlXoQsD.jpg",
//           "release_date": "2019-07-19",
//           "title": "Batman: Hush",
//           "video": false,
//           "vote_average": 7.177,
//           "vote_count": 861
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/AuSip6e3uvQgPnnFQjzdTrOVPx7.jpg",
//           "genre_ids": [
//               16,
//               28
//           ],
//           "id": 1297763,
//           "original_language": "ja",
//           "original_title": "ニンジャバットマン対ヤクザリーグ",
//           "overview": "Sequel film to Batman Ninja (2018)",
//           "popularity": 5.057,
//           "poster_path": "/aEsqIZHA7AqJfLtcUkQdZrGYlm6.jpg",
//           "release_date": "",
//           "title": "Batman Ninja vs. Yakuza League",
//           "video": false,
//           "vote_average": 0,
//           "vote_count": 0
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/oSogG5fpITtg11UGz8tfRNfuMeA.jpg",
//           "genre_ids": [
//               16,
//               9648,
//               28,
//               80
//           ],
//           "id": 736074,
//           "original_language": "en",
//           "original_title": "Batman: The Long Halloween, Part Two",
//           "overview": "As Gotham City's young vigilante, the Batman, struggles to pursue a brutal serial killer, district attorney Harvey Dent gets caught in a feud involving the criminal family of the Falcones.",
//           "popularity": 26.393,
//           "poster_path": "/f46QMSo2wAVY1ywrNc9yZv0rkNy.jpg",
//           "release_date": "2021-07-26",
//           "title": "Batman: The Long Halloween, Part Two",
//           "video": false,
//           "vote_average": 7.411,
//           "vote_count": 505
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/bNLLjc6NT80FmFknvHn8demDHhl.jpg",
//           "genre_ids": [
//               878,
//               28,
//               16,
//               9648
//           ],
//           "id": 123025,
//           "original_language": "en",
//           "original_title": "Batman: The Dark Knight Returns, Part 1",
//           "overview": "Batman has not been seen for ten years. A new breed of criminal ravages Gotham City, forcing 55-year-old Bruce Wayne back into the cape and cowl. But, does he still have what it takes to fight crime in a new era?",
//           "popularity": 36.999,
//           "poster_path": "/kkjTbwV1Xnj8wBL52PjOcXzTbnb.jpg",
//           "release_date": "2012-08-21",
//           "title": "Batman: The Dark Knight Returns, Part 1",
//           "video": false,
//           "vote_average": 7.7,
//           "vote_count": 1575
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/zHqptza1ttGa7hkYNEXP7ECIyA9.jpg",
//           "genre_ids": [
//               878,
//               28,
//               16,
//               9648
//           ],
//           "id": 142061,
//           "original_language": "en",
//           "original_title": "Batman: The Dark Knight Returns, Part 2",
//           "overview": "Batman has stopped the reign of terror that The Mutants had cast upon his city.  Now an old foe wants a reunion and the government wants The Man of Steel to put a stop to Batman.",
//           "popularity": 36.073,
//           "poster_path": "/arEZYd6uMOFTILne9Ux0A8qctMe.jpg",
//           "release_date": "2013-01-03",
//           "title": "Batman: The Dark Knight Returns, Part 2",
//           "video": false,
//           "vote_average": 7.9,
//           "vote_count": 1460
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/twCXJuIQxTsor1fZm4QeAfVeiao.jpg",
//           "genre_ids": [
//               12,
//               28,
//               16,
//               878,
//               35
//           ],
//           "id": 408648,
//           "original_language": "en",
//           "original_title": "Batman and Harley Quinn",
//           "overview": "Batman and Nightwing are forced to team with the Joker's sometimes-girlfriend Harley Quinn to stop a global threat brought about by Poison Ivy and Jason Woodrue, the Floronic Man.",
//           "popularity": 18.959,
//           "poster_path": "/xAP0aqAMlsNN3NEvikRkjaTlmjw.jpg",
//           "release_date": "2017-08-14",
//           "title": "Batman and Harley Quinn",
//           "video": false,
//           "vote_average": 6.1,
//           "vote_count": 600
//       }
//   ],
//   "total_pages": 9,
//   "total_results": 171
// }
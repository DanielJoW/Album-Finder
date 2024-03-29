var albumCatalogue = [
  {
    title : "The Stranger",
    artist : "Billy Joel",
    release : "1977"
  },
  {
    title : "Graduation",
    artist : "Kanye West",
    release : "2007"
  },
  {
    title : "Mr. Finish Line",
    artist : "Vulfpeck",
    release : "2017"
  },
  {
    title : "Thriller",
    artist : "Michael Jackson",
    release : "1982"
  },
  {
    title : "Hotel California",
    artist : "The Eagles",
    release : "1976"
  },
  {
    title : "Come on Over",
    artist : "Shania Twain",
    release : "1997"
  },
  {
    title : "Rumours",
    artist : "Fleetwood Mac",
    release : "1977"
  },
  {
    title : "Back in Black",
    artist : "AC/DC",
    release : "1980"
  },
  {
    title : "21",
    artist : "Adele",
    release : "2011"
  },
  {
    title : "Jagged Little Pill",
    artist : "Alanis Morisette",
    release : "1995"
  },
  {
    title : "Dark Side of the Moon",
    artist : "Pink Floyd",
    release : "1973"
  },
  {
    title : "1",
    artist : "The Beatles",
    release : "2000"
  },
  {
    title : "Bat Out of Hell",
    artist : "Meatloaf",
    release : "1977"
  },
  {
    title : "Supernatural",
    artist : "Santana",
    release : "1999"
  },
  {
    title : "Born in the USA",
    artist : "Bruce Springsteen",
    release : "1984"
  },
  {
    title : "Lover",
    artist : "Taylor Swift",
    release : "2019"
  },
  {
    title : "Outbreak",
    artist : "The Headache Pandemic",
    release : "2010"
  }
]

function enterSearch(){
  if (event.keyCode === 13) {
    document.getElementById("searchSubmit").click();
  }
};

function search(){
  var searchTitle = document.getElementById("albumSearch").value;
  var found = false;
  for(var i = 0; i < albumCatalogue.length; i++){
    if(albumCatalogue[i].title === searchTitle){
      document.getElementById("albumTitle").innerHTML=albumCatalogue[i].title;
      document.getElementById("artistName").innerHTML="By " +albumCatalogue[i].artist;
      document.getElementById("releaseDate").innerHTML="Released in " + albumCatalogue[i].release;
      document.getElementById("albumArt").innerHTML="<img src=artwork/" + i +".jpg width=300px height=300px>";
      found = true;
      break;
    }
  }
    if(found === false){
      document.getElementById("albumTitle").innerHTML="";
      document.getElementById("artistName").innerHTML="This album is not in the database.";
      document.getElementById("releaseDate").innerHTML="";
      document.getElementById("albumArt").innerHTML="<img src=woops.png width=250px height=160px>";
  }
}

function randomAlbum(){
  var r = Math.floor(Math.random() * Math.floor(albumCatalogue.length));
  document.getElementById("albumTitle").innerHTML=albumCatalogue[r].title;
  document.getElementById("artistName").innerHTML="By " +albumCatalogue[r].artist;
  document.getElementById("releaseDate").innerHTML="Released in " + albumCatalogue[r].release;
  document.getElementById("albumArt").innerHTML="<img src=artwork/" + r +".jpg width=300px height=300px>";
}

/* Hoping to add:

1) "Add an album" function.
2) Make actual API calls to an album database.

*/

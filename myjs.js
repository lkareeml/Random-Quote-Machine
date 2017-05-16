$(document).ready(function(){
  var QuoteOBJ = [
  {
    "id": 0,
    "author": "Sharon Stone",
    "quote": "Women might be able to fake orgasms. But men can fake a whole relationship. "
  }, {
    "id": 1,
    "author": "Friedrich Nietzsche",
    "quote": "There are no facts, only interpretations. "
  }, {
    "id": 2,
    "author": "Robert Pirsig",
    "quote": "Mother of mercy, is this the end of Rico? "
  }, {
    "id": 3,
    "author": "Vivian Greene",
    "quote": "Life isn't about waiting for the storm to pass; it's about learning to dance in the rain."
  }, {
    "id": 4,
    "author": "Emile Zola",
    "quote": "The artist is nothing without the gift, but the gift is nothing without work. "
  },

  {
    "id": 5,
    "author": "Titanic",
    "quote": "I'm king of the world!"
  },

  {
    "id": 6,
    "author": "Albert Einstein",
    "quote": "Not everything that can be counted counts, and not everything that counts can be counted. "
  },

  {
    "id": 7,
    "author": "Martin Luther King Jr.",
    "quote": "In the End, we will remember not the words of our enemies, but the silence of our friends."
  },

  {
    "id": 8,
    "author": "In the Heat of the Night ",
    "quote": "They call me Mister Tibbs! "
  },

  {
    "id": 9,
    "author": "Casablanca",
    "quote": "Louis, I think this is the beginning of a beautiful friendship. "
  }

];
  var Quotetxt = "";
  var authortxt = "";
  var lastRnd=0;
$("#b").on('click', function(){
  var Rnd = Math.floor(Math.random() * 10);
  //Prevent Repeting 2 Quotes 
  var test=true;
  while(test){
  if (Rnd==lastRnd)
    Rnd = Math.floor(Math.random() * 10);
  else
    test=false;
  }
  ///////////////////
  var oneQuote = QuoteOBJ.filter(function(val){return (val.id == Rnd);});
  oneQuote.forEach(function(val) {
    Quotetxt =  "<span class='fade-in'>"+'" ' + val.quote+"</span>";
    authortxt = "<span class='fade-in'>"+' -' +val.author+"</span>";
  });
  $("#QuoteId").html(Quotetxt);
  $("#authorId").html(authortxt);
  lastRnd = Rnd;
});

$("#T").on('click',function(){
  var text = $('#QuoteId').text() + '  -' + $("#authorId").text();
  var tweeturl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text);
  window.open(tweeturl,'_blank');
});
});

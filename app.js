(function(){
  var animalAlphabet = [ {sign: "A", 
                   word: "Ant", 
                   image:"./img/ant.png"
                   },

                   {sign: "B", 
                   word: "Bird", 
                   image:"./img/bird.png"
                   },

                   {sign: "C", 
                   word: "Cat", 
                   image:"./img/cat.png"
                   },

                   {sign: "D", 
                   word: "Dog", 
                   image:"./img/dog.png"
                   },

                  {sign: "E", 
                   word: "Elephant", 
                   image:"./img/elephant.png"
                   },

                   {sign: "F", 
                   word: "Frog", 
                   image:"./img/frog.png"
                   },

                   {sign: "G", 
                   word: "Giraffe", 
                   image:"./img/giraffe.png"
                   },

                   {sign: "H", 
                   word: "Horse", 
                   image:"./img/horse.png"
                   },

                   {sign: "I", 
                   word: "Iguana", 
                   image:"./img/iguana.png"
                   },

                   {sign: "J", 
                   word: "Jelly Fish", 
                   image:"./img/jellyfish.png"
                   },

                   {sign: "K", 
                   word: "Kangaroo", 
                   image:"./img/kangaroo.png"
                   },

                   {sign: "L", 
                   word: "Llama", 
                   image:"./img/llama.png"
                   },

                   {sign: "M", 
                   word: "Moose", 
                   image:"./img/moose.png"
                   },

                   {sign: "N", 
                   word: "Narwhal", 
                   image:"./img/narwhal.png"
                   },

                   {sign: "O", 
                   word: "Octopuss", 
                   image:"./img/octopuss.png"
                   },

                   {sign: "P", 
                   word: "Penguin", 
                   image:"./img/penguin.png"
                   },

                   {sign: "Q", 
                   word: "Quail", 
                   image:"./img/quail.png"
                   },

                   {sign: "R", 
                   word: "Racoon", 
                   image:"./img/racoon.png"
                   },

                   {sign: "S", 
                   word: "Snake", 
                   image:"./img/snake.png"
                   },

                   {sign: "T", 
                   word: "Turtle", 
                   image:"./img/turtle.png"
                   },

                   {sign: "U", 
                   word: "Unicorn", 
                   image:"./img/unicorn.png"
                   },

                   {sign: "V", 
                   word: "Vulture", 
                   image:"./img/vulture.png"
                   },

                   {sign: "W", 
                   word: "Whale", 
                   image:"./img/whale.png"
                   },

                   {sign: "X", 
                   word: "X-ray Fish", 
                   image:"./img/xrayfish.png"
                   },

                   {sign: "Y", 
                   word: "Yak", 
                   image:"./img/yak.png"
                   },

                   {sign: "Z", 
                   word: "Zebra", 
                   image:"./img/zebra.png"
                   }
                ]
  var alphaIndex = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

  var app = angular.module('alphabetGame',[ ]);


  app.controller("GameController", function(){
    var shuffle = function(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    };
    var shuffledAlpha = shuffle(alphaIndex)
    var primaryIndex = shuffledAlpha[0]
    var letters = animalAlphabet

    this.incorrect = false
    this.correct = false
    this.stats = false
    this.correctCount = 0
    this.incorrectCount = 0
    this.incorrectGuess = {}
    this.primary = letters[primaryIndex]
    this.letters = shuffle([this.primary, letters[shuffledAlpha[1]], letters[shuffledAlpha[2]],letters[shuffledAlpha[3]] ])

    this.checkGuess = function (letter){ 
      if (letter.sign == this.primary.sign) {
        this.correct = true
        this.correctCount++
        var newshuffle = shuffle(alphaIndex)
        var newprimary = newshuffle[0]
        this.primary = letters[newprimary]
        this.letters = shuffle([this.primary, letters[shuffledAlpha[1]], letters[shuffledAlpha[2]],letters[shuffledAlpha[3]] ])
      } else {
        this.incorrect = true
        this.incorrectCount++
        if (this.incorrectGuess[this.primary.sign] >= 1){
          this.incorrectGuess[this.primary.sign]++
        } else {
          this.incorrectGuess[this.primary.sign] = 1
        }
      };
    };

    this.showStats = function () {
      this.stats = true
    }

    this.hideResponse = function () {
      this.incorrect = false
      this.correct = false
      this.stats = false
    }

  });
  
})();
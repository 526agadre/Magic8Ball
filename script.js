let userName = prompt("Greetings, whats is your name?")
//Input

let responseIMG = document.getElementById('response-img')
let responseText = document.getElementById('response-text')
let greeting = document.getElementById('greeting')

userName ? (greeting.innerText= `Hello, ${userName}!` )
: (greeting.innerText= 'Hello Stranger')


function shakeMagic8Ball(){
    let userQuestion = prompt("What Do You Want To Ask The Bear?")
    console.log(userQuestion);
    
    //DO NOT TOUCH
    let randomNumber = Math.floor(Math.random()* 8);
    let eightBall = '';
    let imageChoice = ''
    
    switch (randomNumber) {
      case 0:
          eightBall = 'Yes';
          imageChoice = 'IMGS/FrontFacingDjungelskog.png'
        break;
      case 1:  
        eightBall = 'It is certain';
        imageChoice = 'IMGS/FrontFacingDjungelskog.png'
        break;
      case 2:
          eightBall = 'It is decidedly so';
          imageChoice = 'IMGS/FrontFacingDjungelskog.png'
        break;
      case 3:
          eightBall = 'Your speaking is incoherent, reply again';
          imageChoice = 'IMGS/FrontFacingDjungelskog.png'
        break;
      case 4:
          eightBall = 'Cannot predict now';
          imageChoice = 'IMGS/FrontFacingDjungelskog.png'
        break;
      case 5:
          eightBall = 'Unlikely';
          imageChoice = 'IMGS/FrontFacingDjungelskog.png'
        break;
      case 6:
          eightBall = 'No';
          imageChoice = 'IMGS/FrontFacingDjungelskog.png'
        break;
      case 7:
          eightBall = 'It is Beyond My Understanding';
          imageChoice = 'IMGS/FrontFacingDjungelskog.png'
        break;
      case 8:
        eightBall = 'It Seems To Be So';
        imageChoice = 'IMGS/FrontFacingDjungelskog.png'
        break;
        
    }
    
    console.log(eightBall)

   responseText.innerText = `${userName} Has Asked ${userQuestion} To The Almighty Djungelskog. The Bear Replies ${eightBall}!`

   responseIMG.src = imageChoice
}
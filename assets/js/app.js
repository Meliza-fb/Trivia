//api url generated= https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=boolean
//Para comenzar a usar la API de Open Trivia DB, use esta URL:https://opentdb.com/api.php?amount=10
//token = https://opentdb.com/api.php?amount=10&token=YOURTOKENHERE

fetch('https://opentdb.com/api.php?amount=15&category=22&difficulty=easy&type=multiple')
.then(function(response){
  console.log(response);
  return response.json();
})
.then(function(data){
  console.log(data);

  let answerCorrect= 0;
  let counterObj= 0;

  $('#option-multiple').on('click', function(){

    let category= data.results[counterObj].category;
    let type= data.results[counterObj].type;
    let difficulty= data.results[counterObj].difficulty;
    let question= data.results[counterObj].question;
    let answers= [];

  answers.push(data.results[counterObj].correct_answer);
  answers.push(data.results[counterObj].incorrect_answers[0])
  answers.push(data.results[counterObj].incorrect_answers[1])
  answers.push(data.results[counterObj].incorrect_answers[2])
  answers.sort();

  $('.Date').append(`<h4> Category: ${category} </h4>`)

});


});

//define functions here
function getIt() {
  $('p').on('click', function(){
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function(){
    $(this).addClass('tasty');
  })
}

function pressIt() {
  $('#typing').on('keydown', function(){
    if (key.which == 82){
      alert('r was pressed');
    }
  });
}

function submitIt() {
  $('form').on('submit', function(){
    alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){

// call functions here

});

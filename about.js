console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("form successfully submited!")
	// console.log('form submit');
}



let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


function imgMessage(mouseEvent){
	mouseEvent.preventDefault();
	alert("you are as handsome as this dapper duck")
}

let duck = document.querySelector('#duck')
duck.addEventListener('mouseover',imgMessage)


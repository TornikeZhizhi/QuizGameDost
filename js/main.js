
let question = document.getElementById('question');
let input = document.getElementById('input');
let next = document.getElementById('next');


let now = document.getElementById('now');
let sum = document.getElementById('sum');



var quest = [

"რომელ წელს დაიბადა თეოდორ დოსტოევსკი?",
"რა ერქვა მის პირველ შვილს?",
"გარდაცვალების წელი",
"პირველი ცოლი"

]

var Answers = [

	"1821",
	"ალიოშა",
	"1881",
	'ანა'
]


sum.innerHTML = 35
now.innerHTML = 1;





function defaultQeustion(){
	question.innerHTML = quest[0];

}

defaultQeustion()


var index = 0;
var nowIndex = 1;

next.addEventListener("click",function(){


	if (nowIndex == Answers.length) {
		console.log("you win")
	}
	var str = input.value.replace(/\s/g, '')

	if (str == Answers[index]) {

			nowIndex++;
			now.innerHTML = nowIndex;

			input.value = ''
			index++;
			question.innerHTML = quest[index];
			input.classList.remove('error')
		
	}else {
		if (input.value.length > 0) {

		input.classList.add('error');
		input.classList.add('shake');

		setTimeout(function(){
		input.classList.remove('shake');

		},700)
		}
		if (input.value.length == 0) {
		input.classList.add('shake');
					setTimeout(function(){
		input.classList.remove('shake');

		},700)	
		}
	}
})

input.addEventListener("keyup",function(){

	 
	if (this.value.length ==0) {
		
			input.classList.remove('error');
	}

})



window.addEventListener("keyup",function(event){

	if (event.which == 13) {

		next.click()
	}

})

var audio = new Audio("music/Moonlight.mp3");
audio.play()

audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

$(".test").geokbd()



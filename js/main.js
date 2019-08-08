
let question = document.getElementById('question');
let input = document.getElementById('input');
let next = document.getElementById('next');


let now = document.getElementById('now');
let sum = document.getElementById('sum');



var quest = [

"რომელ წელს დაიბადა?",
"რა ერქვა მის პირველ შვილს?",
"როდის გარდაიცვალა"

]

var Answers = [

	"1821",
	"ალიოშა",
	"1881"
]


sum.innerHTML = quest.length
now.innerHTML = 1;





function defaultQeustion(){
	question.innerHTML = quest[0];

}

defaultQeustion()


var index = 0;
var nowIndex = 1;

next.addEventListener("click",function(){

	console.log(Answers[index])
	console.log(input.value)
	if (input.value == Answers[index]) {

			nowIndex++;
			now.innerHTML = nowIndex;

			input.value = ''
			index++;
			question.innerHTML = quest[index];
		
	}else {

	}
})







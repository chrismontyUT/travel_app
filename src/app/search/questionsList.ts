type answer = {
	answerTitle: string;
	imagePath: string;

}
export class Question{
	questionTitle: string;
	answerList: answer[];

	constructor(questionTitle:string , answerList:answer[]){
		this.questionTitle = questionTitle;
		this.answerList = answerList;

	}
}

export const questionList: Question[] = [
	new Question(
	'Where Are You Going?',
	[	{answerTitle: 'North America' , imagePath: ''} ,
	 	{answerTitle: 'South America' ,imagePath: ''} ,
	 	{answerTitle: 'Central America', imagePath: ''},
	  	{answerTitle: 'Caribbean', imagePath: ''},
	 	{answerTitle: 'Africa' , imagePath: ''},
	  	{answerTitle: 'Middle East' , imagePath: ''},
	  	{answerTitle: 'Europe' , imagePath: ''},
	  	{answerTitle: 'Asia' , imagePath: ''},
	  	{answerTitle: 'Oceania' , 'imagePath': ''},
	  	{answerTitle: 'Arctic/Antarctic',imagePath: ''}
	]
	)/*,
new Question(
	'What Type of Scuba Diving Would You Like To Do?',
	[	{answerTitle: 'Open Water Diving', imagePath: ''},
		{answerTitle: 'Coral Reef Diving', imagePath: ''},
		{answerTitle: 'Ice Diving' , imagePath: '../../assets/images/scubatypes/iceDive.jpg'},
		{answerTitle: 'Cave Diving', imagePath: ''},
		{answerTitle: 'Wreck Diving', imagePath: ''}
	]
),
new Question(
	'What Animals Would You Like to See?',
	[	{answerTitle: 'Great White Shark' , imagePath: ''} ,
	 	{answerTitle: 'Bottlenose Dolphin' ,imagePath: ''} ,
	 	{answerTitle: 'Hammerhead Shark', imagePath: ''},
	 	{answerTitle: 'Blue Whale', imagePath: ''},
	 	{answerTitle: 'Sperm Whale' , imagePath: ''},
	 	{answerTitle: 'Whale Shark' , imagePath: ''},
	 	{answerTitle: 'Loggerhead Turtl' , imagePath: ''},
     	{answerTitle: 'Jellyfish' , imagePath: ''},
     	{answerTitle: 'Killer Whale' , imagePath: ''},
	  	{answerTitle: 'Seal',imagePath: ''}
	]
)*/]

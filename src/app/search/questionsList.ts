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
	[	{answerTitle: 'North America' , imagePath: '../../assets/images/regions/northAmerica.jpg'} ,
	 	{answerTitle: 'South America' ,imagePath: '../../assets/images/regions/southAmerica.jpg'} ,
	 	{answerTitle: 'Central America', imagePath: '../../assets/images/regions/centralAmerica.jpg'},
	  	{answerTitle: 'Caribbean', imagePath: '../../assets/images/regions/caribbean.jpg'},
	 	{answerTitle: 'Africa' , imagePath: '../../assets/images/regions/africa.jpg'},
	  	{answerTitle: 'Middle East' , imagePath: '../../assets/images/regions/middleEast.jpg'},
	  	{answerTitle: 'Europe' , imagePath: '../../assets/images/regions/europe.jpg'},
	  	{answerTitle: 'Asia' , imagePath: '../../assets/images/regions/asia.jpg'},
	  	{answerTitle: 'Oceania' , 'imagePath': '../../assets/images/regions/oceania.jpg'},
	  	{answerTitle: 'Arctic/Antarctic',imagePath: '../../assets/images/regions/arctics.jpg'}
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
	 	{answerTitle: 'Manta Ray' , imagePath: ''},
	 	{answerTitle: 'Whale Shark' , imagePath: ''},
	 	{answerTitle: 'Loggerhead Turtle' , imagePath: ''},
     	{answerTitle: 'Jellyfish' , imagePath: ''},
     	{answerTitle: 'Killer Whale' , imagePath: ''},
	  	{answerTitle: 'Seal',imagePath: ''}
	]
)*/]

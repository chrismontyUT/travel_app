type answer = {
	answerTitle: string;
	imagePath: string;

}
export class Question{
	questionID: number;
	questionTitle: string;
	answerList: answer[];

	constructor(questionID: number , questionTitle:string , answerList:answer[]){
		this.questionID = questionID;
		this.questionTitle = questionTitle;
		this.answerList = answerList;
	}
}

export const questionList: Question[] = [
	new Question(
	1,
	'Where Are You Going?',
	[	{answerTitle: 'North America' , imagePath: '../../assets/images/regions/northAmerica.jpg'} ,
	 	{answerTitle: 'South America' ,imagePath: '../../assets/images/regions/southAmerica.jpg'} ,
	 	{answerTitle: 'Central America', imagePath: '../../assets/images/regions/centralAmerica.jpg'},
	  	{answerTitle: 'Caribbean', imagePath: '../../assets/images/regions/caribbean.jpg'},
	 	{answerTitle: 'Africa' , imagePath: '../../assets/images/regions/africa.jpg'},
	  	{answerTitle: 'Middle East' , imagePath: '../../assets/images/regions/middleEast.jpg'},
	  	{answerTitle: 'Europe' , imagePath: '../../assets/images/regions/europe.jpg'},
	  	{answerTitle: 'Asia' , imagePath: '../../assets/images/regions/asia.jpg'},
	  	{answerTitle: 'Oceania' , imagePath: '../../assets/images/regions/oceania.jpg'},
	  	{answerTitle: 'Arctic/Antarctic',imagePath: '../../assets/images/regions/arctics.jpg'}
	]
	),
new Question(
	2,
	'What Type of Scuba Diving Would You Like To Do?',
	[	{answerTitle: 'Open Water Diving', imagePath: '../../assets/images/scubatypes/openOcean.jpg'},
		{answerTitle: 'Coral Reef Diving', imagePath: '../../assets/images/scubatypes/reef.jpg'},
		{answerTitle: 'Ice Diving' , imagePath: '../../assets/images/scubatypes/iceDive.jpg'},
		{answerTitle: 'Cave Diving', imagePath: '../../assets/images/scubatypes/caveDive.jpg'},
		{answerTitle: 'Wreck Diving', imagePath: '../../assets/images/scubatypes/wreckDive.jpg'}
	]
),
new Question(
	3,
	'What Animals Would You Like to See?',
	[	{answerTitle: 'Great White Shark' , imagePath: '../../assets/images/animals/greatWhite.jpg'} ,
	 	{answerTitle: 'Bottlenose Dolphin' ,imagePath: '../../assets/images/animals/dolphin.jpg'} ,
	 	{answerTitle: 'Hammerhead Shark', imagePath: '../../assets/images/animals/hammerHead.jpg'},
	 	{answerTitle: 'Humpback Whale', imagePath: '../../assets/images/animals/humpBack.jpg'},
	 	{answerTitle: 'Manta Ray' , imagePath: '../../assets/images/animals/mantaRay.jpg'},
	 	{answerTitle: 'Whale Shark' , imagePath: '../../assets/images/animals/whaleShark.jpg'},
	 	{answerTitle: 'Loggerhead Turtle' , imagePath: '../../assets/images/animals/loggerHead.jpg'},
     	{answerTitle: 'Jellyfish' , imagePath: '../../assets/images/animals/jellyFish.jpg'},
     	{answerTitle: 'Killer Whale' , imagePath: '../../assets/images/animals/orca.jpg'},
	  	{answerTitle: 'Seal',imagePath: '../../assets/images/animals/seal.jpg'}
	]
)]

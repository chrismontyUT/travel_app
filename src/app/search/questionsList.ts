import { Question } from '../shared/utils'



export const questionList: Question[] = [
	new Question(
	1,
	'Where Are You Going?',
	[	{answerTitle: 'North America' , altTitle: 'NAmerica', imagePath: '../../assets/images/regions/northAmerica.jpg'} ,
	 	{answerTitle: 'South America' , altTitle: 'SAmerica', imagePath: '../../assets/images/regions/southAmerica.jpg'} ,
	 	{answerTitle: 'Central America', altTitle: 'CAmerica', imagePath: '../../assets/images/regions/centralAmerica.jpg'},
	  	{answerTitle: 'Caribbean', imagePath: '../../assets/images/regions/caribbean.jpg'},
	 	{answerTitle: 'Africa' , imagePath: '../../assets/images/regions/africa.jpg'},
	  	{answerTitle: 'Middle East' , altTitle: 'Mideast', imagePath: '../../assets/images/regions/middleEast.jpg'},
	  	{answerTitle: 'Europe' , imagePath: '../../assets/images/regions/europe.jpg'},
	  	{answerTitle: 'Asia' , imagePath: '../../assets/images/regions/asia.jpg'},
	  	{answerTitle: 'Oceania' , imagePath: '../../assets/images/regions/oceania.jpg'},
	  	{answerTitle: 'Arctic/Antarctic', altTitle: 'Arctics', imagePath: '../../assets/images/regions/arctics.jpg'}
	]
	),
new Question(
	2,
	'What Type of Scuba Diving Would You Like To Do?',
	[	{answerTitle: 'Open Water', altTitle: 'Open', imagePath: '../../assets/images/scubatypes/openOcean.jpg'},
		{answerTitle: 'Coral Reef', altTitle: 'Coral', imagePath: '../../assets/images/scubatypes/reef.jpg'},
		{answerTitle: 'Ice' , imagePath: '../../assets/images/scubatypes/iceDive.jpg'},
		{answerTitle: 'Cave', imagePath: '../../assets/images/scubatypes/caveDive.jpg'},
		{answerTitle: 'Wreck', imagePath: '../../assets/images/scubatypes/wreckDive.jpg'}
	]
),
new Question(
	3,
	'What Animals Would You Like to See?',
	[	{answerTitle: 'Great White', altTitle: 'GreatWhite', imagePath: '../../assets/images/animals/greatWhite.jpg'} ,
	 	{answerTitle: 'Dolphin' ,imagePath: '../../assets/images/animals/dolphin.jpg'} ,
	 	{answerTitle: 'Hammerhead', imagePath: '../../assets/images/animals/hammerHead.jpg'},
	 	{answerTitle: 'Humpback', imagePath: '../../assets/images/animals/humpBack.jpg'},
	 	{answerTitle: 'Manta Ray' , altTitle: 'MantaRay', imagePath: '../../assets/images/animals/mantaRay.jpg'},
	 	{answerTitle: 'Whale Shark' , altTitle: 'WhaleShark', imagePath: '../../assets/images/animals/whaleShark.jpg'},
	 	{answerTitle: 'Turtle' , imagePath: '../../assets/images/animals/loggerHead.jpg'},
     	{answerTitle: 'Jellyfish' , imagePath: '../../assets/images/animals/jellyFish.jpg'},
     	{answerTitle: 'Killer Whale' , altTitle: 'Orca', imagePath: '../../assets/images/animals/orca.jpg'},
	  	{answerTitle: 'Seal',imagePath: '../../assets/images/animals/seal.jpg'}
	]
)]

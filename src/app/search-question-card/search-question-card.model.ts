export class searchQuestionCard{

	cardTitle: string;
	imagePath: string;
	selected: boolean = false;

	constructor(cardTitle: string, imagePath: string){

		this.cardTitle = cardTitle;
		this.imagePath = imagePath;

	}
}

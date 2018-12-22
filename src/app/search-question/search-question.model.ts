//import {} from

export class searchQuestionResults{

	questionID: number;
	answerList: Array<string> = [];

	constructor(questionID: number){
		this.questionID = questionID;
	}
}

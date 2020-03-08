export type answer = {
	answerTitle: string;
	altTitle?: string;
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

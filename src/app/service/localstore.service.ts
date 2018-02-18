export class Localstore {
	
	constructor() {}

	saveTo = function (name: string, data: object | string) : void {
		let text: string;
		if(typeof data !== "string"){
			text = JSON.stringify(data);
		} else {
			text = data;
		}

	    localStorage.setItem(name, text);
	}

	getFrom = function(name: string) : string | object | null{
		if(localStorage[name]){
	        if(localStorage[name][0] === '{' || localStorage[name][0] === '['){
	        	return JSON.parse( localStorage[name] );
	        } else {
	        	return localStorage[name];
	        }
	    }
	    return null;
	}

	convertToCsv = function(data : object[]): string {
		let separator = "\t";
		let nextRow = "\r\n";
		let stringData = "";

		if(data.length && data[0]){
			let listOfName = [];
			for(let key in data[0]){
				if(data[0].hasOwnProperty(key)){
					listOfName.push(key)
				}
			}

			for(let i = 0; i < listOfName.length; i++){
				stringData +=  listOfName[i] + (listOfName.length === i+1 ? nextRow : separator);
			}


			for(let j = 0; j < data.length; j++){

				for(let i = 0; i < listOfName.length; i++){
					stringData +=  data[j][listOfName[i] ] + (listOfName.length === i+1 ? nextRow : separator);
				}

			}


		}

		return stringData;
	}

	fromCsvToArray = function(data: string): object[]{
		let allData = [];
		let separator = "\t";
		let nextRow = "\r\n";
		let splitRow: string[] = data.split(nextRow);

		let listOfName = splitRow[0].split(separator);

		for(let i = 1; i < splitRow.length - 1; i++){
			let arrayOfValue = splitRow[i].split(separator);
			let objWithData = {};
			for(let j = 0; j < arrayOfValue.length; j++){
				objWithData[ listOfName[j] ] = arrayOfValue[j];
			}

			allData.push(objWithData);

		}

		return allData;
	}

	getUser = function(): string{
		return this.getFrom("user");
	}

	setUser = function(data: string): void{
		this.saveTo("user", data);
	}

	getColleagues = function(): object[]{
		return this.getFrom("collegs");
	}

	setColleagues = function(data: object[]): void{
		this.saveTo("collegs", data);
	}

	getProjects = function(): object[]{
		return this.getFrom("projects");
	}

	setProjects = function(data: object[]): void{
		this.saveTo("projects", data);
	}

	getTasks = function(): object[]{
		return this.getFrom("tasks");
	}

	setTasks = function(data: object[]): void{
		this.saveTo("tasks", data);
	}

	getAllList = function(): object[]{
		return this.getFrom("track");
	}

	setAllList = function(data: object[]): void{
		this.saveTo("track", data);
	}

}	
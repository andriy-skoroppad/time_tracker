import { Injectable } from '@angular/core';

@Injectable()
export class FileLocalService {

  constructor() { }

  link: HTMLAnchorElement = (document.createElement("a") as HTMLAnchorElement) ;
  openFile: HTMLInputElement = ( document.createElement("input") as HTMLInputElement );

  openLocalFile (): any{
    this.openFile.type = "file";
    this.openFile.click();
    let openFile: HTMLInputElement = this.openFile;

    let promise = new Promise((resolve, reject) => {
      let onFileLoad = function (e): any{
        openFile.removeEventListener('change', onFileLoad);

        let file = openFile.files[0];
        let textType = /.*.*/;

        if (file.type.match(textType)) {
          var reader = new FileReader();

          reader.onload = function(e) {
            var text = reader.result;
            openFile.value = '';
            resolve(JSON.parse(text));
          };

          reader.readAsText(file);

        } else {
          reject();
          //console.log("File not supported!");
        };
      };

      this.openFile.addEventListener('change', onFileLoad)
    });
    return promise;
  }


  prepareFileForDownload (data, name: string, isNotJson?): void{
    let text: string;
    if(isNotJson){
      text = data;
    } else {
      text = JSON.stringify(data);
    }

    if(this.link){
      this.link.download = name || "file.json";
      this.link.href = 'data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(text);
      this.link.click();
    }

  }

}

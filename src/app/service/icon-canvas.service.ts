import { Injectable } from '@angular/core';

@Injectable()
export class IconCanvasService {

  constructor() { }
  canvas: HTMLCanvasElement = document.createElement("canvas");

  generateCanvasURL (top: string, bottom: string): any{
    this.canvas.height = 16;
    this.canvas.width = 16;
    var ctx = this.canvas.getContext('2d');
    ctx.font = '10px serif';
    ctx.fillText( top, 0, 7);
    ctx.fillStyle = "#565656";
    ctx.font = '10.5px serif';

    ctx.fillStyle = "#000";
    ctx.fillText( bottom, 3, 16);
    return this.canvas.toDataURL();
  }


}

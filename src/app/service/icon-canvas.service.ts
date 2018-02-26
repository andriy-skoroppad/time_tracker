import { Injectable } from '@angular/core';

@Injectable()
export class IconCanvasService {

  constructor() { }
  canvas: HTMLCanvasElement = document.createElement("canvas");

  generateCanvasURL (top: string, bottom: string): any{
    this.canvas.height = 16;
    this.canvas.width = 16;
    var ctx = this.canvas.getContext('2d');
    ctx.font = '9px serif';
    ctx.fillText(top, 0, 8);
    ctx.fillText(bottom, 5, 15);
    return this.canvas.toDataURL();
  }


}

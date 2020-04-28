import { Injectable } from '@angular/core';
import { Tools } from '../tools.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  private tools: Tools;

  constructor( private _http: HttpClient) {
  }

  public getTools() {
    return this._http.get('https://jmmcdesign-6a835.firebaseio.com/tools.json');
  }
}

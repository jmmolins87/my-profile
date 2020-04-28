import { Component } from '@angular/core';
import { ToolsService } from '../../interfaces/services/tools.service';
import { Tools } from '../../interfaces/tools.interface';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {

  tools: Tools;
  public isCollapsed = false;

  constructor( private _tools: ToolsService ) {

    this._tools.getTools().subscribe( ( dataTools: Tools ) => {
      this.tools = dataTools;
    });
  }

}

import { Component } from '@angular/core';
import { ToolsService } from '../../interfaces/services/tools.service';
import { Tools } from '../../interfaces/tools.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {

  tools: Tools;
  public isCollapsed = -1;

  constructor( private _tools: ToolsService,
               private router: Router ) {

    this._tools.getTools().subscribe( ( dataTools: Tools ) => {
      this.tools = dataTools;
    });
  }

  goToTools() {
    this.router.navigate(['/tools'], { fragment: 'tools' });
  }

}

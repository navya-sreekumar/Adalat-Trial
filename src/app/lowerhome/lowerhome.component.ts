import { Component } from '@angular/core';
import { LowernavComponent } from '../lowernav/lowernav.component';
import { LowerchartComponent } from '../lowerchart/lowerchart.component';
import { LowerNewCasesComponent } from '../lower-new-cases/lower-new-cases.component';

@Component({
  selector: 'app-lowerhome',
  standalone: true,
  imports: [LowernavComponent,LowerchartComponent,LowerNewCasesComponent],
  templateUrl: './lowerhome.component.html',
  styleUrl: './lowerhome.component.css'
})
export class LowerhomeComponent {

}

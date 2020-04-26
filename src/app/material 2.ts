import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    MatProgressBarModule,
    MatExpansionModule
  ],
  exports: [
    MatProgressBarModule,
    MatExpansionModule
  ]
})

export class MaterialModule{ }
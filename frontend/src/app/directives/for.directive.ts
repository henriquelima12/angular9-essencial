import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective implements OnInit{
  @Input("appForEm") numbers: number[] = [];

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {
    console.log('appFor')
   }

   ngOnInit(): void{
     for(let number of this.numbers){
       this.container.createEmbeddedView(this.template, { $implicit: number })
     }
   }

}

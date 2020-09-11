import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[cnMyStruct]'
})
export class MyStructDirective implements OnInit {
  @Input() cnMyStruct: boolean;
  constructor(private template: TemplateRef<any>, private vcr: ViewContainerRef) { }

  ngOnInit(): void {
    if(this.cnMyStruct) {
      this.vcr.createEmbeddedView(this.template)
    }
  }

}

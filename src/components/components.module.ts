import { NgModule } from '@angular/core';
import { ListExpandableComponent } from './list-expandable/list-expandable';
import { AccordionMenuComponent } from './accordion-menu/accordion-menu';
@NgModule({
    declarations: [
        ListExpandableComponent,
        AccordionMenuComponent
    ],
    
    imports: [],
    
    exports: [
        ListExpandableComponent,
        AccordionMenuComponent
    ]
})
export class ComponentsModule { }

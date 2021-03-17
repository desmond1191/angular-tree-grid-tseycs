import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {AngularTreeGridModule} from 'angular-tree-grid';
import { AppRoutingModule } from './app-routing';
import { BasicTreeGridComponent } from './components/Examples/BasicTreeGridComponent';
import { AddEditDeleteComponent } from './components/Examples/AddEditDeleteComponent';
import { CondRowEditComponent } from './components/Examples/CondRowEditComponent';
import { CustomViewComponent } from './components/Examples/CustomViewComponent';
import { FilterComponent } from './components/Examples/Filter.component';
import {CustomCellViewComponent} from './components/Custom/CustomCellViewComponent';
import { EditDeleteResolverComponent } from './components/Examples/EditDeleteResolver.component';
import { CustomEditorComponent } from './components/Examples/CustomEditor.component';
import {AgeComponent} from './components/Custom/Age.component';
import { SelectionComponent } from './components/Examples/Selection.component';
import { SubgridComponent } from './components/Examples/Subgrid.component';
import { DynamicChildrenComponent } from './components/Examples/DynamicChildren.component';
import { SpecificExpandCollapseComponent } from './components/Examples/SpecificExpandCollapse.component';
import { SummaryRowComponent } from './components/Examples/SummaryRow.component';
import { TestCustomComponent } from './components/Custom/TestCustomComponent';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AngularTreeGridModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    BasicTreeGridComponent,
    TestCustomComponent,
    AddEditDeleteComponent,
    CondRowEditComponent,
    CustomViewComponent,
    CustomCellViewComponent,
    EditDeleteResolverComponent,
    FilterComponent,
    CustomEditorComponent,
    AgeComponent,
    SelectionComponent,
    SubgridComponent,
    DynamicChildrenComponent,
    SpecificExpandCollapseComponent,
    SummaryRowComponent
  ],
  bootstrap:    [ AppComponent ],
  entryComponents: [AgeComponent, TestCustomComponent]
})
export class AppModule { }

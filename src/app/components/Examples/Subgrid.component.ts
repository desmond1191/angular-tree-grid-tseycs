import { Component, ViewChild, ElementRef } from '@angular/core';
import {CustomCellViewComponent} from './../Custom/CustomCellViewComponent';

@Component({
  selector: 'app-subgrid-grid',
  template: `
    <h2>Angular Subgrid Component</h2>
    <db-angular-tree-grid 
    (expand)="onExpand($event)"
    [data]="data" 
    [configs]="configs">
    </db-angular-tree-grid>
    <p>
    Basically on expand of the row, Child-rows will be loaded to the grid. An Ajax can be called for the same. Rows will be added only when resolve is called by passing child rows as an argument on expand event. <br>
    <code>
      "e.resolve(data)"
    </code>See below code for more details.
    </p>
    <p>
    <b>Note:</b> Add fearture is disabled for Subgrid for now. 
    </p>
    <iframe #iframe type="text/javascript" width="100%" height="400px" style="margin: 50px 0 0 0;border:0"></iframe> 
  `
})
export class SubgridComponent {
    data: any[] = [
      { id: 1, name: 'Expand & Collapse', age: 26, weight: 60, gender: 1, phone: 7930343463},
      { id: 2, name: 'Layout', age: 23, weight: 90, gender: 1, phone: 7930343463},
      { id: 3, name: 'Expand 1111', age: 26, weight: 60, gender: 1, phone: 7930343463, parent: 2},
      { id: 4, name: 'Layout 1111', age: 23, weight: 90, gender: 1, phone: 7930343463, parent: 2}
    ];
    subgrid_1: any = [
      { technology_id: 1, type: 'Anchors', technology: 'Input', experience: 2, parent: 3},
      { technology_id: 2, type: 'Min Size', technology: 'Input', experience: 3, parent: 3},
      // { technology_id: 3, type: 'Web', technology: 'CSS3', experience: 2, parent: 1},
      // { technology_id: 4, type: 'Web', technology: 'Javascript', experience: 6, parent: 1},
    ];

    subgrid_2: any = [
      { technology_id: 5, type: 'Anchors', technology: 'Angular', experience: 3, parent: 3},
      { technology_id: 6, type: 'Min Size', technology: 'HTML5', experience: 3, parent: 3},
      { technology_id: 7, type: 'Web', technology: 'CSS3', experience: 2, parent: 3},
      { technology_id: 8, type: 'Web', technology: 'Javascript', experience: 8, parent: 3},
    ];

    configs: any = {
    id_field: 'id',
    multi_select: false,
    parent_id_field: 'parent',
    parent_display_field: 'name',
    css: { // Optional
      expand_class: 'fa fa-caret-right',
      collapse_class: 'fa fa-caret-down',
    },
    columns: [
      {
        name: 'name',
        header: 'Name',
        editable: true
      },
      // {
      //   name: 'age',
      //   header: 'Age',
      //   editable: true,
      //   renderer: function(value) {
      //     return value + ' years';
      //   }
      // },
      // {
      //   name: 'weight',
      //   header: 'Weight'
      // },
      // {
      //   name: 'gender',
      //   header: 'Gender',
      //   renderer: function(value) {
      //     return value ? 'Male' : 'Female';
      //   }
      // },
      // {
      //   name: 'phone',
      //   header: 'Phone'
      // }
    ],
    subgrid: true,
    subgrid_config: {
      id_field: 'technology_id',
      show_summary_row: true,
      columns: [
        {
          name: 'type',
          header: 'Type'
        },
        {
          name: 'technology',
          header: 'Technology',
          // type: 'custom',
          // sortable: true,
          // component: CustomCellViewComponent,
          // summary_renderer: () => {
          //   return '<b>Total:</b>';
          // }
        },
        // {
        //   name: 'experience',
        //   header: 'Experience',
        //   sortable: true,
        //   renderer: function(value) {
        //     return value + ' years';
        //   },
        //   summary_renderer: (data) => {
        //     return data.map(rec => rec.experience).reduce((a, b) => a + b, 0) + ' years';
        //   }
        // }
      ]
    }
    };

    onExpand(e) {
      const row_data = e.data;
      e.resolve(this.subgrid_1);

      // e.resolve([]);
      console.log('expand', e);
      // if (row_data.id === 1) {
      //   setTimeout(() => {
      //     e.resolve(this.subgrid_1);
      //   }, 2000);
        
      // } else {
      //   setTimeout(() => {
      //     e.resolve(this.subgrid_2);
      //   }, 2000);
      // }
    }

    @ViewChild('iframe') iframe: ElementRef;
    gistUrl: String = "https://gist.github.com/debabratapatra/d6b44d0a02efe123ef9a122860e0ed9f.js";

    ngAfterViewInit() {
      const doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
        const content = `
            <html>
            <head>
              <base target="_parent">
            </head>
            <body>
            <script type="text/javascript" src="${this.gistUrl}"></script>
            </body>
          </html>
        `;
        doc.open();
        doc.write(content);
        doc.close();
    }
}
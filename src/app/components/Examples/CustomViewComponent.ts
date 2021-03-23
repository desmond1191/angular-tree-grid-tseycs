import { Component, ViewChild, ElementRef } from "@angular/core";
import { CustomCellViewComponent } from "./../Custom/CustomCellViewComponent";
import { TestCustomComponent } from "./../Custom/TestCustomComponent";
2;

@Component({
  selector: "app-view-tree-grid",
  template: `
    <h2>Custom View Component</h2>
    <db-angular-tree-grid
      (expand)="onExpand($event)"
      [data]="data"
      [configs]="configs"
    ></db-angular-tree-grid>
    <p>
      For Custom component, type of the column should be set to 'custom' and
      Custom Component should be set in component config of the Column. This
      component need to be added to the entryComponents of the module. See below
      for more details.
    </p>
    <iframe
      #iframe
      type="text/javascript"
      width="100%"
      height="400px"
      style="margin: 50px 0 0 0;border:0"
    ></iframe>
  `
})
export class CustomViewComponent {
  data: any = [
    {
      id: 1,
      name: { name: "Expand & Collapse", level: 0 },
      age: 0,
      weight: 60,
      gender: 1,
      phone: 7930343463,
      parent: 0
    },
    {
      id: 2,
      name: { name: "Hide item 1", level: 1 },
      age: 40,
      weight: 90,
      gender: 1,
      phone: 7930343463,
      parent: 1
    },
    {
      id: 3,
      name: { name: "item 2", level: 1 },
      age: 36,
      weight: 70,
      gender: 1,
      phone: 7930343463,
      parent: 1
    },
    {
      id: 4,
      name: { name: "sub item 2", level: 2 },
      age: 20,
      weight: 20,
      gender: 1,
      phone: 7930343463,
      parent: 3
    },
    {
      id: 5,
      name: { name: "item 3", level: 1 },
      age: 21,
      weight: 60,
      gender: 1,
      phone: 7930343463,
      parent: 3
    },

    {
      id: 6,
      name: { name: "Layout", level: 0 },
      age: 0,
      weight: 80,
      gender: 1,
      phone: 7930343463,
      parent: 34
    },
    {
      id: 7,
      name: { name: "Padding", level: 1 },
      age: 40,
      weight: 60,
      gender: 1,
      phone: 7930343463,
      parent: 6
    },
    {
      id: 8,
      name: { name: "padding-left", level: 2 },
      age: 36,
      weight: 60,
      gender: 1,
      phone: 7930343463,
      parent: 7
    },
    {
      id: 9,
      name: { name: "Border", level: 1 },
      age: 20,
      weight: 40,
      gender: 1,
      phone: 7930343463,
      parent: 6
    },
    {
      id: 10,
      name: { name: "border-top", level: 2 },
      age: 21,
      weight: 55,
      gender: 1,
      phone: 7930343463,
      parent: 9
    }
  ];

  configs: any = {
    id_field: "id",
    parent_id_field: "parent",
    parent_display_field: "name",
    css: {
      // Optional
      expand_class: "fa fa-caret-right",
      collapse_class: "fa fa-caret-down",
      add_class: "fa fa-plus"
    },
    columns: [
      {
        name: "name",
        header: "Name",
        type: "custom",
        editable: true,
        component: TestCustomComponent
      }
      // {
      //   name: 'age',
      //   header: 'Value',
      //   editable: true,
      //   renderer: function (val) {
      //     if (val === 0) {
      //       return '';
      //     } else {
      //       return val;
      //     }
      //   }
      // },
    ],
    subgrid: true,
    subgrid_config: {
      id_field: "technology_id",
      show_summary_row: true,
      columns: [
        {
          name: "type",
          header: "Type"
        },
        {
          name: "technology",
          header: "Technology"
        }
      ]
    }
  };

  subgrid_2: any = [
    { technology_id: 1, type: "Padding", technology: "Input", parent: 3 },
    { technology_id: 2, type: "padding-left", technology: "Input", parent: 3 },
    { technology_id: 3, type: "Border", technology: "Input", parent: 3 },
    { technology_id: 4, type: "border-top", technology: "Input", parent: 3 }
  ];

  onExpand(e) {
    const row_data = e.data;
    e.resolve(this.subgrid_2);

    // e.resolve([]);
    console.log("expand", e);
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

  @ViewChild("iframe") iframe: ElementRef;
  gistUrl: String =
    "https://gist.github.com/debabratapatra/cc25a390d722419c8fb296015fe9a13c.js";

  ngAfterViewInit() {
    const doc =
      this.iframe.nativeElement.contentDocument ||
      this.iframe.nativeElement.contentElement.contentWindow;
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

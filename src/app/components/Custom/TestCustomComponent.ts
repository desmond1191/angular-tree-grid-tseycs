import { Component, Input, OnInit } from "@angular/core";
@Component({
  selector: "app-test-custom-component",
  template: `
    <b *ngIf="cell_value.level == 0">{{ cell_value.name }}</b>
    <span *ngIf="cell_value.level != 0">{{ cell_value.name }}</span>
  `
})
export class TestCustomComponent implements OnInit{
  @Input()
  column: any;

  @Input()
  cell_value: string;

  ngOnInit(): void {
     console.log('row data', this.cell_value, this.column);
  }
}

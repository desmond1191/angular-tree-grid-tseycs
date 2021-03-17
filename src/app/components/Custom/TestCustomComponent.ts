import { Component, Input } from "@angular/core";
@Component({
  selector: "app-test-custom-component",
  template: `
    <b>{{ cell_value }}1111</b>
  `
})
export class TestCustomComponent {
  @Input()
  column: any;

  @Input()
  cell_value: string;
}

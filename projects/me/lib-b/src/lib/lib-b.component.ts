import { Component, OnInit } from "@angular/core";
import { LibAService } from "@me/lib-a";

@Component({
  selector: "lib-lib-b",
  template: `
    <p>
      lib-b works!
    </p>
  `,
  styles: []
})
export class LibBComponent implements OnInit {
  constructor(private libAService: LibAService) {}

  ngOnInit(): void {}
}

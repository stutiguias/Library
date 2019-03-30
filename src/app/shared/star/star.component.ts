import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.starWidth = (this.rating * 75) / 5;
  }

  @Input() rating: number;
  starWidth: number;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    this.notify.emit(`Este titulo tem ${this.rating} estrelas !`);
  }
}

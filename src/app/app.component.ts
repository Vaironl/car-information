import {Component} from '@angular/core';

// import {ngMo} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'All About Cars';
  introParagraph = 'Do you want to learn more about cars?';
  cars = ['Toyota', 'Honda', 'Mitsubishi', 'Subaru'];
}

import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {

  sir = 'Vairon';
  navHeaderTitle = 'All about cars';
  intro = 'Here are some cars that exist';
  carList = [
    ['Toyota Camry', 'Camry Link'],
    ['Toyota Yaris', 'Yaris Link'],
    ['Toyota Celica', 'Celica Link']
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

}

import {Route, PreloadingStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';

export class AppCustomPreloader  implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
      return route.data && route.data.preload ? load() : of(null);
    }
  }
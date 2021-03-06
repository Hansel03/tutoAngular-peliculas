import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(public _peliculasService: PeliculasService) {

        this._peliculasService.getPopulares()
            .subscribe(data => console.log(data));
    }
}

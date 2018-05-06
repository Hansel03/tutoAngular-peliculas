import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
import 'rxjs/Rx'; /*para utilizar el Map*/

@Injectable()
export class PeliculasService {


    private apiKey = '17204333c6c625d008251d95bb6731ca';
    private urlMoviedb = 'https://api.themoviedb.org/3';


    constructor(
        private jsonp: Jsonp
    ) { }


    getPopulares() {
        const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

        return this.jsonp.get(url)
            .map(res => res.json());
    }
}

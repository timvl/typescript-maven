import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from '../services/hero.service';


@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/myHeroes.html',
    styleUrls: ['app/css/myHeroes.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]

})
export class AppComponent implements OnInit {
    selectedHero:Hero;
    title = 'Tour of Heroes';
    heroes = [];

    constructor(private heroService:HeroService) {
    }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }
}

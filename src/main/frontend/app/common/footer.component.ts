/**
 * Created by serrut on 05/06/16.
 */

import {Component} from '@angular/core';


@Component({
    selector: 'footer-component',
    template: `
        <footer class="footer">
          <div class="container">
            <a class="text-muted" href="/">Dino De Waen, {{ year }}</a>
            <a class="text-muted" href="https://twitter.com/dinodewaen" target="_blank"><i class="fa fa-twitter"></i> @dinodewaen</a>
            <a class="text-muted" href="https://www.linkedin.com/in/dinodewaen" target="_blank"><i class="fa fa-linkedin"></i> Linkedin</a>
          </div>
        </footer>
    `,
    styles :[`
        footer {
            position: absolute;
            bottom : 0;
            width : 100%;
            height : 60px;
            background-color: whitesmoke;
        }

        .container {
            height : 60px;
        }

        a {
            height : 60px;
            line-height : 60px;
            margin-right : 5em;
        }
    `]
})

export class FooterComponent {

    private year:number = (new Date()).getFullYear();
}
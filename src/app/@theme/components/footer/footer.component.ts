import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="http://blog.yunplus.io" target="_blank">Wang3</a></b> 2020</span>
    <div class="socials">
      <a href="https://www.github.com/yfsoftocm" target="_blank" class="ion ion-social-github"></a>
    </div>
  `,
})
export class FooterComponent {
}

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  en=true;
  zh=false;
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'zh']); 
    translate.setDefaultLang('en'); 
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|zh/) ? browserLang : 'zh');
  }
  //切换语言
  changeLang(lang) {
	this.translate.use(lang);
  }
}

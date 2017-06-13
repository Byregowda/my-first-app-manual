import {NgModule} from '@angular/core' ;
import {BrowserModule} from '@angular/platform-browser' ;
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component' ;
import {SampleComponent} from './components/sample.component';

@NgModule({
	imports:[BrowserModule,FormsModule],
	declarations:[AppComponent,SampleComponent],
	bootstrap:[AppComponent]
})

export class AppModule{

}
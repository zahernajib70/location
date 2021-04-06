import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
//import {} from '@types/googlemaps';
@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD0L7QHc01j-BlhJfnxP26TsqWRQeWswBs'
    })
  ],
  providers: [],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
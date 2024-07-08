import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header.component';
import { UserComponent } from './app/user/user.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(HeaderComponent)
  .catch((err) => console.error(err));

  bootstrapApplication(UserComponent)
  .catch((err) => console.error(err));

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Content1Component } from './app/layout/share/content1/content1.component';


platformBrowserDynamic().bootstrapModule(AppModule)

.catch(err => console.error(err));

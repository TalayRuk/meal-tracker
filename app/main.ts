import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = plaatformBrowserDynamic();

platform.bootstrapModule(AppModule);

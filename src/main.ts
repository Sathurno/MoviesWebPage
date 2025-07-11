import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';  // Importa la configuración de la app

bootstrapApplication(AppComponent,appConfig)
  .catch((err) => console.error('Error al iniciar la aplicación', err));
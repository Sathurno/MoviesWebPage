import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';  // Importa la configuración de la app

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,  // Incluir todos los proveedores desde appConfig
    provideHttpClient(withFetch())  // Configura HttpClient, con soporte a fetch si es necesario
  ]
})
  .catch((err) => console.error('Error al iniciar la aplicación', err));
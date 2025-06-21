# MoviesWebPage

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Deployment on Vercel

This project is configured for deployment on Vercel with Server-Side Rendering (SSR).

### Prerequisites

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Make sure you have a Vercel account at [vercel.com](https://vercel.com)

### Deploy Steps

1. **Build the project locally** (optional, for testing):
```bash
npm run build:prod
```

2. **Deploy to Vercel**:
```bash
vercel
```

3. **Follow the prompts**:
   - Login to your Vercel account if not already logged in
   - Choose to link to existing project or create new one
   - Confirm the deployment settings

4. **For production deployment**:
```bash
vercel --prod
```

### Environment Variables

The project uses the following environment variables (already configured in the code):
- `apiKey`: Your TMDB API key
- `apiUrl`: TMDB API base URL
- `imageBaseUrl`: TMDB image base URL

### Automatic Deployments

Once connected to Vercel, every push to your main branch will automatically trigger a new deployment.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

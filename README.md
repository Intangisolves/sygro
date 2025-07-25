# Sygro Project

This project is a Next.js application designed to be deployed on Cloudflare Pages/Workers.

## Getting Started

Follow these instructions to set up and run the project locally, and to deploy it to Cloudflare.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (LTS version recommended)
- npm or pnpm (pnpm is used in this project's `package.json`)
- Wrangler CLI: `npm install -g wrangler`

### Local Development

1.  **Install Dependencies:**

    Navigate to the project root directory and install the required packages:

    ```bash
    pnpm install
    ```

2.  **Run the Development Server:**

    Start the Next.js development server:

    ```bash
    pnpm run dev
    ```

    This will typically start the application on `http://localhost:3000`.

3.  **Test Locally with Cloudflare Workers (Optional, for full emulation):**

    If you want to test the Cloudflare Workers environment locally, you can use the `cf-typegen` script to generate types for your `.dev.vars` and then run the preview:

    ```bash
    pnpm run cf-typegen
    pnpm run preview
    ```

    This will start a local server that emulates the Cloudflare Pages environment. The URL will be provided in the terminal output (e.g., `http://127.0.0.1:8788`).

### Building for Production

To build the project for production, run:

```bash
pnpm run build
```

This command will create an optimized build of your application in the `.next` directory.

### Hosting on Cloudflare Pages/Workers

This project uses `@opennextjs/cloudflare` for deployment to Cloudflare Pages/Workers. The `package.json` includes scripts for deployment.

1.  **Authentication (if not already logged in):**

    Ensure you are logged in to your Cloudflare account via Wrangler:

    ```bash
    wrangler login
    ```

2.  **Deploy to Cloudflare:**

    To deploy your application to Cloudflare Pages/Workers, use the `deploy` script:

    ```bash
    pnpm run deploy
    ```

    This command will build your project and deploy it to Cloudflare. The URL for your deployed application will be provided in the terminal output.

    Alternatively, you can use `upload` if you only want to upload the built assets without a full deployment:

    ```bash
    pnpm run upload
    ```

### Troubleshooting 404 Errors on Cloudflare Pages

If you encounter a 404 error after deploying to Cloudflare Pages, it might be due to routing issues. This project includes a `wrangler.toml` file with a redirect rule to help mitigate this:

```toml
# wrangler.toml
[[redirects]]
  from = "/*"
  to = "/"
  status = 200
```

This rule ensures that all requests are routed to the root of your application, which is a common solution for Next.js applications deployed on Cloudflare Pages. Ensure this file is present in your project root before deploying.

If the 404 persists, verify your Cloudflare Pages project settings, especially the build command and output directory, and check the Cloudflare Pages build logs for any errors.
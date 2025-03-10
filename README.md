# USDT FLASHER PRO Website

This is the official website for USDT FLASHER PRO, a cryptocurrency flashing tool.

## Features

- Responsive design for all devices
- Detailed product information
- Secure payment processing
- Contact form with email notifications
- WhatsApp integration for customer support

## Local Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode at [http://localhost:3000](http://localhost:3000)
- `npm run build`: Builds the app for production to the `build` folder
- `npm run server`: Runs the local server for email notifications (development only)

## Deployment to Netlify via GitHub

### Step 1: Push your code to GitHub

1. Initialize Git in your project (if not already done):
   ```bash
   cd usdt-flasher-pro
   git init
   ```

2. Add all files to Git:
   ```bash
   git add .
   ```

3. Commit the changes:
   ```bash
   git commit -m "Initial commit"
   ```

4. Add the remote repository:
   ```bash
   git remote add origin https://github.com/grandfranko4/usdtflasherpro.git
   ```

5. Push to GitHub:
   ```bash
   git push -u origin main
   ```
   (If your default branch is 'master' instead of 'main', use `git push -u origin master`)

### Step 2: Connect to Netlify

1. Go to [Netlify](https://app.netlify.com/) and sign in (create an account if you don't have one)
2. Click "New site from Git"
3. Select "GitHub" as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select the repository `grandfranko4/usdtflasherpro`
6. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
7. Click "Show advanced" and add the following environment variables:
   - `EMAIL_ADDRESS`: mikebtcretriever@gmail.com
   - `EMAIL_PASSWORD`: mysi okbf jzwy ohya
8. Click "Deploy site"

### Step 3: Configure Netlify Functions

1. After deployment, go to "Site settings" > "Functions" in your Netlify dashboard
2. Verify that the functions directory is set to `functions`
3. Go to "Build & deploy" > "Environment variables" and make sure your email credentials are set:
   - `EMAIL_ADDRESS`: mikebtcretriever@gmail.com
   - `EMAIL_PASSWORD`: mysi okbf jzwy ohya

### Step 4: Update Functions to Use Environment Variables

For better security, the functions should use environment variables instead of hardcoded credentials. The functions have been updated to use these environment variables.

### Step 5: Verify Deployment

1. Once deployed, Netlify will provide you with a URL (e.g., https://your-site-name.netlify.app)
2. Visit the site and test the contact form and payment process to ensure email notifications are working

## Troubleshooting Email Notifications

If email notifications aren't working:

1. Check Netlify Function logs in the Netlify dashboard under "Functions"
2. Verify that environment variables are correctly set
3. Make sure the Gmail account has "Less secure app access" enabled or is using an App Password
4. Test the functions locally using Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify dev
   ```

## License

All rights reserved. This code is proprietary and confidential.

# Email Notification Setup Guide

This guide will help you set up email notifications for your USDT FLASHER PRO website. The website uses Netlify Functions to send email notifications when users submit the contact form or complete a payment.

## Issue: Not Receiving Email Notifications

If you're not receiving email notifications when clients fill out the contact or payment forms, it could be due to one of the following reasons:

1. Gmail security settings blocking the emails
2. Incorrect email credentials
3. Emails going to spam folder
4. Missing environment variables in Netlify

## Solution: Configure Environment Variables in Netlify

The most secure way to handle email credentials is to use environment variables in Netlify. Follow these steps:

### Step 1: Create a Gmail App Password

If you're using Gmail, you need to create an App Password:

1. Go to your Google Account settings: [https://myaccount.google.com/](https://myaccount.google.com/)
2. Select "Security" from the left menu
3. Under "Signing in to Google," select "2-Step Verification" (you must have this enabled)
4. At the bottom of the page, select "App passwords"
5. Select "Mail" as the app and "Other" as the device (name it "USDT Flasher Website")
6. Click "Generate" and copy the 16-character password that appears

### Step 2: Add Environment Variables to Netlify

1. Log in to your Netlify account
2. Go to your site dashboard
3. Click on "Site settings" and then "Environment variables"
4. Add the following environment variables:
   - Key: `EMAIL_ADDRESS` | Value: `your-email@gmail.com` (the email you want to receive notifications at)
   - Key: `EMAIL_PASSWORD` | Value: `your-app-password` (the 16-character app password you generated)
5. Click "Save"

### Step 3: Redeploy Your Site

1. Go to the "Deploys" tab in your Netlify dashboard
2. Click "Trigger deploy" and select "Clear cache and deploy site"
3. Wait for the deployment to complete

## Testing the Email Notifications

After setting up the environment variables and redeploying your site:

1. Go to your website's contact page
2. Fill out the form and submit it
3. Check your email inbox (and spam folder) for the notification
4. If you still don't receive the email, check the Netlify Function logs:
   - Go to your Netlify dashboard
   - Click on "Functions"
   - Find the "contact" or "notify-payment" function
   - Check the logs for any errors

## Troubleshooting

If you're still having issues:

1. **Check Gmail settings**: Make sure your Gmail account allows less secure apps or use an app password
2. **Check spam folder**: The emails might be marked as spam
3. **Verify environment variables**: Make sure the environment variables are set correctly in Netlify
4. **Check Netlify Function logs**: Look for any errors in the function logs
5. **Try a different email service**: If Gmail is not working, you might want to try a different email service

## Additional Security Recommendations

- Never hardcode email credentials in your frontend code
- Regularly rotate your app passwords
- Consider using a dedicated email service like SendGrid or Mailgun for production applications

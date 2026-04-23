# Contact Form Setup Guide

The contact form on your website is now connected to send emails to **Kimmihyo1@gmail.com** using EmailJS. Follow these steps to enable it:

## Step 1: Create a Free EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Click "Create New Account"
3. Sign up with your email (you can use Kimmihyo1@gmail.com)

## Step 2: Add an Email Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Create New Service"
3. Choose "Gmail"
4. Name it: `service_dark_canvas` (this must match exactly)
5. Select your Gmail account and authorize it
6. Save the service

## Step 3: Create an Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Set up the template:
   - **Service**: service_dark_canvas
   - **Template Name**: template_contact_form (must match exactly)
   - **Template ID**: template_contact_form
4. In the template body, use these variables:

   ```
   Subject: {{subject}}

   From: {{from_name}} ({{from_email}})

   Message:
   {{message}}
   ```

5. Configure where it sends:
   - **To Email**: Kimmihyo1@gmail.com
   - **From Name**: {{from_name}}
   - **From Email**: {{from_email}}
6. Save the template

## Step 4: Copy Your Public Key

1. Go to "Account" in the EmailJS dashboard
2. Copy your **Public Key**
3. Go back to your project folder

## Step 5: Configure Environment Variables

1. Create a file named `.env.local` in the root of your project (same level as package.json)
2. Add this line:
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
3. Replace `your_public_key_here` with the actual public key you copied

## Step 6: Test It

1. Run `npm run dev`
2. Go to the contact page (http://localhost:5173/contact)
3. Fill out the form and submit
4. You should receive an email at Kimmihyo1@gmail.com

## Contact Information Added

The contact page now displays:

- **Phone**: +82 (10) 8643 253493
- **Phone**: +82 (862) 214 1862
- **Email**: Kimmihyo1@gmail.com
- **Instagram**: @mi.hyo\_

## Troubleshooting

- If emails aren't sending, check that your Service ID and Template ID match exactly
- Make sure you've authorized Gmail in your EmailJS account
- Check the EmailJS dashboard's "Logs" section to see if there are errors

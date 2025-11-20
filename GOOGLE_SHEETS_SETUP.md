# Google Sheets Setup Guide

This guide will help you set up Google Sheets to receive contact form submissions from your portfolio website.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click on **+ Blank** to create a new spreadsheet
3. Name your spreadsheet (e.g., "Portfolio Contact Form Submissions")
4. In the first row, add the following headers:
   - **A1**: `Timestamp`
   - **B1**: `Name`
   - **C1**: `Email`
   - **D1**: `Phone`
   - **E1**: `Message`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click on **Extensions** → **Apps Script**
2. Delete any existing code in the script editor
3. Copy and paste the following code:

```javascript
function doPost(e) {
  try {
    // Open the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get form data
    var timestamp = e.parameter.timestamp || new Date().toISOString();
    var name = e.parameter.name || '';
    var email = e.parameter.email || '';
    var phone = e.parameter.phone || '';
    var message = e.parameter.message || '';
    
    // Append data to sheet
    sheet.appendRow([timestamp, name, email, phone, message]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click on the **disk icon** (💾) or press `Ctrl+S` to save the script
5. Name your project (e.g., "Contact Form Handler")

## Step 3: Deploy as Web App

1. In the Apps Script editor, click on **Deploy** → **New deployment**
2. Click on **Select type** → Choose **Web app**
3. Configure the deployment:
   - **Description**: Enter a description (e.g., "Contact Form v1")
   - **Execute as**: Select **Me** (your email)
   - **Who has access**: Select **Anyone**
4. Click **Deploy**
5. **Important**: You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Your Project Name] (unsafe)**
   - Click **Allow**
6. Copy the **Web app URL** (it will look like: `https://script.google.com/macros/s/...../exec`)

## Step 4: Update Your Contact Form

1. Open `src/components/Contact.jsx`
2. Find the line with `const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your copied Web app URL
4. Save the file

Example:
```javascript
const scriptURL = 'https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec';
```

## Step 5: Test Your Form

1. Run your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out and submit a test message
4. Check your Google Sheet - you should see the submission appear as a new row

## Troubleshooting

### Form submissions not appearing in Google Sheet

1. **Check the Web App URL**: Make sure you copied the correct URL ending with `/exec`
2. **Verify deployment settings**: Ensure "Who has access" is set to "Anyone"
3. **Check browser console**: Open Developer Tools (F12) and check for any errors
4. **Redeploy**: Try creating a new deployment with a different version number

### Authorization issues

- Make sure you authorized the script during deployment
- If you see permission errors, go back to the Apps Script editor and redeploy

### Data not formatted correctly

- Verify that the column headers in your Google Sheet match exactly:
  - A1: Timestamp
  - B1: Name
  - C1: Email
  - D1: Phone
  - E1: Message

## Security Notes

- The web app is set to "Anyone" access because it needs to receive public form submissions
- The script only accepts POST requests with the specific parameters defined
- Consider adding additional validation or spam protection if needed
- You can add email notifications by modifying the Apps Script to send you an email when a new submission is received

## Optional: Email Notifications

To receive email notifications for each submission, add this to your Apps Script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    var timestamp = e.parameter.timestamp || new Date().toISOString();
    var name = e.parameter.name || '';
    var email = e.parameter.email || '';
    var phone = e.parameter.phone || '';
    var message = e.parameter.message || '';
    
    sheet.appendRow([timestamp, name, email, phone, message]);
    
    // Send email notification
    var emailBody = `New contact form submission:\n\n` +
                   `Name: ${name}\n` +
                   `Email: ${email}\n` +
                   `Phone: ${phone}\n` +
                   `Message: ${message}\n` +
                   `Timestamp: ${timestamp}`;
    
    MailApp.sendEmail({
      to: 'your-email@example.com', // Replace with your email
      subject: 'New Portfolio Contact Form Submission',
      body: emailBody
    });
    
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

Remember to replace `'your-email@example.com'` with your actual email address.

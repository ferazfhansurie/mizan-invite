import { NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Configure Google Sheets API
    const auth = new google.auth.GoogleAuth({
        keyFile: './service_account.json',
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })
    
    // Add row to Google Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: '19AxeW67izBSMCCUXDs5RYKGqQr4FMrVSmmn3tdOtrnA',
      range: 'Sheet1!A2:C2', // Adjust range based on your sheet
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          body.name,
          body.guests,
          body.timestamp,
        ]],
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Failed to submit to Google Sheets' }, { status: 500 })
  }
} 
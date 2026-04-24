import { NextResponse } from "next/server";

export async function POST(request) {
  
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwGUf4emOff35k_z0zU2Sf6q19uCStE5_dAETIHcWTuXTiaEtyzEbZosk8-P50EyY_E/exec";

  try {
    const body = await request.json();

    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
      },
      body: JSON.stringify(body),
    });

    const responseText = await response.text();
    
    try {
      const result = JSON.parse(responseText);
      return NextResponse.json(result);
    } catch (parseError) {
      console.error("Failed to parse GAS response (FormModal):", responseText);
      return NextResponse.json({
        status: "error",
        message: "Google Apps Script returned an invalid response (not JSON).",
        details: responseText.substring(0, 200)
      });
    }
  } catch (error) {
    console.error("API Proxy Error (FormModal):", error);
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }
}

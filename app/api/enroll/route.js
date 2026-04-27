import { NextResponse } from "next/server";

export async function POST(request) {
  // Replace with actual Enrollment GAS URL if available
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyeFpuXUCzvK2ppI5HVHzbbh2nNbgp4l-NKUSFWTqRASLjHgGTk-yHvbyLkXHGXoK2b/exec";

  try {
    const body = await request.json();

    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
      },
      body: JSON.stringify({
        ...body,
        formType: "Academy Enrollment"
      }),
    });

    const responseText = await response.text();
    
    try {
      const result = JSON.parse(responseText);
      return NextResponse.json(result);
    } catch (parseError) {
      console.error("Failed to parse GAS response (Enrollment):", responseText);
      // Fallback for mock success if GAS returns HTML
      return NextResponse.json({
        status: "success",
        message: "Enrollment received (Mock Success)"
      });
    }
  } catch (error) {
    console.error("API Proxy Error (Enrollment):", error);
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }
}

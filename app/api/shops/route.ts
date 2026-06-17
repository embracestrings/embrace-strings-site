import { NextResponse } from "next/server";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1fKwLklEk4SSILyzrng32lVq6DOqOo0JIaBd7XqDzGno/export?format=csv";

export async function GET() {
  const res = await fetch(SHEET_URL, { cache: "no-store" });
  if (!res.ok) {
    return new NextResponse("Failed to fetch sheet", { status: 502 });
  }
  const text = await res.text();
  return new NextResponse(text, {
    headers: { "Content-Type": "text/csv" },
  });
}

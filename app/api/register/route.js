import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import conn from "@/lib/db";

// POST /api/register — create a new user
export async function POST(request) {
  const { email, password, fullname } = await request.json();

  if (!email || !password || !fullname) {
    return NextResponse.json(
      { status: "error", message: "email, password and fullname are required" },
      { status: 400 }
    );
  }

  try {
    // reject emails that are already registered
    const rows = await conn.execute("SELECT id FROM users WHERE email = ?", [email]);
    if (rows.length > 0) {
      return NextResponse.json(
        { status: "error", message: "Email already registered" },
        { status: 409 }
      );
    }

    // never store the real password, only the bcrypt hash
    const hash = await bcrypt.hash(password, 10);

    const result = await conn.execute(
      "INSERT INTO users (email, password, fullname) VALUES (?, ?, ?)",
      [email, hash, fullname]
    );

    return NextResponse.json(
      { status: "ok", id: Number(result.lastInsertId) },
      { status: 201 }
    );
  } catch (e) {
    console.error("register error:", e);
    return NextResponse.json(
      { status: "error", message: "Server error" },
      { status: 500 }
    );
  }
}
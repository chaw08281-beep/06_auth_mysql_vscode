   import conn from "@/lib/db";

   export async function GET() {
     try {
       const rows = await conn.execute("SELECT 1 AS ok");
       return Response.json({ hasUrl: !!process.env.DATABASE_URL, rows });
     } catch (e) {
       return Response.json(
         { hasUrl: !!process.env.DATABASE_URL, message: e.message },
         { status: 500 }
       );
     }
   }
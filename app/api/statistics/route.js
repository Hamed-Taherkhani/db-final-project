import { query } from "@/app/lib/query";

export async function GET() {
  try {
    const memberCount = await query("SELECT COUNT(*) FROM Members");
    const bookCount = await query("SELECT COUNT(*) FROM Books");
    const borrowedCount = await query("SELECT COUNT(*) FROM Borrowed");
    const overdueCount = await query(
      "SELECT COUNT(*) FROM Borrowed WHERE return_date < GETDATE();"
    );
    return Response.json([
      memberCount[0][""],
      bookCount[0][""],
      borrowedCount[0][""],
      overdueCount[0][""],
    ]);
  } catch (err) {}
}

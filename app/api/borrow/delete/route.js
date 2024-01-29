import { query } from "@/app/lib/query";

export async function POST(request) {
  const formData = await request.formData();
  try {
    await query(`DELETE FROM Borrowed WHERE id = ${formData.get("id")};`);
    return Response.redirect("http://localhost:3000/dashboard/borrow");
  } catch (error) {}
}

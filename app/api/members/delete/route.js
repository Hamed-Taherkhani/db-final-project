import { query } from "@/app/lib/query";

export async function POST(request) {
  const formData = await request.formData();
  try {
    console.log(formData);
    await query(`DELETE FROM Members WHERE id = ${formData.get("id")};`);
    return Response.redirect("http://localhost:3000/dashboard/members");
  } catch (error) {}
}

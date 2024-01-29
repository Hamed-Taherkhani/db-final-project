import { query } from "@/app/lib/query";

export async function GET() {
  try {
    const members = await query(
      "SELECT id ID, name Name, phone Phone, website Website, address Address FROM Publisher;"
    );
    return Response.json(members);
  } catch (err) {}
}

export async function POST(request) {
  const formData = await request.formData();
  try {
    await query(
      `INSERT INTO Publisher VALUES
      ('${formData.get("name")}', '${formData.get("phone")}', '${formData.get(
        "address"
      )}', '${formData.get("website")}');`
    );
    return Response.redirect("http://localhost:3000/dashboard/publisher");
  } catch (err) {
    console.log(err);
  }
}

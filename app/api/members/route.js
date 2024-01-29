import { query } from "@/app/lib/query";

export async function GET() {
  try {
    const members = await query(
      "SELECT id, fname, lname, phone, address, registry_date FROM Members;"
    );
    return Response.json(members);
  } catch (err) {}
}

export async function POST(request) {
  const formData = await request.formData();
  try {
    await query(
      `INSERT INTO Members (fname,lname, phone, address) VALUES ('${formData.get(
        "fname"
      )}', '${formData.get("lname")}', '${formData.get(
        "phone"
      )}', '${formData.get("address")}');`
    );
    return Response.redirect("http://localhost:3000/dashboard/members");
  } catch (err) {
    console.log(err);
  }
}

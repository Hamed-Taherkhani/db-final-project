import { query } from "@/app/lib/query";

export async function GET() {
  try {
    const members = await query(
      "SELECT B.id, B.book_id [Book ID], Bo.title Title, member_id [Member ID], fname+' '+lname [Name], reserved_date [Reserved date], return_date [Return date] FROM Borrowed B JOIN Members M ON member_id = M.id JOIN Books Bo ON book_id = Bo.id;"
    );
    return Response.json(members);
  } catch (err) {}
}

export async function POST(request) {
  const formData = await request.formData();
  try {
    await query(
      `INSERT INTO Borrowed (return_date, book_id, member_id) VALUES 
        ('${formData.get("return_date")}', ${formData.get(
        "book_id"
      )}, ${formData.get("member_id")});`
    );
    return Response.redirect("http://localhost:3000/dashboard/borrow");
  } catch (err) {
    console.log(err);
  }
}

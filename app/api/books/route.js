import { query } from "@/app/lib/query";

export async function GET(req, res) {
  try {
    const books = await query(
      "SELECT id ID, title Title, author Author, category Cat, price Price, pages Pages, corridor Corr, shelf Shelf, publisher_id Pub FROM Books;;"
    );
    return Response.json(books);
  } catch (err) {}
}

export async function POST(request) {
  const formData = await request.formData();
  try {
    await query(
      `INSERT INTO Books VALUES ('${formData.get("title")}', '${formData.get(
        "category"
      )}', '${formData.get("author")}', '${formData.get(
        "price"
      )}', '${formData.get("pages")}', '${formData.get(
        "corridor"
      )}', '${formData.get("shelf")}', '${formData.get("publisher_id")}');`
    );
    return Response.redirect("http://localhost:3000/dashboard/books");
  } catch (err) {
    console.log(err);
  }
}

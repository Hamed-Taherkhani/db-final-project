import { redirect } from "next/navigation";

export default function page() {
  redirect("./auth/login", "replace");
  return <div>page</div>;
}

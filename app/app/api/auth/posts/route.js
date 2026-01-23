import { NextResponse } from "next/server";
import { roles } from "@/config/roles";

// export async function DELETE(req: Request) {
  const role = req.headers.get("x-user-role");

  if (!roles[role]?.includes("delete")) {
    console.log(`[RBAC] ${role} attempted DELETE: DENIED`);
    return NextResponse.json(
      { error: "Access denied: insufficient permissions" },
      { status: 403 }
    );
  }

  console.log(`[RBAC] ${role} attempted DELETE: ALLOWED`);
  return NextResponse.json({ message: "Resource deleted successfully" });
// }

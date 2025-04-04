"use client";

import { signOut } from "@/lib/actions/auth.action";
import { Button } from "./ui/button";

export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <Button className="btn-primary px-4 py-2" onClick={handleLogout}>
      Sign Out
    </Button>
  );
}

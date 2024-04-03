"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { UserRole } from "@prisma/client";

import { useAuth } from "@/hooks/use-auth";
import { BillingButton } from "./billing-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserDropdown = () => {
  const { user, status } = useAuth();

  if (status === "loading") {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar aria-label="user menu">
          <AvatarImage
            alt={user?.name || user?.email || "user"}
            src={user?.image || undefined}
          />
          <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {user?.role === UserRole.ADMIN && (
          <DropdownMenuItem>
            <Link href="/admin/dashboard" className="justify-between">
              Admin Dashboard
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem>
          <Link href="/profile" className="justify-between">
            Profile
          </Link>
        </DropdownMenuItem>
        {user?.isActive && (
          <DropdownMenuItem>
            <BillingButton />
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button onClick={() => signOut()}>Logout</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

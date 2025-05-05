import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Skater } from "@/types/backend";
import { UserAvatar } from "../avatar";

export const friendTableColumns: (
  addFriend: (id: string) => void,
  acceptFriendRequest: (id: string) => void,
  rejectFriendRequest: (id: string) => void
) => ColumnDef<Skater>[] = (
  addFriend: (id: string) => void,
  acceptFriendRequest: (id: string) => void,
  rejectFriendRequest: (id: string) => void
) => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "picture",
    header: "",
    cell: ({ row }) => (
      <UserAvatar
        pictureUrl={row.getValue("picture")}
        name={row.getValue("name")}
      />
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "friendRequestStatus",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          status
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="font-medium">
          {row.getValue("friendRequestStatus") === "approved"
            ? "friends"
            : row.getValue("friendRequestStatus")}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const skater = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>View Profile</DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(skater.id)}
            >
              Copy skater ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {(skater.friendRequestStatus === "none" ||
              skater.friendRequestStatus === "rejected") && (
              <DropdownMenuItem onClick={() => addFriend(skater.id)}>
                Add Friend
              </DropdownMenuItem>
            )}
            {skater.friendRequestStatus === "pending" && (
              <>
                <DropdownMenuItem
                  onClick={() => acceptFriendRequest(skater.id)}
                >
                  Accept Request
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => rejectFriendRequest(skater.id)}
                >
                  Reject Request
                </DropdownMenuItem>
              </>
            )}

            <DropdownMenuItem>Block</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

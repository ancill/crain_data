/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Payment = {
  id: string;
  amount: string;
  orgName: string;
  employees: string;
  name: string;
  title?: string;
  orgUrl?: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Executive
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <>
        <div className="font-semibold">{row.original.name}</div>
        <div className="text-sm text-gray-600">{row.original.title}</div>
      </>
    ),
  },
  {
    accessorKey: "orgName",
    header: "Organization name",
    cell: ({ row }) => (
      <>
        <div>{row.original.orgName}</div>
        {row.original.orgUrl && (
          <a
            href={row.original.orgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 visited:text-purple-600 hover:text-blue-800"
          >
            {row.original.orgUrl}
          </a>
        )}
      </>
    ),
  },

  {
    accessorKey: "amount",
    header: "Revenue",
  },
  {
    accessorKey: "employees",
    header: "Employees",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-4 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  // ...
];

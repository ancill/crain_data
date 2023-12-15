import { type Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // nextjs 13 fetching api from our api folder/payments
  const payments: Payment[] = [
    {
      id: "728ed52s",
      amount: 200,
      status: "succesful",
      email: "mejiabrayan@protonmail..com",
    },
    {
      id: "728ed52f",
      amount: 300,
      status: "pending",
      email: "kevinf@example.com",
    },
    {
      id: "728ed52d",
      amount: 450,
      status: "success",
      email: "johndoe@example.com",
    },
    {
      id: "728ed52v",
      amount: 100,
      status: "failed",
      email: "ianjones@example.com",
    },
  ];

  const data = payments;
  return data;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <section className="container flex flex-col  gap-6 py-8 text-black ring-1 ring-gray-900/10 md:max-w-[64rem]  md:py-12 lg:py-24">
      <div className="relative mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] text-black sm:text-3xl md:text-6xl ">
          Data-Table Demo
        </h2>
        <p className="text-muted-foreground max-w-[85%] leading-normal sm:text-lg sm:leading-7">
          using Shadcn ui and tanstack{" "}
        </p>
      </div>

      <DataTable columns={columns} data={data} />
    </section>
  );
}

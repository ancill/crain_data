import Image from "next/image";
import { type Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // nextjs 13 fetching api from our api folder/payments
  const payments: Payment[] = [
    {
      id: "728ed52s",
      amount: "$21.2 bil.",
      employees: "5,836",
      status: "Medine Industries",
      name: "Tim Abata",
    },
    {
      id: "728ed52f",
      amount: "",
      employees: "",
      status: "MISUMI",
      name: "Bill Abbott",
    },
    {
      id: "728ed52d",
      amount: "$1.36 bil.",
      employees: "602",
      status: "Readerlink Distribution Services LLC",
      name: "Dennis E. Abboud Sr.",
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
        <Image
          src={"/datacenter-hed.png"}
          alt={""}
          height={160}
          width={1200}
          className="mb-2"
        />

        <h3 className="font-heading border-b-[1px] border-red-700 text-3xl font-semibold leading-[1.1] text-black sm:text-3xl md:text-2xl">
          Welcome to Crain's Data Center
        </h3>
        <p className="text-muted-foreground leading-normal sm:text-lg sm:leading-7">
          Crain's Data Members have exclusive access to the data collected by
          Crain's Chicago Business to find potential clients and conduct market
          research. We've compiled everything you need to know about the
          companies and people that are doing business in the Chicago area. For
          instructions on using the interactive and custom list functionality,
          as well as answers to other common questions and information on how to
          become a Data Member, click here. To become a Data Member, click here.
        </p>

        <ul className="stats-items flex w-full justify-around gap-4">
          <li className="stats-items-content" ldl-stat-count="1100">
            <h2 className="text-4xl font-bold">1,100</h2>
            <span className="text-2xl font-normal">Companies</span>
          </li>
          <li className="stats-items-content" ldl-stat-count="5031">
            <h2 className="text-4xl font-bold">5,031</h2>
            <span className="text-2xl">People</span>
          </li>
          <li className="stats-items-content" ldl-stat-count="48">
            <h2 className="text-4xl font-bold">48</h2>
            <span className="text-2xl">Industry Lists</span>
          </li>
        </ul>
        <p className="text-muted-foreground leading-normal sm:text-lg sm:leading-7">
          Filter and export customized lists from Crain's database using the
          following filter options. For example you could export a list of all
          public companies, or you could export a list of CFOs at privately held
          manufacturing companies with more than 1,000 employees and $100
          million+ in annual revenue. For a video tutorial on how to use the
          custom list functionality, click here.
        </p>
      </div>

      <DataTable columns={columns} data={data} />
    </section>
  );
}

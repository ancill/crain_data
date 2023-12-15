import Image from "next/image";
import { type Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import Filters from "./filters";

async function getData(): Promise<Payment[]> {
  // nextjs 13 fetching api from our api folder/payments
  const payments: Payment[] = [
    {
      id: "728ed52s",
      amount: "$21.2 bil.",
      employees: "5,836",
      orgName: "Medine Industries",
      orgUrl: "Medine.com",
      name: "Tim Abata",
      title: "Chief Marketing Officer",
    },
    {
      id: "728ed52f",
      amount: "",
      employees: "",
      orgName: "MISUMI",
      orgUrl: "misumiusa.com",
      name: "Bill Abbott",
      title: "VP, General Counsel",

    },
    {
      id: "728ed52d",
      amount: "$1.36 bil.",
      employees: "602",
      orgName: "Readerlink Distribution Services LLC",
      orgUrl: "ReaderLink.com",
      name: "Dennis E. Abboud Sr.",
      title: "Chairman, president, CEO",
    },
    {
      id: "728ed52g",
      amount: "$18.45 mil.",
      employees: "54",
      orgName: "10th Magnitude",
      orgUrl: "10thMagnitude.com",
      name: "Alex Brown",
      title: "CEO",
    },
    {
      id: "728ed52h",
      amount: " ",
      employees: "89",
      orgName: "The 1937 Group",
      orgUrl: "The1937Group.com",
      name: "Ambrose Jackson",
      title: "Chairman, CEO",
    },
    {
      id: "728ed52j",
      amount: "$101.4 mil.",
      employees: "168",
      orgName: "226 Companies",
      orgUrl: "226Companies.com",
      name: "Bernie Donaldson",
      title: "Principal",
    },
    {
      id: "728ed52k",
      amount: "$8.31 mil.",
      employees: "55",
      orgName: "2IM Group LLC",
      orgUrl: "2IMGroup.com",
      name: "Luis Montgomery",
      title: "President",
    },
    {
      id: "728ed52p",
      amount: "$108.71 mil.",
      employees: "143",
      orgName: "3D Exhibits Inc.",
      orgUrl: "3DExhibits.com",
      name: "Nicole Genarella",
      title: "EVP, Sales & Marketing",
    },
    {
      id: "728ed52z",
      amount: "$118.58 mil.",
      employees: "150",
      orgName: "4Front Ventures",
      orgUrl: "MissionDispensaries.com",
      name: "Brandon Mills",
      title: "President, Massachusetts and Illinois",
    },
    {
      id: "728ed52x",
      amount: " ",
      employees: "10",
      orgName: "7wireVentures",
      orgUrl: "7wireVentures.com",
      name: "Glen E. Tullman ",
      title: "Managing partner",
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
      <Filters />
      <DataTable columns={columns} data={data} />
    </section>
  );
}

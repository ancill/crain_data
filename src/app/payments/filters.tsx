import { Button } from "@/components/ui/button";
import React from "react";

const Filters = () => {
  return (
    <form className="flex flex-wrap gap-4 p-4">
      <div className="select-wrapper mb-4 flex flex-col">
        <label className="mr-2 font-bold">Org type</label>
        <select
          className="rounded-md border p-2"
          ldl-search-key="orgcategory"
          print-name=""
          name="ldl-orgcategory"
          ajax-init="true"
        >
          <option value="">All</option>
          <option value="2459">Government</option>
          <option value="2458">Nonprofit</option>
          <option value="2456">Private company</option>
          <option value="2457">Public company</option>
        </select>
      </div>

      <div className="select-wrapper mb-4 flex flex-col">
        <label className="mr-2 font-bold">Org revenue</label>
        <select
          className="rounded-md border p-2"
          ldl-search-key="revenue"
          print-name=""
          name="ldl-revenue"
        >
          <option value="">All</option>
          <option value="0,10000000">Less than $10 million</option>
          <option value="10000000,49000000">$10-$49 million</option>
          <option value="50000000,100000000">$50-$100 million</option>
          <option value="101000000,500000000">$101-$500 million</option>
          <option value="501000000,999999999999999">
            $501 million and above
          </option>
        </select>
      </div>

      <div className="select-wrapper mb-4 flex flex-col">
        <label className="mr-2 font-bold">Employee size</label>
        <select
          className="rounded-md border p-2"
          ldl-search-key="employee"
          print-name=""
          name="ldl-employee"
        >
          <option value="">All</option>
          <option value="0,25">25 or fewer</option>
          <option value="26,99">26 to 99</option>
          <option value="100,499">100-499</option>
          <option value="500,999">500-999</option>
          <option value="1000,4999">1,000-4,999</option>
          <option value="5000,10000">5,000-10,000</option>
          <option value="10001,99000000000">10,001 and above</option>
        </select>
      </div>

      <div className="select-wrapper mb-4 flex flex-col">
        <label className="mr-2 font-bold">Employee title</label>
        <select
          className="rounded-md border p-2"
          ldl-search-key="execrole"
          print-name=""
          name="ldl-execrole"
          ajax-init="true"
        >
          <option value="">All</option>
          <option value="2277">CEO</option>
          <option value="2280">CFO/finance</option>
          <option value="2279">Chair</option>
          <option value="2282">Chief information/technology officer</option>
          <option value="2281">Chief operating officer</option>
          <option value="2285">General counsel</option>
          <option value="2284">HR manager</option>
          <option value="2286">Head of purchasing/supply chain</option>
          <option value="2283">Marketing manager</option>
          <option value="2278">President</option>
        </select>
      </div>

      <div className="select-wrapper mb-4 flex flex-col">
        <label className="mr-2 font-bold">Industry</label>
        <select
          className="rounded-md border p-2"
          ldl-search-key="mainindustry"
          print-name=""
          name="ldl-mainindustry"
          ajax-init="true"
        >
          <option value="">All</option>
          <option value="2463">Arts, entertainment and recreation</option>
          {/* ... other options */}
        </select>
      </div>

      <div className="select-wrapper mb-4 flex flex-col">
        <label className="mr-2 font-bold">HQ/Satellite</label>
        <select
          className="rounded-md border p-2"
          ldl-search-key="hq"
          print-name=""
          name="ldl-hq"
        >
          <option value="">All</option>
          <option value="HQ">HQ</option>
          <option value="Satellite">Satellite/Unit</option>
        </select>
      </div>

      <div className="select-wrapper mb-4 flex flex-col">
        <label className="mr-2 font-bold">Ownership</label>
        <select
          className="rounded-md border p-2"
          ldl-search-key="ownerstatus"
          print-name=""
          name="ldl-ownerstatus"
          ajax-init="true"
        >
          <option value="">All</option>
          {/* ... other options */}
        </select>
      </div>

      {/* Repeat the structure for other select elements */}

      <div className="flex gap-4 pt-6">
        <Button variant={"default"}> Generate List</Button>
        <Button variant={"default"}>Clear Filter</Button>
      </div>
    </form>
  );
};

export default Filters;

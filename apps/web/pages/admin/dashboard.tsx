
// components

import CardLineChart from "../../components/CardLineChart";
import CardBarChart from "../../components/CardBarChart";
import CardPageVisits from "../../components/CardPageVisits";
import CardSocialTraffic from "../../components/CardSocialTraffic";

// layout for page

import Admin from "../../layouts/Admin";

// This gets called on every request
export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/user", {
    method: "GET",
  });
  
  const data = await response.json();

  // Pass data to the page via props
  return { props: { data } }
}

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;

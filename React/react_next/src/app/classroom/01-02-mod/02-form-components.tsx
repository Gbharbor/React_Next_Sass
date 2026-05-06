import React from "react";
import { GeoForm } from "@/components/01-02-mod/02-geoform";

const Page = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <h1 className="text-3xl font-bold">Welcome to GeoForm</h1>

      <GeoForm />
    </div>
  );
};

export default Page;
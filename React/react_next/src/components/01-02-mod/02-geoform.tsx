import { Square } from "./02-square";
import { Circle } from "./02-circle";

export const GeoForm = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold">
        Geometry Forms
      </h3>

      <div className="flex gap-2 p-3 font-bold">
        <Square />
        <Circle />
      </div>
    </div>
  );
};
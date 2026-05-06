import React from "react";
import { Card } from "@/components/01-02-mod/01-card";
import { CardWithAnd } from "@/components/01-02-mod/01-card-with-and";
import { CardWithTernary } from "@/components/01-02-mod/01-card-with-ternary";
import { CardWithDynamicStyles } from "@/components/01-02-mod/01-card-with-dynamic-style";

// Examples using props and conditional rendering.
const Page = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <h1 className="text-2xl font-bold">Examples with Props</h1>

      <div>
        <h2 className="text-xl font-semibold">1. Basic Props</h2>
        <Card
          phrase="Persistence is the path to success"
          author="Charles Chaplin"
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold">2. Conditional Rendering with &&</h2>
        <CardWithAnd phrase="Simplicity is the ultimate sophistication" />
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          3. Conditional Rendering with Ternary Operator
        </h2>
        <CardWithTernary
          phrase="You can't imagine how much I still need to learn"
          author="Unknown"
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold">4. Dynamic Styles with Props</h2>
        <CardWithDynamicStyles
          phrase="Courage is resistance to fear"
          author="Unknown"
        />
      </div>
    </div>
  );
};

export default Page;
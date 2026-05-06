import React from "react";
import Card from "@/components/01-02-mod/04-card-children";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>

      <Card>
        <p>This is the content inside the first Card.</p>
      </Card>

      <Card>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Card>
    </div>
  );
};

export default Home;
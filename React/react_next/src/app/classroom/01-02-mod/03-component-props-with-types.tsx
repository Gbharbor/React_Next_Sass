import React from "react";
import { Person } from "@/components/01-02-mod/03-person";
import { PersonProps } from "@/types/01-02-mod/03-person-props";

const Page = () => {
  // Object typed with PersonProps
  const personData: PersonProps = {
    name: "Elon Musk",
    avatar: "https://example.com/avatar.jpg",
    roles: ["CEO Tesla", "CEO SpaceX"],
    address: "California, USA",
  };

  return (
    <div className="container">
      <h2>Person Information</h2>

      <Person
        name={personData.name}
        avatar={personData.avatar}
        roles={personData.roles}
        address={personData.address}
      />
    </div>
  );
};

export default Page;
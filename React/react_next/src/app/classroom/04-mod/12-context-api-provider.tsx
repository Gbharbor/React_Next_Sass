"use client";

import { Header } from "@/components/04-mod/12-header";
import {
  CountContext,
  CountInitialData,
} from "@/contexts/04-mod/12-count-context";

const Page = () => {
  return (
    <div className="container mx-auto">
      {/*
        Context Provider:

        - Makes the context available to child components
        - The value prop is shared across the component tree
        - Any child component can access this data using useContext()

        Flow:
        CountInitialData → Provider → child components
      */}

      <CountContext.Provider value={CountInitialData}>
        <Header />
      </CountContext.Provider>
    </div>
  );
};

export default Page;

/*
==========================================================
  CLASS 12: Context API Provider
==========================================================

This lesson introduces the React Context API.

Concepts covered:
- Context creation
- Provider components
- Shared state
- Avoiding prop drilling
- Global data access

The Provider makes a value available to all
components inside its tree.
*/
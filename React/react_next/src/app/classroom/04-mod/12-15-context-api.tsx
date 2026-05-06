"use client";

import { Header } from "@/components/04-mod/12-15-header";
import { CountProvider } from "@/contexts/04-mod/12-15-count-context";

const Page = () => {
  return (
    <div className="container mx-auto">
      {/*
        Context Provider:

        - Wraps the component tree
        - Shares data globally
        - Child components can access the context with useContext()
      */}

      <CountProvider>
        <Header />
      </CountProvider>
    </div>
  );
};

export default Page;

/*
==========================================================
  CLASS 12-15: Context API Provider
==========================================================

This lesson introduces the React Context API.

Concepts covered:
- Context creation
- Provider components
- Shared state
- Avoiding prop drilling
- Global data access

The Provider shares values with all components
inside its tree.
*/
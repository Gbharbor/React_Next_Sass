import MultiActionButton from "@/components/03-mod/01-multi-action-button";

const Page = () => {
  // Simple function
  const showAlert = () => {
    alert("working");
  };

  // Another arrow function
  const showAlert2 = () => {
    alert("working 2");
  };

  // Function expression
  const showAlert3 = function click() {
    alert("working 3");
  };

  // Event handler
  const handleButtonClick = () => {
    alert("working 4");
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <MultiActionButton
        Click={showAlert}
        buttonText="Click here (alert)"
      />

      <MultiActionButton
        Click={showAlert2}
        buttonText="Click here (alert 2)"
      />

      <MultiActionButton
        Click={showAlert3}
        buttonText="Click here (alert 3)"
      />

      <MultiActionButton
        Click={handleButtonClick}
        buttonText="Click here (alert 4)"
      />
    </div>
  );
};

export default Page;

// In Next.js, components are Server Components by default.
// To use browser interactions like onClick, the component may need "use client".
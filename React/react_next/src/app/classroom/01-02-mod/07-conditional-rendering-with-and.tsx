const Page = () => {
    const currentTime = new Intl.DateTimeFormat("pt-BR", {
      timeStyle: "short", // hour and minute
      hour12: false,
    }).format();
  
    // You can simulate a fixed hour:
    // const hour = 15;
    const hour = new Date().getHours();
  
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
        <div className="text-9xl">{currentTime}</div>
  
        <div className="text-5xl font-bold">
          {hour >= 0 && hour < 12 && "Morning"}
          {hour >= 12 && hour < 18 && "Afternoon"}
          {hour >= 18 && hour <= 23 && "Evening"}
        </div>
      </div>
    );
  };
  
  export default Page;
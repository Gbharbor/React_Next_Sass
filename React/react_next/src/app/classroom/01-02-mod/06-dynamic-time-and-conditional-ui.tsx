import Greeting from "@/components/01-02-mod/06-greeting";

const Page = () => {
  const currentTime = new Intl.DateTimeFormat("pt-BR", {
    timeStyle: "short",
    hour12: false,
  }).format();

  const hour = new Date().getHours();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
      <div className="text-9xl">{currentTime}</div>

      <Greeting hour={hour} />
    </div>
  );
};

export default Page;
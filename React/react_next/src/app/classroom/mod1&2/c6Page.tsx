import Greeting from '@/components/mod1_2/c6greetingEz';
const Page = () => {
   const fullTime = new Intl.DateTimeFormat('pt-BR', {
      timeStyle: 'short',
      hour12: false
   }).format();
   const hour = new Date().getHours();
   return (
      <div className="w-screen h-screen flex-col justify-center items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
         <div className="text-9xl">{fullTime}</div>
         <Greeting hour={hour} />
      </div>
   );
};
export default Page;
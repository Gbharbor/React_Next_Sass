const Page = () => {
    const fullTime = new Intl.DateTimeFormat('pt-BR', {
       timeStyle: 'short',//hora  & minute
       hour12: false
    }).format();
    const hour = new Date().getHours(); //vc pode simular por exemplo : const hour = 15;
    return (
       <div className="w-screen h-screen flex-col justify-center items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
          <div className="text-9xl">{fullTime}</div>
          <div className="text-5xl font-bold">
             {hour >= 0 && hour < 12 && 'Morning'} 
             {hour >= 12 && hour < 18 && 'Afternoon'}
             {hour >= 18 && hour <=23 && 'Evening'}
          </div>
       </div>
    )
 }
 export default Page;
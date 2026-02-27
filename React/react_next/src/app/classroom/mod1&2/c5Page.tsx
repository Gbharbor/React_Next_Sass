import { peopleList } from "@/data/mod1_2/c5pplList";
const Page = () => {
   const chemists = peopleList.filter(person => person.profession === "chemist");
   return (
       <div>
           {peopleList.length > 0 && (
               <ul>
                   {peopleList.map(person => (
                       <li key={person.id}>{person.name} - {person.profession}</li>
                   ))}
               </ul>
           )}
           {chemists.length > 0 && (
               <>
                   <h3>Lista de Químicos</h3>
                   <ul>
                       {chemists.map(person => (
                           <li key={person.id}>{person.name}</li>
                       ))}
                   </ul>
               </>
           )}
       </div>
   );
};
export default Page;
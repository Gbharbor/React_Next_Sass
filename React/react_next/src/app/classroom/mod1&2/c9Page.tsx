import { StudentTable } from '@/components/mod1_2/c9StudentTable'
import { students } from '@/data/mod1_2/c9students'
const Page = () => {
   return (
      <div className="container mx-auto">
         <h1 className="text-5xl mb-5">Lista de Estudantes</h1>
         <StudentTable students={students} />
      </div>
   )
}
export default Page;
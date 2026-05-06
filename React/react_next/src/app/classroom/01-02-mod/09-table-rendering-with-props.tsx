import { StudentTable } from "@/components/01-02-mod/09-student-table";
import { students } from "@/data/01-02-mod/09-students";

const Page = () => {
  return (
    <div className="container mx-auto">
      <h1 className="mb-5 text-5xl">Student List</h1>

      <StudentTable students={students} />
    </div>
  );
};

export default Page;
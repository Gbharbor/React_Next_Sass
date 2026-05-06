import { Student } from "@/types/01-02-mod/09-student";

type Props = {
  students: Student[];
};

export const StudentTable = ({
  students,
}: Props) => {
  return (
    <table className="w-full overflow-hidden rounded-md border-gray-600">
      <thead>
        <tr className="border-b border-gray-600 bg-gray-800 text-left">
          <th className="p-3">Name</th>
          <th className="p-3">Status</th>
          <th className="p-3">Grade 1</th>
          <th className="p-3">Grade 2</th>
          <th className="p-3">Final Grade</th>
        </tr>
      </thead>

      <tbody>
        {students.map((item) => (
          <tr
            key={item.id}
            className="border-b border-gray-600 bg-gray-400 text-gray-800"
          >
            <td className="flex items-center p-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="mr-3 h-10 w-10 rounded-full"
              />

              <div>
                <div className="font-bold">
                  {item.name}
                </div>

                <div>{item.email}</div>
              </div>
            </td>

            <td className="p-3">
              {item.active && (
                <div className="inline-block rounded-md border border-green-800 bg-green-600 px-2 py-1 text-xs text-white">
                  Active
                </div>
              )}

              {!item.active && (
                <div className="inline-block rounded-md border border-red-800 bg-red-600 px-2 py-1 text-xs text-white">
                  Inactive
                </div>
              )}
            </td>

            <td className="p-3">
              {item.grade1.toFixed(1)}
            </td>

            <td className="p-3">
              {item.grade2.toFixed(1)}
            </td>

            <td className="p-3 font-bold">
              {item.active
                ? (
                    (item.grade1 +
                      item.grade2) /
                    2
                  ).toFixed(1)
                : "-"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
import { peopleList } from "@/data/01-02-mod/05-ppl-list";

const Page = () => {
  // Filter only chemists
  const chemists = peopleList.filter(
    (person) => person.profession === "chemist"
  );

  return (
    <div>
      {peopleList.length > 0 && (
        <ul>
          {peopleList.map((person) => (
            <li key={person.id}>
              {person.name} - {person.profession}
            </li>
          ))}
        </ul>
      )}

      {chemists.length > 0 && (
        <>
          <h3>Chemists List</h3>

          <ul>
            {chemists.map((person) => (
              <li key={person.id}>{person.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Page;
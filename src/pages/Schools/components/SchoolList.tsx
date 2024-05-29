import React from "react";

interface School {
  id: number;
  name: string;
}

interface SchoolListProps {
  schools: School[];
  onSchoolSelect: (id: number) => void;
}

const SchoolList: React.FC<SchoolListProps> = ({ schools, onSchoolSelect }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">School List</h2>
      <ul className="space-y-2">
        {schools.map((school) => (
          <li
            key={school.id}
            className="p-2 rounded-lg cursor-pointer hover:bg-gray-100"
            onClick={() => onSchoolSelect(school.id)}
          >
            {school.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolList;

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
      <p className="text-xl mb-4">Select a school to view details</p>
      <ul className="space-y-2">
        {schools.map((school) => (
          <li
            key={school.id}
            className="p-2 rounded-lg font-semibold text-white hover:text-gray-900 cursor-pointer bg-slate-400 hover:bg-gray-100"
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

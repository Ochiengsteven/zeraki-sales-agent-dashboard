import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import {
  fetchSchools,
  fetchInvoices,
  fetchCollections,
} from "../../redux/api/apiSlice";
import SchoolList from "./components/SchoolList";
import SchoolDetails from "./components/SchoolDetails";

const Schools: React.FC = () => {
  const dispatch = useAppDispatch();
  const schools = useAppSelector((state) => state.api.schools);
  const invoices = useAppSelector((state) => state.api.invoices);
  const collections = useAppSelector((state) => state.api.collections);

  const [selectedSchoolId, setSelectedSchoolId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchSchools());
    dispatch(fetchInvoices());
    dispatch(fetchCollections());
  }, [dispatch]);

  const handleSchoolSelect = (id: number) => {
    setSelectedSchoolId(id);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center font-bold mb-4">Schools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SchoolList schools={schools} onSchoolSelect={handleSchoolSelect} />
        {selectedSchoolId !== null && (
          <SchoolDetails
            school={schools.find((school) => school.id == selectedSchoolId)}
            // @ts-expect-error - Fix the error
            invoices={invoices.filter(
              (invoice) => invoice.schoolId == selectedSchoolId
            )}
            collections={collections.filter(
              (collection) => collection.schoolId == selectedSchoolId
            )}
          />
        )}
      </div>
    </div>
  );
};

export default Schools;

import React from "react";
import InvoiceList from "./InvoiceList";
import CollectionList from "./CollectionList";

interface School {
  id: number;
  name: string;
  type: string;
  county: string;
  registrationDate: string;
  contact: string;
  products: string[];
  balance: number;
}

interface Invoice {
  id: number;
  schoolId: number;
  item: string;
  amount: number;
  dueDate: string;
  paidAmount: number;
  status: string;
  daysUntilDue: number;
}

interface Collection {
  id: number;
  schoolId: number;
  amount: number;
  date: string;
  status: string;
}

interface SchoolDetailsProps {
  school: School | undefined;
  invoices: Invoice[];
  collections: Collection[];
}

const SchoolDetails: React.FC<SchoolDetailsProps> = ({
  school,
  invoices,
  collections,
}) => {
  if (!school) return null;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">School Details</h2>
      <div className="space-y-2">
        <p>
          <strong>Name:</strong> {school.name}
        </p>
        <p>
          <strong>Type:</strong> {school.type}
        </p>
        <p>
          <strong>County:</strong> {school.county}
        </p>
        <p>
          <strong>Registration Date:</strong> {school.registrationDate}
        </p>
        <p>
          <strong>Contact:</strong> {school.contact}
        </p>
        <p>
          <strong>Products:</strong> {school.products.join(", ")}
        </p>
        <p>
          <strong>Balance:</strong> {school.balance}
        </p>
      </div>

      <h3 className="text-lg font-semibold mt-4">Invoices</h3>
      <InvoiceList invoices={invoices} />

      <h3 className="text-lg font-semibold mt-4">Collections</h3>
      <CollectionList collections={collections} />
    </div>
  );
};

export default SchoolDetails;

import React, { useState, useEffect } from "react";
import InvoiceTable from "./InvoiceList";
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
}

const SchoolDetails: React.FC<SchoolDetailsProps> = ({ school }) => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [newInvoice, setNewInvoice] = useState<Partial<Invoice>>({});
  const [editingInvoice, setEditingInvoice] = useState<Invoice | null>(null);

  useEffect(() => {
    if (school) {
      fetchInvoices();
      fetchCollections();
    }
  }, [school]);

  const BASE_URL = "https://server-pl68.onrender.com";

  const fetchInvoices = () => {
    fetch(`${BASE_URL}/invoices?schoolId=${school?.id}`)
      .then((response) => response.json())
      .then((data) => setInvoices(data));
  };

  const fetchCollections = () => {
    fetch(`${BASE_URL}/collections?schoolId=${school?.id}`)
      .then((response) => response.json())
      .then((data) => setCollections(data));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewInvoice((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveInvoice = () => {
    if (editingInvoice) {
      fetch(`${BASE_URL}/invoices/${editingInvoice.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newInvoice),
      })
        .then((response) => response.json())
        .then(() => {
          setEditingInvoice(null);
          setNewInvoice({});
          fetchInvoices(); // Fetch the latest invoices
        });
    } else {
      fetch(`${BASE_URL}/invoices`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newInvoice, schoolId: school?.id }),
      })
        .then((response) => response.json())
        .then(() => {
          setNewInvoice({});
          fetchInvoices(); // Fetch the latest invoices
        });
    }
  };

  const handleEditInvoice = (invoice: Invoice) => {
    setEditingInvoice(invoice);
    setNewInvoice(invoice);
  };

  const handleDeleteInvoice = (invoiceId: number) => {
    fetch(`${BASE_URL}/invoices/${invoiceId}`, {
      method: "DELETE",
    }).then(() => {
      fetchInvoices(); // Fetch the latest invoices
    });
  };

  const handleUpdateCollectionStatus = (id: number, status: string) => {
    fetch(`${BASE_URL}/collections/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    }).then(() => {
      fetchCollections(); // Fetch the latest collections
    });
  };

  if (!school) return null;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">School details</h2>
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

      <hr className="my-4" />

      <h3 className="text-lg text-gray-800 text-center font-semibold mt-4">
        Invoices
      </h3>
      <InvoiceTable
        invoices={invoices}
        onEdit={handleEditInvoice}
        onDelete={handleDeleteInvoice}
      />

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">
          {editingInvoice ? "Edit Invoice" : "New Invoice"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="item"
            placeholder="Item"
            value={newInvoice.item || ""}
            onChange={handleInputChange}
            className="border rounded p-2"
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={newInvoice.amount || ""}
            onChange={handleInputChange}
            className="border rounded p-2"
          />
          <input
            type="date"
            name="dueDate"
            value={newInvoice.dueDate || ""}
            onChange={handleInputChange}
            className="border rounded p-2"
          />
          <select
            name="status"
            value={newInvoice.status || ""}
            onChange={handleInputChange}
            className="border rounded p-2"
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button
          onClick={handleSaveInvoice}
          className="bg-blue-500 text-white rounded p-2 mt-2"
        >
          {editingInvoice ? "Update Invoice" : "Save Invoice"}
        </button>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mt-4">Collections</h3>
      <CollectionList
        collections={collections}
        onUpdateStatus={handleUpdateCollectionStatus}
      />
    </div>
  );
};

export default SchoolDetails;

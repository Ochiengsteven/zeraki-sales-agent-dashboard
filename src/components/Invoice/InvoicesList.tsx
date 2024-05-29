import React, { useState } from "react";

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

interface School {
  id: number;
  name: string;
}

interface InvoicesListProps {
  invoices: Invoice[];
  schools: School[];
}

const InvoicesList: React.FC<InvoicesListProps> = ({ invoices, schools }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const handleCollectPayment = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedInvoice(null);
  };

  const handlePaymentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle payment collection logic here
    handleModalClose();
  };

  const getSchoolName = (schoolId: number) => {
    const school = schools.find((s) => s.id === schoolId);
    return school ? school.name : "Unknown School";
  };

  const sortedInvoices = [...invoices].sort(
    (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Upcoming Invoices</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                School Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Item
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount Due
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Due Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedInvoices.map((invoice) => (
              <tr key={invoice.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getSchoolName(invoice.schoolId)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{invoice.item}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ${invoice.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(invoice.dueDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={() => handleCollectPayment(invoice)}
                  >
                    Collect Payment
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && selectedInvoice && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              Collect Payment for {getSchoolName(selectedInvoice.schoolId)}
            </h3>
            <form onSubmit={handlePaymentSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Amount
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  defaultValue={
                    selectedInvoice.amount - selectedInvoice.paidAmount
                  }
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-400"
                  onClick={handleModalClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Submit Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoicesList;

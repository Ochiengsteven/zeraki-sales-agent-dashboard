import React from "react";

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

interface InvoiceTableProps {
  invoices: Invoice[];
  onEdit: (invoice: Invoice) => void;
  onDelete: (invoiceId: number) => void;
}

const InvoiceTable: React.FC<InvoiceTableProps> = ({
  invoices,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md overflow-x-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">Invoice Number</th>
            <th className="py-2 px-4 border-b">Item</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Due Date</th>
            <th className="py-2 px-4 border-b">Paid Amount</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td className="py-2 px-4 border-b">{invoice.id}</td>
              <td className="py-2 px-4 border-b">{invoice.item}</td>
              <td className="py-2 px-4 border-b">{invoice.amount}</td>
              <td className="py-2 px-4 border-b">{invoice.dueDate}</td>
              <td className="py-2 px-4 border-b">{invoice.paidAmount}</td>
              <td className="py-2 px-4 border-b">{invoice.status}</td>
              <td className="py-2 px-4 border-b flex gap-2">
                <button
                  onClick={() => onEdit(invoice)}
                  className="bg-yellow-500 text-white rounded-lg my-2 px-4 py-2 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(invoice.id)}
                  className="bg-red-400 text-white rounded-md my-2 px-4 py-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;

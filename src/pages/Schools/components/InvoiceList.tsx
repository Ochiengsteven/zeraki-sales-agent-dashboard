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

interface InvoiceListProps {
  invoices: Invoice[];
}

const InvoiceList: React.FC<InvoiceListProps> = ({ invoices }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm mt-2">
      <h3 className="text-lg font-medium mb-2">Invoice List</h3>
      <ul className="space-y-2">
        {invoices.map((invoice) => (
          <li key={invoice.id} className="p-2 rounded-lg bg-white shadow-sm">
            <p>
              <strong>Invoice Number:</strong> {invoice.id}
            </p>
            <p>
              <strong>Item:</strong> {invoice.item}
            </p>
            <p>
              <strong>Amount:</strong> {invoice.amount}
            </p>
            <p>
              <strong>Due Date:</strong> {invoice.dueDate}
            </p>
            <p>
              <strong>Paid Amount:</strong> {invoice.paidAmount}
            </p>
            <p>
              <strong>Status:</strong> {invoice.status}
            </p>
            <p>
              <strong>Days Until Due:</strong> {invoice.daysUntilDue}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;

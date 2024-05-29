// CollectionList.tsx
import React from "react";

interface Collection {
  id: number;
  schoolId: number;
  amount: number;
  date: string;
  status: string;
}

interface CollectionListProps {
  collections: Collection[];
  onUpdateStatus: (id: number, status: string) => void;
}

const CollectionList: React.FC<CollectionListProps> = ({
  collections,
  onUpdateStatus,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Valid":
        return "bg-green-100";
      case "Bounced":
        return "bg-red-100";
      default:
        return "bg-gray-100";
    }
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    onUpdateStatus(id, newStatus);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm mt-2">
      <h3 className="text-lg font-medium mb-2">Collection List</h3>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Date</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {collections.map((collection) => (
            <tr
              key={collection.id}
              className={`${getStatusColor(collection.status)} border-b`}
            >
              <td className="py-2 px-4">{collection.id}</td>
              <td className="py-2 px-4">{collection.amount}</td>
              <td className="py-2 px-4">{collection.date}</td>
              <td className="py-2 px-4">{collection.status}</td>
              <td className="py-2 px-4">
                <select
                  value={collection.status}
                  onChange={(e) =>
                    handleStatusChange(collection.id, e.target.value)
                  }
                  className="border rounded p-1"
                >
                  <option value="Valid">Valid</option>
                  <option value="Bounced">Bounced</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollectionList;

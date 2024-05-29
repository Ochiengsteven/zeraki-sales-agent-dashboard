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
}

const CollectionList: React.FC<CollectionListProps> = ({ collections }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm mt-2">
      <h3 className="text-lg font-medium mb-2">Collection List</h3>
      <ul className="space-y-2">
        {collections.map((collection) => (
          <li key={collection.id} className="p-2 rounded-lg bg-white shadow-sm">
            <p>
              <strong>Collection Number:</strong> {collection.id}
            </p>
            <p>
              <strong>Amount:</strong> {collection.amount}
            </p>
            <p>
              <strong>Date:</strong> {collection.date}
            </p>
            <p>
              <strong>Status:</strong> {collection.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionList;

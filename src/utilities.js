import React from "react";

export const collectIdsAndDocs = (doc) => ({ id: doc.id, ...doc.data() });

export const PrettyPrintJson = ({ data }) => {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

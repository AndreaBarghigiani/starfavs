function DataRow({ label, children }) {
  return (
    <p className=" py-2 [&:not(:last-child)]:border-b">
      {label ? <strong>{label}:</strong> : null} {children}
    </p>
  );
}

export default DataRow;

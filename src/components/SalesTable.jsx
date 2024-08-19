import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// SalesTable Component: Displays a table with sales data using AG Grid.
const SalesTable = ({ data }) => {
  
  // Define the columns for the grid.
  const columnDefs = [
    // Column for Product Name with sorting and filtering enabled.
    { headerName: 'Product Name', field: 'productName', sortable: true, filter: true },
    
    // Column for Category with sorting and filtering enabled.
    { headerName: 'Category', field: 'category', sortable: true, filter: true },
    
    // Column for Quantity Sold with sorting and filtering enabled.
    { headerName: 'Quantity Sold', field: 'quantity', sortable: true, filter: true },
    
    // Column for Sales Amount with sorting and filtering enabled.
    { headerName: 'Sales Amount', field: 'salesAmount', sortable: true, filter: true },
  ];

  return (
    // AG Grid with Alpine theme, styled to take up full width and a fixed height.
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      
      {/* AG Grid component with data and column definitions passed as props. Pagination is enabled. */}
      <AgGridReact rowData={data} columnDefs={columnDefs} pagination={true} />
    </div>
  );
};

// Export the SalesTable component to be used in other parts of the application.
export default SalesTable;

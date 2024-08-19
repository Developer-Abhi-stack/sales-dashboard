export const fetchTodaySales = async () => {
    // Simulate an API call
    return {
      products: [
        { label: 'Product A', value: 120 },
        { label: 'Product B', value: 90 },
        // More products...
      ],
      categories: [
        { label: 'Category 1', value: 210 },
        { label: 'Category 2', value: 180 },
        // More categories...
      ],
      details: [
        { productName: 'Product A', category: 'Category 1', quantity: 30, salesAmount: 120 },
        { productName: 'Product B', category: 'Category 2', quantity: 45, salesAmount: 90 },
        // More details...
      ],
    };
  };
  
  export const fetchComparisonSales = async (date1, date2) => {
    // Simulate an API call
    return {
      products: [
        { label: 'Product A', value: [120, 150] },
        { label: 'Product B', value: [90, 110] },
        // More products...
      ],
      categories: [
        { label: 'Category 1', value: [210, 240] },
        { label: 'Category 2', value: [180, 200] },
        // More categories...
      ],
      details: [
        { productName: 'Product A', category: 'Category 1', date1Sales: 120, date2Sales: 150, difference: 30 },
        { productName: 'Product B', category: 'Category 2', date1Sales: 90, date2Sales: 110, difference: 20 },
        // More details...
      ],
    };
  };
  
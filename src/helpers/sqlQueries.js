const sqlQueries = [
  {
    query: "SELECT * \nFROM table_name;",
    tableURL: [
      "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/customers.csv",
      "https://raw.githubusercontent.com/codeforamerica/ohana-api/master/data/sample-csv/addresses.csv",
    ],
  },
  {
    query: "SELECT * \nFROM table_name \nWHERE column_name = 'value';",
    tableURL: [
      "https://raw.githubusercontent.com/codeforamerica/ohana-api/master/data/sample-csv/taxonomy.csv",
      "https://raw.githubusercontent.com/codeforamerica/ohana-api/master/data/sample-csv/services.csv",
      "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/order_details.csv"
    ],
  },
  {
    query:
      "SELECT table1.column1, table2.column2 \nFROM table1 JOIN table2 ON table1.common_column = table2.common_column;",
    tableURL: [
      "https://raw.githubusercontent.com/codeforamerica/ohana-api/master/data/sample-csv/regular_schedules.csv",
      "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/territories.csv",
    ],
  },
  {
    query:
      "SELECT table1.column1, table2.column2 \nFROM table1 JOIN table2 ON table1.common_column = table2.common_column \nWHERE table1.column_name = 'value';",
    tableURL: [
      "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/categories.csv",
      "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/customers.csv",
    ],
  },
  {
    query:
      "SELECT table1.column1, table2.column2 \nFROM table1 JOIN table2 ON table1.common_column = table2.common_column \nWHERE table1.column_name = 'value';",
    tableURL: [
      "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/products.csv",
      "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/regions.csv",
      "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/shippers.csv",
      "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/suppliers.csv",
      "https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/territories.csv",
    ],
  },
];

export default sqlQueries;

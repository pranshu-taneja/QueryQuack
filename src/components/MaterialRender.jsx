import React, { useMemo, useEffect, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import csvtojson from "csvtojson";
import useTableTheme from "./styles/useTableTheme";
import { ThemeProvider } from "@mui/material";

export default function MaterialRender({ tableURL }) {
  const tableTheme = useTableTheme();
  const [csvData, setCsvData] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const csvUrl = tableURL;
  const fetchData = async () => {
    const response = await fetch(csvUrl);
    const csvString = await response.text();
    const jsonArray = await csvtojson().fromString(csvString);

    setCsvData(jsonArray);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (csvData.length) {
      setisLoading(false);
    }
  }, [csvData]);

  const columns = useMemo(() => {
    if (csvData.length > 0) {
      const keys = Object.keys(csvData[0]);

      return keys.map((key) => ({
        accessorKey: key,
        header: key,
        muiTableHeadCellProps: { sx: { color: "green" } },
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>,
      }));
    }

    return [];
  }, [csvData]);

  return (
    <ThemeProvider theme={tableTheme}>
      <MaterialReactTable
        columns={columns}
        data={csvData ?? []}
        state={{ isLoading }}
        enablePagination={false}
        enableRowVirtualization={true}
        enableRowNumbers
        enableFilters={true}
        initialState={{ density: "compact" }}
        enableStickyHeader={true}
        enableStickyFooter
        enableBottomToolbar={false}
        muiTableContainerProps={{ sx: { maxHeight: "300px" } }}
      />
    </ThemeProvider>
  );
}

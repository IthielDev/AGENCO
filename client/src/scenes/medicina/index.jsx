import { Box,  useTheme } from "@mui/material";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";

import Header from "../../components/Header";

const Medicina = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
 
    { 
      field: "id", 
      headerName: "Correlativo", 
      headerAlign: "center",
      flex: 0.5,
      align: "center",
    },
    { 
      field: "Nombre", 
      headerName: "Nombre" ,
      headerAlign: "center",
      align: "center",
      flex: 0.6
    },
    { 
      field: "Dosis", 
      headerName: "Dosis" ,
      headerAlign: "center",
      align: "center",
      flex: 0.6
    },
    { 
      field: "Costo", 
      headerName: "Costo por dosis (Q)" ,
      headerAlign: "center",
      align: "center",
      flex: 0.6
    },
    { 
      field: "CostoT", 
      headerName: "Costo Total (Q)" ,
      headerAlign: "center",
      align: "center",
      flex: 0.6
    },
  
  ];

  return (
    <Box m="20px">
      <Header
        title="Ordenes de Compra"
       
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataInvoices}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Medicina;

import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";

import { useTheme } from "@mui/material";

const Camionada = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { 
      field: "id", 
      headerName: "Correlativo", 
      flex: 0.1 ,
      headerAlign:"center",
      align: "center",
    },
    {
      field: "Identificador",
      headerName: "Identificador",
      headerAlign: "left",
      align: "center"
    },
    { 
      field: "Origen", 
      headerName: "Origen " },

    {
      field: "FechaDeCompra",
      headerName: "Fecha de Compra",
      type: "date",
      flex: 0.2,
      cellClassName: "name-column--cell",
    },
    {
      field: "Animal",
      headerName: "Animal",
      type: "number",
      headerAlign: "left",
      align: "left",
      
    },
    {
      field: "Peso",
      headerName: "Peso(Lbs)",
      headerAlign: "left",
      type: "number",
      align: "left",
      
    },
  ];

  return (
  <Box m = "100 px">  
    <Box m="50px">
      <Header title="Ingreso Camionada" subtitle="Ingrese datos de camionada" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="10px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Origen"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.origen}
                name="origen"
                error={!!touched.origen && !!errors.origen}
                helperText={touched.origen && errors.origen}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Fecha de Compra"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fechaDeCompra}
                name="fechaDeCompra"
                error={!!touched.fechaDeCompra && !!errors.fechaDeCompra}
                helperText={touched.fechaDeCompra && errors.fechaDeCompra}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Identificador"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Animal"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.animal}
                name="animal"
                error={!!touched.animal && !!errors.animal}
                helperText={touched.animal && errors.animal}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Peso"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Ingresar
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
    

      <Box m="20px">
        <Header
          title="Camionadas"

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
            rows={mockDataContacts}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    </Box>  
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  origen: yup.string().required("required"),
  fechaDeCompra: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  origen: "",
  fechaDeCompra: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Camionada;

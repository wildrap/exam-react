import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { apiCrudHooks } from "../../api-crud/apiCrudHooks";

export const ShowCustomers = () => {
  const { retrieveCustomers, getCust } = apiCrudHooks();
  const [rows, setRows] = useState([]);
  retrieveCustomers();

  useEffect(() => {
    if (getCust) {
      setRows(getCust);
    }
  }, [getCust]);

  useEffect(() => {
    if (rows) {
      console.log(rows);
    }
  }, [rows]);

  return (
    <div>
      <h2>Add Customer</h2>
      <hr />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>FullName</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>CustCode</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <h1>Test</h1>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ShowCustomers;
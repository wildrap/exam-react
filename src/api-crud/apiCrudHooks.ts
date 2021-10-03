import { UsbOutlined } from "@material-ui/icons";
import api from "../api/customers";
import { v5 as uuidv5 } from "uuid";

export interface cust {
  firstName: string;
  lastName: string;
  dob: Date;
  email: string;
  phone: string;
  address: string;
}

export const apiCrudHooks = () => {
  const retrieveCustomers = async () => {
    const response = await api.get("/customers");
    return response;
  };

  const addCustomersHandler = async (customers: cust) => {
    const request = {
      id: uuidv5(),
      ...customers,
    };

    const response = await api.post("/customers", request);
    // use response to store this in redux
  };

  return { retrieveCustomers, addCustomersHandler };
};

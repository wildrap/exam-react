import api from "../api/customers";
import { v5 as uuidv5 } from "uuid";
import { useState } from "react";

export interface cust {
  firstName: string;
  lastName: string;
  dob: Date;
  email: string;
  phone: string;
  address: string;
}

export const apiCrudHooks = () => {
  const [postCust, setPostCust] = useState(<any>[]);
  const [getCust, setGetCust] = useState(<any>[]);

  const retrieveCustomers = async () => {
    const response = await api.get("/customers");
    setGetCust(response);
  };

  const addCustomersHandler = async (customers: cust) => {
    const request = {
      id: uuidv5("number", "number"),
      ...customers,
    };

    const response = await api.post("/customers", request);
    setPostCust(response);
  };

  return { retrieveCustomers, addCustomersHandler, postCust, getCust };
};

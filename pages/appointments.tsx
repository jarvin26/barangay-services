import React from "react";
import Layout from "@/components/layout";
import AppointmentsPage from "@/components/appointments.page";

const Appointments = () => {
  return (
    <Layout activePage={"Appointments"}>
      <AppointmentsPage />
    </Layout>
  );
};

export default Appointments;
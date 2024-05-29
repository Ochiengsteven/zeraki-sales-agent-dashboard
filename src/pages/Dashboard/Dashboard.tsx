import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import {
  fetchCollections,
  fetchSignups,
  fetchRevenue,
  fetchBouncedCheques,
  fetchInvoices,
  fetchSchools,
  selectTotalCollections,
  selectTotalSignups,
  selectTotalRevenue,
  selectTotalBouncedCheques,
  selectSignupsByProduct,
  selectRevenueByProduct,
  selectInvoices,
  selectSchools,
} from "../../redux/api/apiSlice";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Targets from "../../components/Chart/Targets";
import SignupsBarGraph from "../../components/Chart/SignupsBarGraph";
import InvoicesList from "../../components/Invoice/InvoicesList";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const totalCollection = useAppSelector(selectTotalCollections);
  const totalSignups = useAppSelector(selectTotalSignups);
  const totalRevenue = useAppSelector(selectTotalRevenue);
  const totalBouncedCheques = useAppSelector(selectTotalBouncedCheques);
  const signupsByProduct = useAppSelector(selectSignupsByProduct);
  const revenueByProduct = useAppSelector(selectRevenueByProduct);
  const invoices = useAppSelector(selectInvoices);
  const schools = useAppSelector(selectSchools);
  const loading = useAppSelector((state) => state.api.loading);
  const error = useAppSelector((state) => state.api.error);

  useEffect(() => {
    dispatch(fetchCollections());
    dispatch(fetchSignups());
    dispatch(fetchRevenue());
    dispatch(fetchBouncedCheques());
    dispatch(fetchInvoices());
    dispatch(fetchSchools());
  }, [dispatch]);

  console.log("Schools data: ", schools);
  console.log("Invoices data: ", invoices);

  if (loading === "loading") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-4 px-4 py-2 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 w-full">
            <Card className="py-4 bg-card-bg">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">Collections</h4>
                <small className="text-default-500 text-lg">
                  Total: {totalCollection}
                </small>
              </CardHeader>
              <CardBody className="overflow-visible py-2"></CardBody>
            </Card>
            <Card className="py-4 bg-card-bg h-full">
              <CardHeader className="pb-0 pt-2 px-4 flex gap-4 items-start justify-center h-full">
                <div>
                  <h4 className="font-bold text-large">Sign-ups</h4>
                  <small className="text-default-500 text-lg">
                    Total: {totalSignups}
                  </small>
                </div>
                <div className="text-default-500 text-sm pl-4 border-l-2 border-dashboard-bg h-full">
                  <p>
                    Zeraki Analytics: {signupsByProduct["Zeraki Analytics"]}
                  </p>
                  <p>Zeraki Finance: {signupsByProduct["Zeraki Finance"]}</p>
                  <p>
                    Zeraki Timetable: {signupsByProduct["Zeraki Timetable"]}
                  </p>
                </div>
              </CardHeader>
              <CardBody className="overflow-visible py-2"></CardBody>
            </Card>
            <Card className="py-4 bg-card-bg h-full">
              <CardHeader className="pb-0 pt-2 px-4 flex gap-4 items-start justify-center h-full">
                <div>
                  <h4 className="font-bold text-large">Revenue</h4>
                  <small className="text-default-500 text-lg">
                    Total: {totalRevenue}
                  </small>
                </div>
                <div className="text-default-500 text-sm pl-4 border-l-2 border-dashboard-bg h-full">
                  <p>
                    Zeraki Analytics: {revenueByProduct["Zeraki Analytics"]}
                  </p>
                  <p>Zeraki Finance: {revenueByProduct["Zeraki Finance"]}</p>
                  <p>
                    Zeraki Timetable: {revenueByProduct["Zeraki Timetable"]}
                  </p>
                </div>
              </CardHeader>
              <CardBody className="overflow-visible py-2"></CardBody>
            </Card>
            <Card className="py-4 bg-card-bg">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">Bounced Cheques</h4>
                <small className="text-default-500 text-lg">
                  Total: {totalBouncedCheques}
                </small>
              </CardHeader>
              <CardBody className="overflow-visible py-2"></CardBody>
            </Card>
          </div>

          <div>
            <Targets signup={signupsByProduct} />
          </div>
        </div>
        <div className="flex flex-col items-center bg-white rounded-md p-2 m-2 lg:ml-4">
          <div className="bg-white p-2 rounded-xl mt-4 lg:mt-0 w-full">
            <SignupsBarGraph />
          </div>
          <InvoicesList invoices={invoices} schools={schools} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

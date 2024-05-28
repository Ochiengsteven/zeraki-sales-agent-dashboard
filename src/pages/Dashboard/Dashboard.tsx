// Dashboard.tsx
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import {
  fetchCollections,
  fetchSignups,
  fetchRevenue,
  fetchBouncedCheques,
  selectTotalCollections,
  selectTotalSignups,
  selectTotalRevenue,
  selectTotalBouncedCheques,
} from "../../redux/api/apiSlice";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const totalCollection = useAppSelector(selectTotalCollections);
  const totalSignups = useAppSelector(selectTotalSignups);
  const totalRevenue = useAppSelector(selectTotalRevenue);
  const totalBouncedCheques = useAppSelector(selectTotalBouncedCheques);
  const loading = useAppSelector((state) => state.api.loading);
  const error = useAppSelector((state) => state.api.error);

  useEffect(() => {
    dispatch(fetchCollections());
    dispatch(fetchSignups());
    dispatch(fetchRevenue());
    dispatch(fetchBouncedCheques());
  }, [dispatch]);

  if (loading === "loading") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-4 px-4 py-2 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
        <Card className="py-4 bg-card-bg">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Collections</h4>
            <small className="text-default-500  text-lg">
              Total: {totalCollection}
            </small>
          </CardHeader>
          <CardBody className="overflow-visible py-2"></CardBody>
        </Card>
        <Card className="py-4 bg-card-bg">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Sign-ups</h4>
            <small className="text-default-500 text-lg">
              Total: {totalSignups}
            </small>
          </CardHeader>
          <CardBody className="overflow-visible py-2"></CardBody>
        </Card>
        <Card className="py-4 bg-card-bg">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Revenue</h4>
            <small className="text-default-500  text-lg">
              Total: {totalRevenue}
            </small>
          </CardHeader>
          <CardBody className="overflow-visible py-2"></CardBody>
        </Card>
        <Card className="py-4 bg-card-bg">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Bounced Cheques</h4>
            <small className="text-default-500  text-lg">
              Total: {totalBouncedCheques}
            </small>
          </CardHeader>
          <CardBody className="overflow-visible py-2"></CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

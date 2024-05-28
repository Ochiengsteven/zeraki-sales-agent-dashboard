import { Card, CardHeader, CardBody } from "@nextui-org/react";

const Dashboard = () => {
  return (
    <div className="mt-14 px-4 py-2 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Collections</h4>
            <small className="text-default-500">Total: 12</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2"></CardBody>
        </Card>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Sign-ups</h4>
            <small className="text-default-500">Total: 12</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2"></CardBody>
        </Card>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Revenue</h4>
            <small className="text-default-500">Total: 12</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2"></CardBody>
        </Card>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Bounced Cheques</h4>
            <small className="text-default-500">Total: 12</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2"></CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

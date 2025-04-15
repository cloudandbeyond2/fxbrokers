import AddBrokerInfo from "@/components/AddBrokerInfo";
import Breadcrumb from "@/components/Breadcrumb";
import WizardLayer from "@/components/WizardLayer";
import MasterLayout from "@/masterLayout/MasterLayout";

export const metadata = {
  title: "Forex",
  description:
    "Forex",
};

const Page = () => {
    
  return (
    <>
      <MasterLayout>
        <Breadcrumb title='Add Broker' />
        <AddBrokerInfo />
      </MasterLayout>
    </>
  );
};

export default Page;

import AddBestBrokerData from "@/components/AddBestBrokerData";
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
        <Breadcrumb title='Add Best Broker' />
        <AddBestBrokerData />
      </MasterLayout>
    </>
  );
};

export default Page;

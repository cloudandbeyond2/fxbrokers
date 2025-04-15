import AddBroker from "@/components/AddBroker";
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
        <Breadcrumb title='Broker' />
        <AddBroker />
      </MasterLayout>
    </>
  );
};

export default Page;

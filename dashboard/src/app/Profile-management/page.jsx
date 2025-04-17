import AddbrokerInfo from "@/components/Addbrokerinfo1";
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
        <AddbrokerInfo />
      </MasterLayout>
    </>
  );
};
 
export default Page;
import Breadcrumb from "@/components/Breadcrumb";
import BrokersListTableAdmin from "@/components/BrokersListTableAdmin";

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
        <Breadcrumb title='Broker List' />
        <BrokersListTableAdmin />
      </MasterLayout>
    </>
  );
};

export default Page;

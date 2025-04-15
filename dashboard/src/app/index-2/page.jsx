import Breadcrumb from "@/components/Breadcrumb";
import DashBoardLayerTwo from "@/components/DashBoardLayerTwo";
import MasterLayout from "@/masterLayout/MasterLayout";

export const metadata = {
  title: "Forex",
  description:
    "Forex",
};
const Page = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='CRM' />

        {/* DashBoardLayerTwo */}
        <DashBoardLayerTwo />
      </MasterLayout>
    </>
  );
};

export default Page;

import Breadcrumb from "@/components/Breadcrumb";
import DashBoardLayerFour from "@/components/DashBoardLayerFour";
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
        <Breadcrumb title='Cryptocracy' />

        {/* DashBoardLayerFour */}
        <DashBoardLayerFour />
      </MasterLayout>
    </>
  );
};

export default Page;

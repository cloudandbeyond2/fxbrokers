import Breadcrumb from "@/components/Breadcrumb";
import DashBoardLayerEight from "@/components/DashBoardLayerEight";
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
        <Breadcrumb title='Medical' />

        {/* DashBoardLayerEight */}
        <DashBoardLayerEight />
      </MasterLayout>
    </>
  );
};

export default Page;

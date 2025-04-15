import Breadcrumb from "@/components/Breadcrumb";
import DashBoardLayerNine from "@/components/DashBoardLayerNine";
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
        <Breadcrumb title='Analytics' />

        {/* DashBoardLayerNine */}
        <DashBoardLayerNine />
      </MasterLayout>
    </>
  );
};

export default Page;

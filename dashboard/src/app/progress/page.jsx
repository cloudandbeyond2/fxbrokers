import Breadcrumb from "@/components/Breadcrumb";
import ProgressLayer from "@/components/ProgressLayer";
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
        <Breadcrumb title='Components / Progress Bar' />

        {/* ProgressLayer */}
        <ProgressLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

import Breadcrumb from "@/components/Breadcrumb";
import RadioLayer from "@/components/RadioLayer";
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
        <Breadcrumb title='Components / Radio' />

        {/* RadioLayer */}
        <RadioLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

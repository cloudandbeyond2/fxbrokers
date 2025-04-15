import Breadcrumb from "@/components/Breadcrumb";
import CardLayer from "@/components/CardLayer";
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
        <Breadcrumb title='Components / Card' />

        {/* CardLayer */}
        <CardLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

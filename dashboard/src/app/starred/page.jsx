import Breadcrumb from "@/components/Breadcrumb";
import StarredLayer from "@/components/StarredLayer";
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
        <Breadcrumb title='Components / Email' />

        {/* StarredLayer */}
        <StarredLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

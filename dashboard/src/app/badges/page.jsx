import BadgesLayer from "@/components/BadgesLayer";
import Breadcrumb from "@/components/Breadcrumb";
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
        <Breadcrumb title='Components / Badges' />

        {/* BadgesLayer */}
        <BadgesLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

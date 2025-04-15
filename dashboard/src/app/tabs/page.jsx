import Breadcrumb from "@/components/Breadcrumb";
import TabsLayer from "@/components/TabsLayer";
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
        <Breadcrumb title='Components / Tab & Accordion' />

        {/* TabsLayer */}
        <TabsLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

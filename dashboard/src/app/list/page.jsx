import Breadcrumb from "@/components/Breadcrumb";
import ListLayer from "@/components/ListLayer";
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
        <Breadcrumb title='Components / List' />

        {/* ListLayer */}
        <ListLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

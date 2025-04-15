import Breadcrumb from "@/components/Breadcrumb";
import DropdownLayer from "@/components/DropdownLayer";
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
        <Breadcrumb title='Components / Dropdown' />

        {/* DropdownLayer */}
        <DropdownLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

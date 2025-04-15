import AssignRoleLayer from "@/components/AssignRoleLayer";
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
        <Breadcrumb title='Assign Role' />

        {/* AssignRoleLayer */}
        <AssignRoleLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

import Breadcrumb from "@/components/Breadcrumb";
import PaginationLayer from "@/components/PaginationLayer";
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
        <Breadcrumb title='Components / Pagination' />

        {/* PaginationLayer */}
        <PaginationLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

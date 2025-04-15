import AddAuthorizeWriters from "@/components/AddAuthorizeWriters";
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
        <Breadcrumb title='Add Authorize Writers' />

        {/* AddBlogLayer */}
        <AddAuthorizeWriters />
      </MasterLayout>
    </>
  );
};

export default Page;

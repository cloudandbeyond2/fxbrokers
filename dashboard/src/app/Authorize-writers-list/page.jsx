import AuthorizeWritersList from "@/components/AuthorizeWritersList";
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
        <Breadcrumb title='Authorize Writers List' />

        {/* TableDataLayer */}
        <AuthorizeWritersList />
      </MasterLayout>
    </>
  );
};

export default Page;
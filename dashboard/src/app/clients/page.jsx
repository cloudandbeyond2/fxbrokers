import AuthorizeWritersList from "@/components/AuthorizeWritersList";
import Breadcrumb from "@/components/Breadcrumb";
import ClientsList from "@/components/ClientsList";
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
        <Breadcrumb title='Client List' />

        {/* TableDataLayer */}
        <ClientsList />
      </MasterLayout>
    </>
  );
};

export default Page;
import Breadcrumb from "@/components/Breadcrumb";
import InvoiceListLayer from "@/components/InvoiceListLayer";
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
        <Breadcrumb title='Invoice - List' />

        {/* InvoiceListLayer */}
        <InvoiceListLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

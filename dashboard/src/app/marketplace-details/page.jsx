import Breadcrumb from "@/components/Breadcrumb";
import MarketplaceDetailsLayer from "@/components/MarketplaceDetailsLayer";
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
        <Breadcrumb title='Marketplace Details' />

        {/* MarketplaceDetailsLayer */}
        <MarketplaceDetailsLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

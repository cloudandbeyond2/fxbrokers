import Breadcrumb from "@/components/Breadcrumb";
import CurrenciesLayer from "@/components/CurrenciesLayer";
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
        <Breadcrumb title='Settings - Currencies' />

        {/* CurrenciesLayer */}
        <CurrenciesLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

import Breadcrumb from "@/components/Breadcrumb";
import PaymentGatewayLayer from "@/components/PaymentGatewayLayer";
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
        <Breadcrumb title='Settings - PaymentGateway' />

        {/* PaymentGatewayLayer */}
        <PaymentGatewayLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

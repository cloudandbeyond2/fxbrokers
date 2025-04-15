import Breadcrumb from "@/components/Breadcrumb";
import TypographyLayer from "@/components/TypographyLayer";
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
        <Breadcrumb title='Components / Typography' />

        {/* TypographyLayer */}
        <TypographyLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

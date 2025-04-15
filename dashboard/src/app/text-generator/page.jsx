import Breadcrumb from "@/components/Breadcrumb";
import TextGeneratorLayer from "@/components/TextGeneratorLayer";
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
        <Breadcrumb title='Text Generator' />

        {/* TextGeneratorLayer */}
        <TextGeneratorLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

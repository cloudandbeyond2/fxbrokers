import Breadcrumb from "@/components/Breadcrumb";
import ImageGeneratorLayer from "@/components/ImageGeneratorLayer";
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
        <Breadcrumb title='Image Generator' />

        {/* ImageGeneratorLayer */}
        <ImageGeneratorLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

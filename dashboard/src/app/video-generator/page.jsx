import Breadcrumb from "@/components/Breadcrumb";
import VideoGeneratorLayer from "@/components/VideoGeneratorLayer";
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
        <Breadcrumb title='Video Generator' />

        {/* VideoGeneratorLayer */}
        <VideoGeneratorLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

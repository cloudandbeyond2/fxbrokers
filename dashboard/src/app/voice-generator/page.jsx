import Breadcrumb from "@/components/Breadcrumb";
import VoiceGeneratorLayer from "@/components/VoiceGeneratorLayer";
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
        <Breadcrumb title='Voice Generator' />

        {/* VoiceGeneratorLayer */}
        <VoiceGeneratorLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

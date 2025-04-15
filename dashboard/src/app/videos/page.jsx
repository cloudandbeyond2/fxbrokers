import Breadcrumb from "@/components/Breadcrumb";
import VideosLayer from "@/components/VideosLayer";
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
        <Breadcrumb title='Components / Videos' />

        {/* VideosLayer */}
        <VideosLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

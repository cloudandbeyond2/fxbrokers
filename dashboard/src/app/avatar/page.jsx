import AvatarLayer from "@/components/AvatarLayer";
import Breadcrumb from "@/components/Breadcrumb";
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
        <Breadcrumb title='Components / Avatars' />

        {/* AvatarLayer */}
        <AvatarLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

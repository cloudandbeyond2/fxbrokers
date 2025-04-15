import Breadcrumb from "@/components/Breadcrumb";
import TagsLayer from "@/components/TagsLayer";
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
        <Breadcrumb title='Components / Tab & Accordion' />

        {/* TagsLayer */}
        <TagsLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

import Breadcrumb from "@/components/Breadcrumb";
import CodeGeneratorLayer from "@/components/CodeGeneratorLayer";
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
        <Breadcrumb title='Code Generator' />

        {/* CodeGeneratorLayer */}
        <CodeGeneratorLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

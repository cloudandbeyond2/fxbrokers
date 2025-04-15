import Breadcrumb from "@/components/Breadcrumb";
import CodeGeneratorNewLayer from "@/components/CodeGeneratorNewLayer";
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
        <Breadcrumb title='Code Generator New' />

        {/* CodeGeneratorNewLayer */}
        <CodeGeneratorNewLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

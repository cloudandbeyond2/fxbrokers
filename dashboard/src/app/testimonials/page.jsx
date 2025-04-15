import Breadcrumb from "@/components/Breadcrumb";
import TestimonialsLayer from "@/components/TestimonialsLayer";
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
        <Breadcrumb title='Testimonials' />

        {/* TestimonialsLayer */}
        <TestimonialsLayer />
      </MasterLayout>
    </>
  );
};

export default Page;

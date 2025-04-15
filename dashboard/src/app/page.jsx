// import DashBoardLayerOne from "@/components/DashBoardLayerOne";
import SignInLayer from "@/components/SignInLayer";
// import MasterLayout from "@/masterLayout/MasterLayout";
// import { Breadcrumb } from "react-bootstrap";

export const metadata = {
  title: "Forex",
  description:
    "Forex",
};

const Page = () => {
  return (
    <>
      {/* MasterLayout */}
      {/* <MasterLayout> */}
        {/* Breadcrumb */}
        {/* <Breadcrumb title='AI' /> */}

        {/* DashBoardLayerOne */}
        <SignInLayer />
      {/* </MasterLayout> */}
    </>
  );
};

export default Page;

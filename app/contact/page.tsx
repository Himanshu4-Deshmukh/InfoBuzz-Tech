import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
          pageName="Contact Us"
          description="We're delighted to assist you! If you have any questions, suggestions, or concerns, please don't hesitate to get in touch with us. We value your feedback and are committed to providing excellent customer service."
      
      />

      <Contact />
    </>
  );
};

export default ContactPage;

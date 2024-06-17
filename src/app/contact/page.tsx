import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Form from "@/components/ui/form/form-contact";
import { TypographyH2, TypographyP } from "@/components/ui/typography";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <TypographyP>
        I would be delighted to collaborate with you. Please provide the details
        of your inquiry below, or alternatively, suggest a convenient meeting
        time in the message box, and we can arrange a Google Meet.
      </TypographyP>
      <div className="mt-6">
        <TypographyH2>Get in touch</TypographyH2>
        <Form />
      </div>
    </>
  );
}

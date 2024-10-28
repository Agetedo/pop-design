import PagePortal from "./PagePortal";
import ContactContent from "./ContactContent";

export default function ContactPage() {
  return (
    <PagePortal button={"Contact"}>
      <ContactContent />
    </PagePortal>
  );
}
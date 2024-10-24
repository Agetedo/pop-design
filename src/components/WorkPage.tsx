import PagePortal from "./PagePortal";
import WorkContent from "./WorkContent";
const workText = "Turn to our custom web application development services to build content-heavy websites and platforms. Our digital media solutions incorporate immersive experiences, personalized content delivery, and other advanced features.";

export default function WorkPage() {
  return (
    <PagePortal button={"Our Work"}>
      <WorkContent 
        title={"Our Work"} 
        text={workText} 
      />
    </PagePortal>
  );
}
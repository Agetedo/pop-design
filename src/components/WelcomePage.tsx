import PagePortal from "./PagePortal";
import WelcomeContent from "./WelcomeContent";

export default function WelcomePage() {
  return (
    <PagePortal button={"Welcome"}>
      <WelcomeContent title={"Welcome to Pop Design"} />
    </PagePortal>
  );
}
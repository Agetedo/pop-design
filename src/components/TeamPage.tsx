import PagePortal from "./PagePortal";
import TeamContent from "./TeamContent";

export default function TeamPage() {
  return (
    <PagePortal button={"Our Team"}>
      <TeamContent title={"Background of Our Team"} />
    </PagePortal>
  );
}
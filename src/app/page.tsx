import Container from "@/components/Container/Container";
import JobFilter from "@/components/JobFilter/JobFilter";
import { JobList } from "@/components/JobList/JobList";

export default function Home() {
  return (
    <Container>
      <JobFilter />
      <JobList />
    </Container>
  );
}

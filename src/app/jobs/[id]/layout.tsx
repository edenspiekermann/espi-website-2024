import React from "react";
import { HeaderGeneric } from "@/sections/header-generic";
import { SidebarGeneric } from "@/components/sidebar-generic";
import { JobDescription } from "@/sections/job-description";
import { Divider } from "@/components/divider/divider";

type PageProps = { params: { id: string }; children: React.ReactNode };

export default async function JobDetailsLayout({
  children,
  params,
}: PageProps) {
  let jobs = [];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/jobs`,
      {
        next: { revalidate: 10 }, // Optional: ISR with revalidation
      },
    );
    jobs = await response.json();
  } catch (error) {
    console.error("Failed to fetch job postings", error);
  }

  const job = jobs.data.filter((job: any) => job.id === params.id);
  const { name, office, id, jobdescriptions } = job[0];

  const callToAction = {
    text: "Apply now",
    url: `/jobs/${id}/apply`,
  };

  return (
    <>
      <HeaderGeneric title={name} eyebrow={office} />
      <Divider invertColor={false} />
      <div className="container">
        <SidebarGeneric
          __typename={"SidebarGenericRecord"}
          id={id}
          text={"Interested? Join us!"}
          callToAction={callToAction}
        />
        <JobDescription jobDescriptions={jobdescriptions} />
      </div>
      {children}
    </>
  );
}

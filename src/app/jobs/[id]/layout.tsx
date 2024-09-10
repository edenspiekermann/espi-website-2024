import React from "react";
import { HeaderGeneric } from "@/sections/header-generic";
import { SidebarGeneric } from "@/components/sidebar-generic";
import { JobDescription } from "@/sections/job-description";
import { Divider } from "@/components/divider/divider";
import { fetchJobsData } from "@/lib/fetch-jobs-data";

type PageProps = { params: { id: string }; children: React.ReactNode };

export async function generateMetadata({ params }: PageProps) {
  const jobs = await fetchJobsData();
  const job = jobs.find((job: any) => job.id === params.id);

  if (job) {
    return {
      title: `${job.name} - ${job.office}`,
      description: `Find out more about the position of ${job.name} at ${job.office}. Apply now!`,
    };
  } else {
    return {
      title: "Job not found",
    };
  }
}

export default async function JobDetailsLayout({
  children,
  params,
}: PageProps) {
  const jobs = await fetchJobsData();
  const job = jobs.find((job: any) => job.id === params.id);

  if (!job) {
    return <div>Job not found</div>;
  }
  const { name, office, id, jobdescriptions } = job;

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

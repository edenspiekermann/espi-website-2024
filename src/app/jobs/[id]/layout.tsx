import React from "react";
import { HeaderGeneric } from "@/sections/header-generic";

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
  const { name, office } = job[0];

  return (
    <>
      <HeaderGeneric title={name} eyebrow={office} />
      {children}
    </>
  );
}

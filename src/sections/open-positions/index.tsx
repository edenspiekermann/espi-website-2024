"use client";

import React, { useEffect, useState } from "react";
import { NowHiringIcon } from "./now-hiring";
import { OpenPositionFragment } from "@/graphql/types/generated";
import styles from "./styles.module.scss";
import Link from "next/link";

interface JobDetails {
  id: string;
  office: string;
  department: string;
  recruitingcategory: string;
  name: string;
  jobdescriptions: [[Object], [Object], [Object]];
  employmenttype: string;
  seniority: string;
  schedule: string;
  yearsofexperience: string;
  occupation: string;
  occupationcategory: string;
  createdat: string;
}

export const OpenPositions = ({ title }: OpenPositionFragment) => {
  const [jobs, setJobs] = useState<JobDetails[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs");
        const jobsData = await response.json();
        setJobs(jobsData.data);
      } catch (error) {
        setError("Failed to fetch job postings");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className={styles.openPositions}>
      <div className="container">
        <NowHiringIcon />
        <div className={styles.jobContent}>
          <p className={styles.title}>{title}</p>
          <ul className={styles.jobs}>
            {loading && <li>Loading jobs...</li>}
            {error && <li>{error}</li>}
            {!loading && !error && jobs.length === 0 && (
              <li>No jobs available</li>
            )}
            {!loading &&
              !error &&
              jobs.map((job) => (
                <Link
                  href={`/jobs/${job.id}`}
                  key={job.id}
                  className={styles.jobLinkWrapper}
                >
                  <li className={styles.job}>
                    <span className={styles.name}>{job.name}</span>
                    <span className={styles.office}>{job.office}</span>
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

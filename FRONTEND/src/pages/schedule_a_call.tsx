import ScheduleCall from "@/components/ScheduleCall";
import React from "react";
import { getSchedule_a_callData } from "../../lib/sanity.query";
import { ScheduleCallProps } from "../../lib/interface";
import Head from "next/head";

function schedulecall({ schedule_a_call }: ScheduleCallProps) {
  return <>
    <Head>
      <title>Book an Appointment  — Zest Digital</title>
      <meta name="title" property="" content="Book an Appointment  — Zest Digital" />
      <meta name="url" property="og:url" content="https://www.zestdigital.com/schedule_a_call" />
      <meta name="keywords" property="og:keywords" content="schedule_a_call, Book, slot" />
      <meta name="description" property="og:description" content="" />
    </Head>
    <div className="Body_padding">
      <ScheduleCall data={schedule_a_call[0]} />
    </div>
  </>

}
export default schedulecall;

export async function getStaticProps() {
  const schedule_a_call = await getSchedule_a_callData();
  return {
    props: { schedule_a_call },
  };
}




import ScheduleCall from "@/components/ScheduleCall";
import React from "react";
import { getSchedule_a_callData } from "../../lib/sanity.query";

function schedulecall({ schedule_a_call }: any) {
  return (
    <>
      <ScheduleCall data={schedule_a_call[0]} />
    </>
  );
}

export default schedulecall;

export async function getServerSideProps() {
  const schedule_a_call = await getSchedule_a_callData();

  return {
    props: { schedule_a_call },
  };
}

import ScheduleCall from "@/components/ScheduleCall";
import React from "react";
import { getSchedule_a_callData } from "../../lib/sanity.query";
import { ScheduleCallProps } from "../../lib/interface";

function schedulecall({ schedule_a_call }: ScheduleCallProps) {
  return (
  <div className="Body_padding">

  <ScheduleCall data={schedule_a_call[0]} />
  </div>

  );
}

export default schedulecall;

export async function getStaticProps() {
  const schedule_a_call = await getSchedule_a_callData();

  return {
    props: { schedule_a_call },
  };
}

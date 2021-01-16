import React from "react";
import MemberCard from "./MemberCard";

function Team() {
  return (
    <div className="flex w-full px-6 pt-32 pb-16">
      <MemberCard />
      <MemberCard />
      <MemberCard />
    </div>
  );
}

export default Team;

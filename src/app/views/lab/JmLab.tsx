import React, { useState } from 'react';
import './JmLab.scss';
import JmDashboard from "../../../domain/dashboard/JmDashboard.tsx";

function JmLab() {
  return (
    <section className="JmLab">
      <JmDashboard/>
    </section>
  );
}

export default JmLab;

import React, { useEffect, useState } from 'react';
import './JmLab.scss';
import JmDashboard from "../../../domain/dashboard/JmDashboard.tsx";
import jmHooks from "../../../components/jmHooks.tsx";

function JmLab(props) {
  const [visibility, setVisibility] = useState(jmHooks.useVisibility('lab', props.view.id));
  useEffect(() => {
     const updatedVisibility = jmHooks.useVisibility('lab', props.view.id);
     setVisibility(updatedVisibility);
  }, [props.view]);
  return (
    <section className="JmLab" style={visibility}>
      <JmDashboard/>
    </section>
  );
}

export default JmLab;

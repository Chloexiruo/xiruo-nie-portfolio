const projects = [
  {
    number: "01",
    title: "ASA DataFest",
    context: "Team data analysis competition",
    period: "Mar 2026",
    summary:
      "Analysed a complex real-world dataset under time pressure and translated the findings into a focused story for a non-technical judging panel.",
    methods: ["Data cleaning", "Exploratory analysis", "Visualisation", "Data storytelling"],
    evidence: [
      "Collaborated with a team to clean, analyse, and visualise an unfamiliar dataset within a competition deadline.",
      "Used exploratory analysis to identify patterns and turn statistical findings into practical insights.",
      "Structured the final presentation around evidence, visualisations, and clear recommendations.",
    ],
  },
  {
    number: "02",
    title: "Epidemic Dynamics",
    context: "Mathematical modelling and numerical simulation",
    period: "Feb - May 2026",
    summary:
      "Built a five-compartment zombie epidemic model to investigate how transmission and quarantine rates change long-term outcomes.",
    methods: ["Differential equations", "Forward Euler", "Scenario analysis", "Phase diagram"],
    evidence: [
      "Represented healthy humans, infected carriers, zombies, quarantined individuals, and deceased individuals in a coupled nonlinear system.",
      "Applied the forward Euler method to simulate the model over a long-term horizon.",
      "Compared extinction, transient coexistence, and survival scenarios by varying the quarantine rate.",
      "Produced graphical analysis and a phase diagram to explain the balance between transmission and quarantine.",
    ],
  },
  {
    number: "03",
    title: "Time Series Analysis",
    context: "R and statistical modelling",
    period: "University of Leeds",
    summary:
      "Investigated historical time series data, fitted autoregressive models, and assessed whether the models captured the underlying structure.",
    methods: ["R", "Autoregressive models", "Residual diagnostics", "Technical reporting"],
    evidence: [
      "Identified trends in historical observations and fitted autoregressive models.",
      "Evaluated residual behaviour using diagnostic testing.",
      "Communicated the analysis in a report written for a non-specialist audience.",
    ],
  },
];

export default projects;

function JourneyVisual() {
  return (
    <svg
      className="project-visual"
      viewBox="0 0 520 250"
      role="img"
      aria-labelledby="journey-visual-title journey-visual-description"
    >
      <title id="journey-visual-title">Fracture patient journey schematic</title>
      <desc id="journey-visual-description">
        Four connected stages labelled arrival, investigation, treatment, and outcome.
        This diagram shows the analytical structure and does not encode patient counts.
      </desc>

      <defs>
        <marker id="journey-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>

      <text className="project-visual__kicker" x="20" y="28">PATIENT JOURNEY</text>
      <path className="project-visual__route" d="M 85 120 H 175" markerEnd="url(#journey-arrow)" />
      <path className="project-visual__route" d="M 215 120 H 305" markerEnd="url(#journey-arrow)" />
      <path className="project-visual__route" d="M 345 120 H 435" markerEnd="url(#journey-arrow)" />

      <g className="project-visual__node">
        <circle cx="55" cy="120" r="30" />
        <text x="55" y="124" textAnchor="middle">01</text>
        <text className="project-visual__label" x="55" y="175" textAnchor="middle">Arrival</text>
      </g>
      <g className="project-visual__node">
        <circle cx="185" cy="120" r="30" />
        <text x="185" y="124" textAnchor="middle">02</text>
        <text className="project-visual__label" x="185" y="175" textAnchor="middle">Investigation</text>
      </g>
      <g className="project-visual__node project-visual__node--focus">
        <circle cx="315" cy="120" r="30" />
        <text x="315" y="124" textAnchor="middle">03</text>
        <text className="project-visual__label" x="315" y="175" textAnchor="middle">Treatment</text>
      </g>
      <g className="project-visual__node">
        <circle cx="445" cy="120" r="30" />
        <text x="445" y="124" textAnchor="middle">04</text>
        <text className="project-visual__label" x="445" y="175" textAnchor="middle">Outcome</text>
      </g>

      <text className="project-visual__note" x="20" y="230">STRUCTURE ONLY - NO PATIENT COUNTS ENCODED</text>
    </svg>
  );
}

function EpidemicVisual() {
  return (
    <svg
      className="project-visual"
      viewBox="0 0 520 250"
      role="img"
      aria-labelledby="epidemic-visual-title epidemic-visual-description"
    >
      <title id="epidemic-visual-title">Conceptual epidemic scenario map</title>
      <desc id="epidemic-visual-description">
        A conceptual phase boundary separates survival and extinction regions as
        transmission and quarantine conditions change. No parameter values are shown.
      </desc>

      <text className="project-visual__kicker" x="20" y="28">SCENARIO MAP</text>
      <path className="project-visual__axis" d="M 65 195 V 55 M 65 195 H 475" />
      <path className="project-visual__boundary" d="M 105 170 C 190 150, 260 115, 440 72" />

      <text className="project-visual__zone" x="120" y="85">Human survival</text>
      <text className="project-visual__zone" x="325" y="175">Human extinction</text>
      <text className="project-visual__note" x="250" y="109">TRANSIENT COEXISTENCE</text>

      <circle className="project-visual__point project-visual__point--safe" cx="165" cy="110" r="7" />
      <circle className="project-visual__point" cx="280" cy="125" r="7" />
      <circle className="project-visual__point project-visual__point--alert" cx="390" cy="155" r="7" />

      <text className="project-visual__axis-label" x="270" y="230" textAnchor="middle">Transmission rate increases</text>
      <text className="project-visual__axis-label" x="18" y="130" transform="rotate(-90 18 130)" textAnchor="middle">Quarantine rate increases</text>
    </svg>
  );
}

function TimeSeriesVisual() {
  return (
    <svg
      className="project-visual"
      viewBox="0 0 520 250"
      role="img"
      aria-labelledby="time-visual-title time-visual-description"
    >
      <title id="time-visual-title">Time series modelling workflow</title>
      <desc id="time-visual-description">
        Three directly labelled panels show an observed series, an autoregressive fit,
        and residual checks. The lines are schematic and do not encode project values.
      </desc>

      <text className="project-visual__kicker" x="20" y="28">MODEL WORKFLOW</text>

      <g transform="translate(20 58)">
        <text className="project-visual__panel-label" x="0" y="0">01 OBSERVED SERIES</text>
        <path className="project-visual__baseline" d="M 0 78 H 145" />
        <polyline className="project-visual__series" points="0,68 18,55 36,61 54,35 72,45 90,28 108,34 126,15 145,24" />
      </g>

      <g transform="translate(188 58)">
        <text className="project-visual__panel-label" x="0" y="0">02 AR MODEL</text>
        <path className="project-visual__baseline" d="M 0 78 H 145" />
        <polyline className="project-visual__series" points="0,66 18,57 36,55 54,42 72,40 90,31 108,29 126,22 145,20" />
        <polyline className="project-visual__fit" points="0,62 18,59 36,52 54,46 72,39 90,34 108,28 126,23 145,18" />
      </g>

      <g transform="translate(356 58)">
        <text className="project-visual__panel-label" x="0" y="0">03 RESIDUAL CHECK</text>
        <path className="project-visual__baseline" d="M 0 45 H 145" />
        <circle className="project-visual__residual" cx="10" cy="37" r="4" />
        <circle className="project-visual__residual" cx="32" cy="52" r="4" />
        <circle className="project-visual__residual" cx="54" cy="40" r="4" />
        <circle className="project-visual__residual" cx="76" cy="49" r="4" />
        <circle className="project-visual__residual" cx="98" cy="42" r="4" />
        <circle className="project-visual__residual" cx="120" cy="51" r="4" />
        <circle className="project-visual__residual" cx="142" cy="39" r="4" />
      </g>

      <path className="project-visual__workflow" d="M 166 115 H 180 M 334 115 H 348" />
      <text className="project-visual__note" x="20" y="230">METHOD SCHEMATIC - NO PROJECT VALUES ENCODED</text>
    </svg>
  );
}

export { EpidemicVisual, JourneyVisual, TimeSeriesVisual };

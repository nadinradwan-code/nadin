import {
  cholulaChannels,
  cholulaOutcomes,
  cholulaPillars,
} from "@/lib/cholula-case";

export function PillarGrid() {
  return (
    <div className="cholula-pillar-grid">
      {cholulaPillars.map((pillar) => (
        <article key={pillar.name} className="cholula-pillar">
          <p className="cholula-kicker">{pillar.name}</p>
          <p>{pillar.body}</p>
        </article>
      ))}
    </div>
  );
}

export function OutcomeStrip() {
  return (
    <ul className="cholula-outcomes">
      {cholulaOutcomes.map((item) => (
        <li key={item.label}>
          <p className="cholula-stat">{item.stat}</p>
          <p className="cholula-kicker">{item.label}</p>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function ChannelRow() {
  return (
    <ul className="cholula-channels" aria-label="Campaign channels">
      {cholulaChannels.map((channel) => (
        <li key={channel}>{channel}</li>
      ))}
    </ul>
  );
}

export function SlateLockup() {
  return (
    <div className="cholula-lockup" aria-hidden="true">
      <p className="cholula-lockup-kicker">The line that held every surface</p>
      <p className="cholula-lockup-mark">Uncap Real Flavor</p>
    </div>
  );
}

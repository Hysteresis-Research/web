'use client';

import { useEffect, useState } from 'react';

function pad(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}

// The desk keeps time in one zone. Renders a placeholder on the server and
// during first paint, then ticks every second client-side. Intentionally NOT
// inside the <nav> landmark — a clock is not navigation.
export default function UtcClock() {
  const [time, setTime] = useState<string>('--:--:-- UTC');

  useEffect(() => {
    function tick() {
      const d = new Date();
      setTime(
        `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(
          d.getUTCSeconds(),
        )} UTC`,
      );
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="clock"
      aria-label="Coordinated Universal Time"
      suppressHydrationWarning
    >
      {time}
    </span>
  );
}

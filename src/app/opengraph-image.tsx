import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt =
  'Hysteresis Research — A research-driven quantitative trading firm';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0b0b0c',
          color: '#e8e6df',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 24,
              opacity: 0.5,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
            }}
          >
            est 2026
          </div>
          <div
            style={{
              fontSize: 104,
              letterSpacing: '-0.02em',
              lineHeight: 1.0,
              marginTop: 28,
            }}
          >
            Hysteresis Research
          </div>
          <div style={{ fontSize: 44, opacity: 0.62, marginTop: 18 }}>
            迟滞研究
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 30,
              opacity: 0.7,
              fontStyle: 'italic',
              lineHeight: 1.3,
            }}
          >
            where price lags fundamentals — long enough to be measured.
          </div>
          <div
            style={{
              fontSize: 20,
              opacity: 0.4,
              marginTop: 28,
              fontFamily: 'monospace',
              letterSpacing: '0.05em',
            }}
          >
            hysteresisresearch.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

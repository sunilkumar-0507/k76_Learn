/** Neural-network style illustration for the AI section. */
export function AIVisual() {
  const layers = [
    [70, 130, 190, 250, 310],
    [100, 160, 220, 280],
    [100, 160, 220, 280],
    [100, 170, 240, 310],
  ];
  const xs = [60, 170, 280, 390];
  const labels = ['Marketing', 'Design', 'Coding', 'Workflows'];

  return (
    <svg
      viewBox="0 0 480 380"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration of a neural network connecting AI to marketing, design, coding and workflows"
    >
      <defs>
        <linearGradient id="ai-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#38bdf8" stopOpacity="0.55" />
          <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="ai-node" cx="0.4" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#e0e7ff" />
          <stop offset="1" stopColor="#6366f1" />
        </radialGradient>
        <filter id="ai-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {layers
        .slice(0, -1)
        .map((layer, li) =>
          layer.map((y1) =>
            layers[li + 1].map((y2, j) => (
              <line
                key={`${li}-${y1}-${y2}`}
                x1={xs[li]}
                y1={y1}
                x2={xs[li + 1]}
                y2={y2}
                stroke="url(#ai-line)"
                strokeWidth="0.8"
                opacity={0.35 + ((y1 + j) % 3) * 0.15}
              />
            )),
          ),
        )}

      {/* Travelling pulses */}
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} r="3" fill="#7dd3fc" filter="url(#ai-glow)">
          <animateMotion
            dur={`${3 + i * 0.7}s`}
            repeatCount="indefinite"
            path={`M60 ${layers[0][i]} L170 ${layers[1][i]} L280 ${layers[2][(i + 1) % 4]} L390 ${layers[3][i]}`}
          />
        </circle>
      ))}

      {layers.map((layer, li) =>
        layer.map((y) => (
          <g key={`n-${li}-${y}`}>
            <circle cx={xs[li]} cy={y} r={li === 3 ? 11 : 8} fill="#0b0e1d" stroke="rgba(255,255,255,0.18)" />
            <circle cx={xs[li]} cy={y} r={li === 3 ? 6 : 4} fill="url(#ai-node)" filter="url(#ai-glow)" />
          </g>
        )),
      )}

      {layers[3].map((y, i) => (
        <text key={y} x={xs[3] + 20} y={y + 4} fill="#cbd5e1" fontSize="12" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600">
          {labels[i]}
        </text>
      ))}
    </svg>
  );
}

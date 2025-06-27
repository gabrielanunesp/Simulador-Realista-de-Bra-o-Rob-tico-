export default function RobotArm({ rotationBase, rotationTop }) {
  return (
    <div className="w-full flex justify-center">
      <svg
        viewBox="0 0 200 300"
        className="w-full max-w-[250px] sm:max-w-sm md:max-w-md h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base */}
        <rect x="80" y="260" width="40" height="30" rx="5" fill="#1e293b" stroke="#0ff" strokeWidth="2" />

        {/* Braço inferior (rotação da base) */}
        <g transform={`rotate(${rotationBase}, 100, 260)`}>
          <rect x="90" y="180" width="20" height="80" fill="#334155" stroke="#0ff" strokeWidth="2" rx="5" />
          <circle cx="100" cy="180" r="10" fill="#0ff" />

          {/* Braço superior (rotação do topo) */}
          <g transform={`rotate(${rotationTop}, 100, 180)`}>
            <rect x="90" y="100" width="20" height="80" fill="#475569" stroke="#a855f7" strokeWidth="2" rx="5" />
            <circle cx="100" cy="100" r="8" fill="#a855f7" />

            {/* Mão robótica (pinça) */}
            <line x1="95" y1="100" x2="90" y2="85" stroke="#0ff" strokeWidth="2" />
            <line x1="105" y1="100" x2="110" y2="85" stroke="#0ff" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

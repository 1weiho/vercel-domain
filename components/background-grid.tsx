interface BackgroundGridProps {
  className?: string;
}

const BackgroundGrid = ({ className }: BackgroundGridProps) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1200 760"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <line x1="40" y1="19.5" x2="1160" y2="19.5" stroke="#E8E8E8" />
    <line x1="40" y1="99.5" x2="1160" y2="99.5" stroke="#E8E8E8" />
    <line x1="40" y1="179.5" x2="1160" y2="179.5" stroke="#E8E8E8" />
    <line x1="40" y1="259.5" x2="1160" y2="259.5" stroke="#E8E8E8" />
    <line x1="40" y1="339.5" x2="1160" y2="339.5" stroke="#E8E8E8" />
    <line x1="40" y1="419.5" x2="1160" y2="419.5" stroke="#E8E8E8" />
    <line x1="40" y1="499.5" x2="1160" y2="499.5" stroke="#E8E8E8" />
    <line x1="40" y1="579.5" x2="1160" y2="579.5" stroke="#E8E8E8" />
    <line x1="40" y1="659.5" x2="1160" y2="659.5" stroke="#E8E8E8" />
    <line x1="40" y1="739.5" x2="1160" y2="739.5" stroke="#E8E8E8" />
    <line x1="40.5" y1="20" x2="40.5" y2="740" stroke="#E8E8E8" />
    <line x1="120.5" y1="20" x2="120.5" y2="740" stroke="#E8E8E8" />
    <line x1="200.5" y1="20" x2="200.5" y2="740" stroke="#E8E8E8" />
    <line x1="280.5" y1="20" x2="280.5" y2="740" stroke="#E8E8E8" />
    <line x1="360.5" y1="20" x2="360.5" y2="740" stroke="#E8E8E8" />
    <line x1="440.5" y1="20" x2="440.5" y2="739" stroke="#E8E8E8" />
    <line x1="520.5" y1="20" x2="520.5" y2="739" stroke="#E8E8E8" />
    <line x1="600.5" y1="20" x2="600.5" y2="740" stroke="#E8E8E8" />
    <line x1="680.5" y1="20" x2="680.5" y2="740" stroke="#E8E8E8" />
    <line x1="760.5" y1="20" x2="760.5" y2="740" stroke="#E8E8E8" />
    <line x1="840.5" y1="20" x2="840.5" y2="740" stroke="#E8E8E8" />
    <line x1="920.501" y1="20" x2="920.501" y2="740" stroke="#E8E8E8" />
    <line x1="1000.5" y1="20" x2="1000.5" y2="740" stroke="#E8E8E8" />
    <line x1="1080.5" y1="20" x2="1080.5" y2="740" stroke="#E8E8E8" />
    <line x1="1160.5" y1="20" x2="1160.5" y2="740" stroke="#E8E8E8" />
    <rect width="1200" height="760" fill="url(#paint0_radial_3_38)" />
    <defs>
      <radialGradient
        id="paint0_radial_3_38"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(600 380) rotate(90) scale(380 600)"
      >
        <stop stop-color="white" stop-opacity="0" />
        <stop offset="1" stop-color="white" />
      </radialGradient>
    </defs>
  </svg>
);

export default BackgroundGrid;

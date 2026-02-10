/**
 * BackgroundElements Component
 * 
 * Renders the fixed background animations for the portfolio website:
 * - 3D perspective grid with smooth infinite scroll animation
 * - Noise overlay for texture
 * - SVG filter definitions
 * 
 * All styles are defined in src/styles/animations.css following CSS custom properties
 */

const NoiseOverlay = () => (
  <div className="noise-overlay" aria-hidden="true" />
);

const GridPatch = ({ top, left, width, height }) => (
  <div
    className="grid-patch"
    style={{
      top,
      left,
      width,
      height,
    }}
  />
);

const PerspectiveGrid = () => (
  <div className="perspective-grid">
    <GridPatch top="15rem" left="20%" width="5rem" height="10rem" />
    <GridPatch top="800px" left="60%" width="10rem" height="5rem" />
    <GridPatch top="400px" left="80%" width="5rem" height="5rem" />
  </div>
);

const SVGFilterDefinitions = () => (
  <svg style={{ display: 'none' }} aria-hidden="true">
    <filter id="noiseFilter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.95"
        numOctaves="3"
        stitchTiles="stitch"
      />
      <feColorMatrix type="saturate" values="0" />
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.4" />
      </feComponentTransfer>
    </filter>
  </svg>
);

const BackgroundElements = () => {
  return (
    <>
      <SVGFilterDefinitions />
      <NoiseOverlay />
      <div className="grid-container">
        <PerspectiveGrid />
      </div>
    </>
  );
};

export default BackgroundElements;
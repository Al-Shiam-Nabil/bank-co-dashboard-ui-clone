import { VectorMap } from "@react-jvectormap/core";
import type { IVectorMapProps } from "@react-jvectormap/core/dist/types";
import { worldMill } from "@react-jvectormap/world";

type VectorMapFixedProps = IVectorMapProps & {
  zoomButtons?: boolean;
};

export default function WorldMap() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <VectorMap
        {...({
          map: worldMill,
          backgroundColor: "transparent",

          /* Zoom */
          zoomOnScroll: true,
          zoomButtons: false,
          panOnDrag: true,

          /* Markers */
          markers: [
            { latLng: [23.8103, 90.4125], name: "Dhaka: 15,732" },
            { latLng: [34.0522, -118.2437], name: "Los Angeles: 15,732" },
          ],
          markerStyle: {
            initial: {
              fill: "#22C55E",
              stroke: "#FFFFFF",
              r: 6,
            },
            hover: {
              fill: "#16A34A",
            },
          },

          /* USA Highlight */
          series: {
            regions: [
              {
                attribute: "fill",
                values: { US: 1 },
                scale: ["#22C55E"],
                normalizeFunction: "polynomial",
              },
            ],
          },

          /* Country Styles */
          regionStyle: {
            initial: {
              fill: "#E6F0FF",
              stroke: "none",
            },
            hover: {
              fill: "#93C5FD",
            },
          },

          /* Tooltip */
          onRegionTipShow: (_e, el, code) => {
            const tooltip = el as HTMLElement;

            const countryName = (worldMill as any).paths?.[code]?.name || code;

            // FORCE tooltip content for ALL countries
            tooltip.innerText = countryName;

            Object.assign(tooltip.style, {
              background: "#2563EB",
              color: "#FFFFFF",
              padding: "6px 10px",
              borderRadius: "8px",
              border: "none",
              fontSize: "13px",
              fontWeight: "500",
              whiteSpace: "nowrap",
            });
          },
        } as VectorMapFixedProps)}
      />
    </div>
  );
}

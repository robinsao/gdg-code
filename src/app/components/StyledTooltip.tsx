import { Tooltip } from "recharts";

export default function StyledTooltip() {
  return (
    <Tooltip
      contentStyle={{ background: "#232325", border: "none", color: "#fff" }}
      labelStyle={{ color: "#FFA726" }}
      cursor={{ cursor: "pointer", fill: "rgba(0,0,0,0.16)" }}
    />
  );
}

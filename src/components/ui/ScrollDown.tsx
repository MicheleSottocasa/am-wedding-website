import { Box } from "@mui/material";

interface ScrollDownProps {
  position?: "absolute" | "fixed" | "relative"; // Allows positioning customization
  bottom?: string; // Distance from the bottom
  left?: string; // Horizontal alignment
  zIndex?: number; // Layer priority
}

export default function ScrollDown({
  position = "absolute",
  bottom = "20px",
  left = "50%",
  zIndex = 20,
}: ScrollDownProps) {
  return (
    <Box
      sx={{
        position,
        bottom,
        left,
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        zIndex,
      }}
    >
      {/* Arrows */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginTop: { md: "-10vh" },
        }}
      >
        {[0, 200, 400].map((delay) => (
          <Box
            key={delay}
            sx={{
              width: "24px",
              height: "24px",
              borderLeft: "2px solid gray",
              borderBottom: "2px solid gray",
              transform: "rotate(45deg)",
              animation: `bounce 1.5s infinite`,
              animationDelay: `${delay}ms`,
            }}
          />
        ))}
      </Box>
      {/* Keyframes for bounce animation */}
      <style jsx global>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0) rotate(-45deg);
          }
          50% {
            transform: translateY(10px) rotate(-45deg);
          }
        }
      `}</style>
    </Box>
  );
}
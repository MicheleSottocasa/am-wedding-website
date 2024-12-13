import { Box } from "@mui/material";

export default function ScrollDown() {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        zIndex: 20,
      }}
    >
      {/* Arrows */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
import {
  MotionsThreeDotsContainer,
  MotionsThreeDotsDot,
} from "../motions/Motions";

export default function ThreeDotsWave() {
  return (
    <div
      style={{
        paddingTop: "5rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MotionsThreeDotsContainer
        className="flex flex-row gap-5"
        initial="initial"
        animate="animate"
      >
        <MotionsThreeDotsDot
          className="w-4 h-4 lg:h-8 lg:w-8 bg-white rounded-full"
          animate={{
            y: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <MotionsThreeDotsDot
            className="w-4 h-4 lg:h-8 lg:w-8 bg-white rounded-full"
          animate={{
            y: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 0.1,
          }}
        />
        <MotionsThreeDotsDot
          className="w-4 h-4 lg:h-8 lg:w-8 bg-white rounded-full"
          animate={{
            y: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 0.2,
          }}
        />
      </MotionsThreeDotsContainer>
    </div>
  );
}

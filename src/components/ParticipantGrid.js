import React from "react";
import { useState } from "react";
import { useMeetingAppContext } from "../MeetingAppContextDef";
import { ParticipantView } from "./ParticipantView";

const MemoizedParticipant = React.memo(
  ParticipantView,
  (prevProps, nextProps) => {
    return prevProps.participantId === nextProps.participantId;
  }
);

function ParticipantGrid({ participantIds, isPresenting, currentParticipantId, creatorId }) {
  const { sideBarMode } = useMeetingAppContext();
  const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

  // Determine the active participant and creator
  const activeParticipantId = participantIds[0] === currentParticipantId ? participantIds[0] : participantIds[1];
  const otherParticipantId = participantIds[0] === activeParticipantId ? participantIds[1] : participantIds[0];

  const [isCreatorFullScreen, setIsCreatorFullScreen] = useState(false);
  const [isActiveParticipantFullScreen, setIsActiveParticipantFullScreen] = useState(false);


   // Toggle functions for participants
   const toggleActiveParticipantFullScreen = () => {
    if (!isActiveParticipantFullScreen) {
      setIsActiveParticipantFullScreen(true);
      setIsCreatorFullScreen(false); // Ensure the creator goes back to small view
    }
  };

  const toggleCreatorFullScreen = () => {
    if (!isCreatorFullScreen) {
      setIsCreatorFullScreen(true);
      setIsActiveParticipantFullScreen(false); // Ensure the active participant goes back to small view
    }
  };

  const participantWidthClass = isPresenting ? "w-[30%]" : "w-[100%]";

  return (
    <div className={`relative flex flex-col items-center justify-center ${participantWidthClass} h-full`}>
      {/* Main Active Participant View */}
      {activeParticipantId && (
        <div
          className={`${
            isActiveParticipantFullScreen
              ? "inset-0 absolute w-full h-full" // Active participant in full screen
              : isCreatorFullScreen
              ? "absolute bottom-4 right-6 w-[10rem] h-[7rem] z-10" // Active participant in small view when creator is full screen
              : "flex-grow flex items-center justify-center w-[95%]" // Full view when creator is not full screen
          }`}
          // Only add onClick when not in full-screen mode
          onClick={!isActiveParticipantFullScreen ? toggleActiveParticipantFullScreen : null}
          style={{ cursor: isActiveParticipantFullScreen ? "default" : "pointer" }}
        >
          <MemoizedParticipant participantId={activeParticipantId} />
        </div>
      )}

      {/* Creator View in Bottom-Right Corner or Full Screen */}
      {otherParticipantId && (
        <div
          className={`absolute ${isCreatorFullScreen ? "inset-0" : "bottom-4 right-6"} flex flex-col`}
          // Only add onClick when not in full-screen mode
          onClick={!isCreatorFullScreen ? toggleCreatorFullScreen : null}
          style={{ cursor: isCreatorFullScreen ? "default" : "pointer" }}
        >
          <div className={`${isCreatorFullScreen ? "w-full h-full" : "w-[10rem] h-[7rem]"}`}>
            <MemoizedParticipant participantId={otherParticipantId} />
          </div>
        </div>
      )}
    </div>
  );
}

export const MemoizedParticipantGrid = React.memo(
  ParticipantGrid,
  (prevProps, nextProps) => {
    return (
      JSON.stringify(prevProps.participantIds) ===
        JSON.stringify(nextProps.participantIds) &&
      prevProps.isPresenting === nextProps.isPresenting &&
      prevProps.currentParticipantId === nextProps.currentParticipantId &&
      prevProps.creatorId === nextProps.creatorId
    );
  }
);

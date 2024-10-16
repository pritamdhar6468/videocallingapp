import React from "react";
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

  return (
    <div className={`relative flex flex-col items-center justify-center w-full h-full`}>
      {/* Main Active Participant View */}
      {activeParticipantId && (
        <div className={`flex-grow flex items-center justify-center`}>
          <MemoizedParticipant participantId={activeParticipantId} />
        </div>
      )}

      {/* Creator View in Bottom-Right Corner */}
      {otherParticipantId && (
        <div className="absolute bottom-4 right-4 flex flex-col">
          <div className={`w-20 h-20`}>
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

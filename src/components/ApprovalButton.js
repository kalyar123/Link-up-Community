import React, { useState } from "react";

function ApprovalButton() {
  const [isApproved, setIsApproved] = useState(false);

  const handleClick = () => {
    setIsApproved(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Approve</button>
      {isApproved && <div>Approved!</div>}
    </div>
  );
}

export default ApprovalButton;

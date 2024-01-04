function SubsectionMob() {
  const handleCross = () => {
    const subContainer = document.querySelector(".subContainer");
    subContainer.style.display = "none";
    
    
  };

  return (
    <>
      <div className="subContainer ">
        <div className="topHeader p-4">
          <h1>Sub-Section Details</h1>
          <div className="cross">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              onClick={handleCross}
            >
              <path
                d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
                fill="red"
              ></path>
            </svg>
          </div>
        </div>
        <div className="bottomForms">
          <div className="firstInput">
            <label>Name of assessment</label>
            <div className="input">
              <h1>Type Here</h1>
            </div>
          </div>
          {/* Second input */}
          <div className="firstInput">
            <label>Purpose of the test is</label>
            <div className="input second-Input">
              <h1>Select</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"
                  fill="#1C4980"
                ></path>
              </svg>
            </div>
          </div>
          {/* Third Input */}
          <div className="firstInput">
            <label>Description</label>
            <div className="input second-Input">
              <h1>Select</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"
                  fill="#1C4980"
                ></path>
              </svg>
            </div>
          </div>
          {/* Skill Section */}
          <div className="firstInput">
            <label>Skills</label>
            <div className="input selection">
              <div className="xyz flex flex-wrap gap-2">
                <div className="mini flex gap-3">
                  <p>UI/UX and Design</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className="mini flex gap-3">
                  <p>Web Development</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className="mini flex gap-3">
                  <p>UI/UX and Design</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className="mini flex gap-3">
                  <p>No of Question</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className="mini flex gap-3">
                  <p>Web Development</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="input lastInput">
                <h1>Type Here</h1>
              </div>
            </div>
            <div className="firstInput ">
              <label>Duration of assessment</label>
              <div className="input">
                <h1>HH:MM:SS</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="button">
          <h1>Next</h1>
        </div>
      </div>
    </>
  );
}

export default SubsectionMob;

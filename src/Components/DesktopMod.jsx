import TopSectionMob from "./TopSectionMob";

const DesktopMod = () => {
  const handleMobClick = () => {
    let width = window.screen.width;
    width <= 430;
    if (!width) {
      return <TopSectionMob/>
    }
  };
  return (
    <>
      <div className="main-container">
        {/* Left Side Bar */}
        <div className="side-Container z-20 fixed w-[140px] h-[992px] pt-4 pr-5 pb-5 pl-[30px] flex flex-col gap-[10px] bg-white shadow-lg shadow-black-600/50">
          <div className="side-container-inner w-[90px] h-[361px] flex flex-col gap-4 ">
            <div className="inner-content flex flex-col justify-center items-center gap-[6px]">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_867)">
                  <path
                    d="M15.8333 4.66667V6.33333H12.5V4.66667H15.8333ZM7.5 4.66667V9.66667H4.16667V4.66667H7.5ZM15.8333 11.3333V16.3333H12.5V11.3333H15.8333ZM7.5 14.6667V16.3333H4.16667V14.6667H7.5ZM17.5 3H10.8333V8H17.5V3ZM9.16667 3H2.5V11.3333H9.16667V3ZM17.5 9.66667H10.8333V18H17.5V9.66667ZM9.16667 13H2.5V18H9.16667V13Z"
                    fill="#1C4980"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_867">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <h1 className="text-[#1C4980] font-medium font text-xs">
                Desktop
              </h1>
            </div>
            <div className="inner-content flex flex-col justify-center items-center gap-[6px] bg-[#E5F1FC] rounded-lg px-[10px] py-5 border-solid border-2 border-[#0073E6]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2H17C17.5523 2 18 2.44772 18 3V15H22V19C22 20.6569 20.6569 22 19 22ZM18 17V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V17H18ZM16 20V4H4V19C4 19.5523 4.44772 20 5 20H16ZM6 7H14V9H6V7ZM6 11H14V13H6V11ZM6 15H11V17H6V15Z"
                  fill="#1C4980"
                ></path>
              </svg>
              <h1 className="text-[#0073E6] font-medium font text-xs">
                Assessment
              </h1>
            </div>
            <div className="inner-content flex flex-col justify-center items-center gap-[6px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5.76282 17H20V5H4V18.3851L5.76282 17ZM6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM11 14H13V16H11V14ZM8.56731 8.81346C8.88637 7.20919 10.302 6 12 6C13.933 6 15.5 7.567 15.5 9.5C15.5 11.433 13.933 13 12 13H11V11H12C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.2723 8 10.6656 8.51823 10.5288 9.20577L8.56731 8.81346Z"
                  fill="#1C4980"
                ></path>
              </svg>
              <h1 className="text-[#1C4980] font-medium font text-xs">
                My Library
              </h1>
            </div>
            <div className="inner-content flex flex-col justify-center items-center gap-[6px]">
              <svg
                width="90"
                height="2"
                viewBox="0 0 90 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H90" stroke="#BACBD5" strokeDasharray="2 2" />
              </svg>
              <div className="admin bg-[#FBEBEA] rounded-[22px] px-[10px] py-1 gap-[6px] border-solid border-[1px] border-[#D63500] my-[6px]">
                <h1 className="text-xs">Admin</h1>
              </div>
            </div>
            <div className="inner-content flex flex-col justify-center items-center gap-[6px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.27813 12.6835C6.7316 13.2278 6.06944 13.4965 5.29167 13.4896C4.51389 13.4826 3.85417 13.2071 3.3125 12.6631C2.77083 12.1191 2.5 11.4628 2.5 10.6944C2.5 9.9259 2.77326 9.26951 3.31979 8.72521L6.72188 5.31646C7.2684 4.77215 7.93056 4.50347 8.70833 4.51042C9.48611 4.51736 10.1458 4.79285 10.6875 5.3369C11.2292 5.88094 11.5 6.53719 11.5 7.30565C11.5 8.0741 11.2267 8.73049 10.6802 9.27479L7.27813 12.6835ZM4.375 11.6042C4.73611 11.9653 5.10147 12.0945 5.47108 11.992C5.84069 11.8894 6.09339 11.767 6.22917 11.625L7.39583 10.4583L5.54167 8.625L4.375 9.79167C4.125 10.0417 4 10.3438 4 10.6979C4 11.0521 4.125 11.3542 4.375 11.6042ZM9.625 6.39583C9.26389 6.03472 8.90146 5.90546 8.53771 6.00804C8.17397 6.11064 7.92529 6.23296 7.79167 6.375L6.60417 7.54167L8.45833 9.39583L9.625 8.22917C9.875 7.97917 10 7.67361 10 7.3125C10 6.95139 9.875 6.64583 9.625 6.39583ZM1.5 16C1.0875 16 0.734375 15.8531 0.440625 15.5594C0.146875 15.2656 0 14.9125 0 14.5V3.5C0 3.0875 0.146875 2.73438 0.440625 2.44063C0.734375 2.14688 1.0875 2 1.5 2H5.0625C5.17361 1.56944 5.40625 1.21181 5.76042 0.927083C6.11458 0.642361 6.52778 0.5 7 0.5C7.47222 0.5 7.88542 0.642361 8.23958 0.927083C8.59375 1.21181 8.82639 1.56944 8.9375 2H12.5C12.9125 2 13.2656 2.14688 13.5594 2.44063C13.8531 2.73438 14 3.0875 14 3.5V14.5C14 14.9125 13.8531 15.2656 13.5594 15.5594C13.2656 15.8531 12.9125 16 12.5 16H1.5ZM1.5 14.5H12.5V3.5H1.5V14.5ZM7 3C7.14444 3 7.26389 2.95278 7.35833 2.85833C7.45278 2.76389 7.5 2.64444 7.5 2.5C7.5 2.35556 7.45278 2.23611 7.35833 2.14167C7.26389 2.04722 7.14444 2 7 2C6.85556 2 6.73611 2.04722 6.64167 2.14167C6.54722 2.23611 6.5 2.35556 6.5 2.5C6.5 2.64444 6.54722 2.76389 6.64167 2.85833C6.73611 2.95278 6.85556 3 7 3Z"
                  fill="#1C4980"
                />
              </svg>
              <h1 className="text-[#1C4980] font-medium font text-xs">
                Round Status
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Right Side Bar */}
      <div className="right-section h-[734px] w-[1264px] left-[156px] absolute top-[3px] ">
        <div className="topsSectoinOfRight flex justify-between h-[70px] py-5 gap-6 bg-white border-solid border-[1px] border-[#DDE5EA] rounded-t-lg">
          <div className="left flex gap-5 items-center ">
            <div className="left-one h-[70px] pl-[24px] flex justify-center items-center">
              <h1 className="text-xl font-semibold text-[#1C4980]">
                Assessment
              </h1>
            </div>
            {/* Vector */}
            <svg
              width="2"
              height="46"
              viewBox="0 0 2 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 0V46" stroke="#DADCE0" />
            </svg>
            <div className="left-two h-[70px] border-solid border-b-[3px] border-[#0073E6] flex justify-center items-center">
              <h1 className="text-[#0073E6] font-semibold text-sm">
                My Assessments
              </h1>
            </div>
          </div>
          <div className="right pr-[24px] cursor-pointer">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleMobClick}
            >
              <g clipPath="url(#clip0_0_451)">
                <path
                  d="M17 1H7.00001C5.90001 1 5.01001 1.85 5.01001 2.95V20.95C5.01001 22.05 5.90001 23 7.00001 23H17C18.1 23 19 22.05 19 20.95V2.95C19 1.85 18.1 1 17 1ZM17 19H7.00001V5H17V19Z"
                  fill="#1C4980"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_451">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="bottomSectionOfRight h-[664px] rounded-b-lg bg-white p-5 flex flex-col gap-6">
          <div className="bottomInner h-[624px]">
            <div className="bottomFirst flex gap-[16px] flex-col">
              <h1 className="font-medium text-lg text-[#1C4980]">
                Assessments Overview
              </h1>
              <div className="h-[114px] rounded-xl flex gap-[1px] border-solid border-[1px] border-[#DADCE0]">
                {/* First Inner div */}
                <div className="flex flex-col gap-[16px] py-4 px-5 h-[114px]">
                  <h1 className="font-semibold text-[14px] text-[#1C4980]">
                    Total Assessment
                  </h1>
                  <div className="flex gap-[10px] items-center">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="8" fill="#EBE8FD" />
                      <g clipPath="url(#clip0_0_482)">
                        <path
                          d="M25.8333 14.1667V17.5H13.3333V14.1667H25.8333ZM25.8333 22.5V25.8333H13.3333V22.5H25.8333ZM26.6667 12.5H12.5C12.0417 12.5 11.6667 12.875 11.6667 13.3333V18.3333C11.6667 18.7917 12.0417 19.1667 12.5 19.1667H26.6667C27.125 19.1667 27.5 18.7917 27.5 18.3333V13.3333C27.5 12.875 27.125 12.5 26.6667 12.5ZM26.6667 20.8333H12.5C12.0417 20.8333 11.6667 21.2083 11.6667 21.6667V26.6667C11.6667 27.125 12.0417 27.5 12.5 27.5H26.6667C27.125 27.5 27.5 27.125 27.5 26.6667V21.6667C27.5 21.2083 27.125 20.8333 26.6667 20.8333Z"
                          fill="#6548EE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_482">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(10 10)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <h1 className="font-bold text-xl text-[#1C4980]">34</h1>
                  </div>
                </div>
                {/* ************************** */}
                {/* Vector Svg */}
                <svg
                  width="2"
                  height="114"
                  viewBox="0 0 2 114"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 0V114" stroke="#DADCE0" />
                </svg>

                {/* Second Inner div */}
                <div className="flex flex-col gap-[16px] py-4 px-5 h-[114px] w-[369px]">
                  <h1 className="font-semibold text-[14px] text-[#1C4980]">
                    Candidates
                  </h1>
                  <div className="flex gap-[10px] items-center">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="8" fill="#EBE8FD" />

                      <g mask="url(#mask0_0_489)">
                        <path
                          d="M10.6787 26.9209V24.4082C10.6787 23.9051 10.8089 23.4427 11.0692 23.0209C11.3295 22.5992 11.6753 22.2774 12.1067 22.0554C12.9778 21.6215 13.8643 21.2953 14.7664 21.0767C15.6684 20.8581 16.5845 20.7488 17.5148 20.7488C18.4514 20.7488 19.3707 20.8573 20.2729 21.0742C21.1751 21.2911 22.0584 21.6166 22.9228 22.0504C23.3542 22.2719 23.7 22.5931 23.9604 23.0139C24.2207 23.4347 24.3508 23.8994 24.3508 24.4079V26.9209H10.6787ZM26.0922 26.9209V24.2565C26.0922 23.6321 25.9237 23.0304 25.5868 22.4512C25.2498 21.8721 24.7639 21.3563 24.1289 20.9037C24.8007 20.9937 25.4358 21.1369 26.0342 21.3333C26.6327 21.5297 27.1961 21.7687 27.7245 22.0504C28.2377 22.3282 28.6321 22.656 28.9076 23.0338C29.1832 23.4117 29.3209 23.8242 29.3209 24.2714V26.9209H26.0922ZM17.5148 19.9155C16.5715 19.9155 15.766 19.5816 15.0983 18.9139C14.4306 18.2462 14.0967 17.4407 14.0967 16.4974C14.0967 15.5542 14.4306 14.7487 15.0983 14.081C15.766 13.4133 16.5715 13.0794 17.5148 13.0794C18.458 13.0794 19.2635 13.4133 19.9312 14.081C20.5989 14.7487 20.9328 15.5542 20.9328 16.4974C20.9328 17.4407 20.5989 18.2462 19.9312 18.9139C19.2635 19.5816 18.458 19.9155 17.5148 19.9155ZM26.0922 16.4974C26.0922 17.4373 25.7576 18.242 25.0884 18.9114C24.4192 19.5808 23.6147 19.9155 22.675 19.9155C22.5184 19.9155 22.3236 19.8973 22.0909 19.8609C21.8581 19.8245 21.6586 19.7822 21.4926 19.7338C21.8742 19.2828 22.1666 18.78 22.3696 18.2255C22.5727 17.6711 22.6742 17.0953 22.6742 16.4982C22.6742 15.9011 22.5727 15.325 22.3696 14.7701C22.1666 14.2151 21.8742 13.7121 21.4926 13.261C21.6903 13.1882 21.8864 13.1398 22.0809 13.1156C22.2753 13.0915 22.4723 13.0794 22.6718 13.0794C23.6124 13.0794 24.4176 13.4141 25.0875 14.0834C25.7573 14.7528 26.0922 15.5574 26.0922 16.4974ZM12.5745 25.0251H22.455V24.4331C22.455 24.2836 22.4168 24.1476 22.3404 24.0253C22.264 23.9029 22.1633 23.8077 22.0383 23.7397C21.3082 23.378 20.5662 23.1051 19.8123 22.9209C19.0584 22.7367 18.2925 22.6446 17.5148 22.6446C16.7436 22.6446 15.9778 22.7367 15.2172 22.9209C14.4566 23.1051 13.7146 23.378 12.9912 23.7397C12.8662 23.8077 12.7655 23.9029 12.6891 24.0253C12.6127 24.1476 12.5745 24.2836 12.5745 24.4331V25.0251ZM17.514 18.0943C17.9529 18.0943 18.3289 17.9381 18.642 17.6255C18.9551 17.3129 19.1117 16.9372 19.1117 16.4982C19.1117 16.0593 18.9554 15.6833 18.6428 15.3702C18.3302 15.0571 17.9545 14.9005 17.5155 14.9005C17.0766 14.9005 16.7006 15.0568 16.3875 15.3694C16.0744 15.682 15.9178 16.0577 15.9178 16.4966C15.9178 16.9356 16.0741 17.3116 16.3867 17.6247C16.6993 17.9378 17.075 18.0943 17.514 18.0943Z"
                          fill="#6548EE"
                        />
                      </g>
                    </svg>
                    <div className="flex flex-col gap-[1px]">
                      <div className="flex items-center gap-[4px]">
                        <h1 className="font-bold text-xl text-[#1C4980]">
                          11,145
                        </h1>
                        <p className="font-medium text-[12px] text-[#05C165]">
                          +89
                        </p>
                      </div>
                      <h1 className="font-medium text-[12px] text-[#1C4980] ">
                        Total Candidate
                      </h1>
                    </div>
                    {/* Vector svg */}
                    <svg
                      width="2"
                      height="40"
                      viewBox="0 0 2 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 0V40" stroke="#DADCE0" />
                    </svg>
                    <div className="flex flex-col gap-[1px]">
                      <div className="flex items-center gap-[4px]">
                        <h1 className="font-bold text-xl text-[#1C4980]">
                          1,14
                        </h1>
                        <p className="font-medium text-[12px] text-[#05C165]">
                          +89
                        </p>
                      </div>
                      <h1 className="font-medium text-[12px] text-[#1C4980] ">
                        Who Attamped
                      </h1>
                    </div>
                  </div>
                </div>
                {/* ************************** */}
                <svg
                  width="2"
                  height="114"
                  viewBox="0 0 2 114"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 0V114" stroke="#DADCE0" />
                </svg>
                {/* Third Inner div */}
                <div className="flex flex-col gap-[16px] py-4 px-5 h-[114px] w-[499px]">
                  <h1 className="font-semibold text-[14px] text-[#1C4980]">
                    Candidates Source
                  </h1>
                  <div className="flex gap-[10px] items-center">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="8" fill="#FCE8EF" />

                      <g mask="url(#mask0_0_508)">
                        <path
                          d="M17.8333 26.2917C17.5833 25.8334 17.3645 25.3577 17.177 24.8646C16.9895 24.3715 16.8333 23.8611 16.7083 23.3334H14.25C14.6527 24.0278 15.1562 24.632 15.7604 25.1459C16.3645 25.6597 17.0555 26.0417 17.8333 26.2917ZM13.5416 21.6667H16.375C16.3333 21.3889 16.302 21.1146 16.2812 20.8438C16.2604 20.5729 16.25 20.2917 16.25 20C16.25 19.7084 16.2604 19.4271 16.2812 19.1563C16.302 18.8854 16.3333 18.6111 16.375 18.3334H13.5416C13.4722 18.6111 13.4201 18.8854 13.3854 19.1563C13.3507 19.4271 13.3333 19.7084 13.3333 20C13.3333 20.2917 13.3507 20.5729 13.3854 20.8438C13.4201 21.1146 13.4722 21.3889 13.5416 21.6667ZM14.25 16.6667H16.7083C16.8333 16.1389 16.9895 15.6285 17.177 15.1354C17.3645 14.6424 17.5833 14.1667 17.8333 13.7084C17.0555 13.9584 16.3645 14.3403 15.7604 14.8542C15.1562 15.3681 14.6527 15.9722 14.25 16.6667ZM18.4166 16.6667H21.5833C21.4166 16.0556 21.2013 15.4792 20.9375 14.9375C20.6736 14.3959 20.3611 13.875 20 13.375C19.6388 13.875 19.3263 14.3959 19.0625 14.9375C18.7986 15.4792 18.5833 16.0556 18.4166 16.6667ZM23.2916 16.6667H25.75C25.3472 15.9722 24.8437 15.3681 24.2395 14.8542C23.6354 14.3403 22.9444 13.9584 22.1666 13.7084C22.4166 14.1667 22.6354 14.6424 22.8229 15.1354C23.0104 15.6285 23.1666 16.1389 23.2916 16.6667ZM20 28.3334C18.8611 28.3334 17.7847 28.1146 16.7708 27.6771C15.7569 27.2396 14.8715 26.6424 14.1145 25.8854C13.3576 25.1285 12.7604 24.2431 12.3229 23.2292C11.8854 22.2153 11.6666 21.1389 11.6666 20C11.6666 18.8472 11.8854 17.7674 12.3229 16.7604C12.7604 15.7535 13.3576 14.8715 14.1145 14.1146C14.8715 13.3577 15.7569 12.7604 16.7708 12.3229C17.7847 11.8854 18.8611 11.6667 20 11.6667C21.1527 11.6667 22.2326 11.8854 23.2395 12.3229C24.2465 12.7604 25.1284 13.3577 25.8854 14.1146C26.6423 14.8715 27.2395 15.7535 27.677 16.7604C28.1145 17.7674 28.3333 18.8472 28.3333 20C28.3333 20.1389 28.3298 20.2778 28.3229 20.4167C28.3159 20.5556 28.3055 20.6945 28.2916 20.8334H26.6041C26.6319 20.6945 26.6493 20.559 26.6562 20.4271C26.6632 20.2952 26.6666 20.1528 26.6666 20C26.6666 19.7084 26.6493 19.4271 26.6145 19.1563C26.5798 18.8854 26.5277 18.6111 26.4583 18.3334H23.625C23.6666 18.6111 23.6979 18.8854 23.7187 19.1563C23.7395 19.4271 23.75 19.7084 23.75 20V20.4271C23.75 20.559 23.743 20.6945 23.7291 20.8334H22.0625C22.0763 20.6945 22.0833 20.559 22.0833 20.4271V20C22.0833 19.7084 22.0729 19.4271 22.052 19.1563C22.0312 18.8854 22 18.6111 21.9583 18.3334H18.0416C18 18.6111 17.9687 18.8854 17.9479 19.1563C17.927 19.4271 17.9166 19.7084 17.9166 20C17.9166 20.2917 17.927 20.5729 17.9479 20.8438C17.9687 21.1146 18 21.3889 18.0416 21.6667H20.8333V23.3334H18.4166C18.5833 23.9445 18.7986 24.5209 19.0625 25.0625C19.3263 25.6042 19.6388 26.125 20 26.625C20.1527 26.4028 20.2986 26.1771 20.4375 25.9479C20.5763 25.7188 20.7083 25.4861 20.8333 25.25V28.2917C20.6944 28.3056 20.559 28.316 20.427 28.3229C20.2951 28.3299 20.1527 28.3334 20 28.3334ZM26.625 27.8125L24.1666 25.3542V27.2084H22.5V22.5H27.2083V24.1667H25.3333L27.7916 26.625L26.625 27.8125Z"
                          fill="#E9407A"
                        />
                      </g>
                    </svg>
                    <div className="flex flex-col gap-[1px]">
                      <div className="flex items-center gap-[4px]">
                        <h1 className="font-bold text-xl text-[#1C4980]">
                          11,000
                        </h1>
                        <p className="font-medium text-[12px] text-[#05C165]">
                          +89
                        </p>
                      </div>
                      <h1 className="font-medium text-[12px] text-[#1C4980] ">
                        E-mail
                      </h1>
                    </div>
                    {/* Vector svg */}
                    <svg
                      width="2"
                      height="40"
                      viewBox="0 0 2 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 0V40" stroke="#DADCE0" />
                    </svg>
                    <div className="flex flex-col gap-[1px]">
                      <div className="flex items-center gap-[4px]">
                        <h1 className="font-bold text-xl text-[#1C4980]">
                          145
                        </h1>
                        <p className="font-medium text-[12px] text-[#05C165]">
                          +89
                        </p>
                      </div>
                      <h1 className="font-medium text-[12px] text-[#1C4980] ">
                        Social Share
                      </h1>
                    </div>
                    <svg
                      width="2"
                      height="40"
                      viewBox="0 0 2 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 0V40" stroke="#DADCE0" />
                    </svg>
                    <div className="flex flex-col gap-[1px]">
                      <div className="flex items-center gap-[4px]">
                        <h1 className="font-bold text-xl text-[#1C4980]">
                          145
                        </h1>
                        <p className="font-medium text-[12px] text-[#05C165]">
                          +89
                        </p>
                      </div>
                      <h1 className="font-medium text-[12px] text-[#1C4980] ">
                        Unique Link
                      </h1>
                    </div>
                  </div>
                </div>
                {/* ********************* */}
                {/* Fourth div */}
                <svg
                  width="2"
                  height="114"
                  viewBox="0 0 2 114"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 0V114" stroke="#DADCE0" />
                </svg>
                <div className="flex flex-col gap-[16px] py-4 px-5 h-[114px]">
                  <h1 className="font-semibold text-[14px] text-[#1C4980]">
                    Total Purpose
                  </h1>
                  <div className="flex gap-[10px] items-center">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="8" fill="#E5F1FC" />

                      <g mask="url(#mask0_0_533)">
                        <path
                          d="M19.0921 24.3362H15.8335C14.6339 24.3362 13.6113 23.9135 12.7657 23.068C11.9202 22.2225 11.4974 21.2 11.4974 20.0005C11.4974 18.801 11.9202 17.7784 12.7657 16.9326C13.6113 16.0869 14.6339 15.6641 15.8335 15.6641H19.0921V17.5599H15.8356C15.1572 17.5599 14.5805 17.7972 14.1056 18.2716C13.6307 18.7461 13.3933 19.3223 13.3933 20.0001C13.3933 20.678 13.6307 21.2541 14.1056 21.7286C14.5805 22.2031 15.1572 22.4403 15.8356 22.4403H19.0921V24.3362ZM16.5522 20.8733V19.1269H23.4481V20.8733H16.5522ZM20.9082 24.3362V22.4403H24.1647C24.8431 22.4403 25.4198 22.2031 25.8947 21.7286C26.3696 21.2541 26.607 20.678 26.607 20.0001C26.607 19.3223 26.3696 18.7461 25.8947 18.2716C25.4198 17.7972 24.8431 17.5599 24.1647 17.5599H20.9082V15.6641H24.1668C25.3665 15.6641 26.3891 16.0868 27.2346 16.9322C28.0801 17.7777 28.5029 18.8002 28.5029 19.9997C28.5029 21.1993 28.0801 22.2219 27.2346 23.0676C26.3891 23.9133 25.3665 24.3362 24.1668 24.3362H20.9082Z"
                          fill="#0073E6"
                        />
                      </g>
                    </svg>

                    <h1 className="font-bold text-xl text-[#1C4980]">11</h1>
                  </div>
                </div>
                {/* ******************* */}
              </div>
            </div>
            <div className="bottomSecond flex flex-col gap-4 h-[445px] mt-6">
              <h1 className="font-medium text-lg text-[#1C4980]">
                My Assessment
              </h1>
              <div className="h-[389px] flex gap-[30px]">
                <div className="flex h-[209px] gap-[30px]">
                  <div className="container flex flex-col justify-center bg-[#F6F8FA] rounded-xl p-[30px]  gap-[12px] border-dashed border-[1px] border-[#DADCE0] w-[388px] h-[209px]">
                    <div className="inner_container flex flex-col justify-center items-center">
                      <div className="add_icon">
                        <svg
                          width="70"
                          height="71"
                          viewBox="0 0 70 71"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.5"
                            width="70"
                            height="70"
                            rx="35"
                            fill="white"
                          />
                          <g clipPath="url(#clip0_0_552)">
                            <path
                              d="M46.6667 37.1667H36.6667V47.1667H33.3334V37.1667H23.3334V33.8333H33.3334V23.8333H36.6667V33.8333H46.6667V37.1667Z"
                              fill="#0073E6"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_0_552">
                              <rect
                                width="40"
                                height="40"
                                fill="white"
                                transform="translate(15 15.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="text-[#1C4980] text-lg font-medium ">
                        <h1>New Assessment</h1>
                      </div>
                    </div>
                    <p className="text-center font-medium text-xs w-[328px] h-30px text-[#1C4980]">
                      From here you can add questions of multiple types like
                      MCQs, subjective (text or paragraph)!
                    </p>
                  </div>
                  {/* Second div */}
                  <div className="card flex flex-col rounded-xl border-solid border-[1px] border-[#DADCE0] bg-white p-4 gap-4 w-[388px]">
                    <div className="flex-both flex justify-between">
                      <div className="flex gap-2 flex-col">
                        <svg
                          width="50"
                          height="50"
                          viewBox="0 0 50 50"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="50" height="50" rx="12" fill="#EBE8FD" />
                          <path
                            d="M33.1677 18.4956H29.0796C28.8592 16.4981 27.6597 15 26.142 15H22.9106C22.0783 15 21.295 15.4494 20.7319 16.2984C20.3158 16.8976 20.0465 17.6717 19.9731 18.4956H15.8849C14.8568 18.4956 14 19.3695 14 20.4682V33.0275C14 34.1011 14.8323 35 15.8849 35H33.1677C34.1958 35 35.0526 34.1261 35.0526 33.0275V20.4682C35.0526 19.3695 34.2203 18.4956 33.1677 18.4956ZM26.1175 24.2385H22.9351C22.2007 24.2385 21.5887 24.8876 21.5887 25.6866V26.4107C17.4272 25.437 15.5177 24.563 15.224 24.1635V20.6679C15.224 20.2934 15.5667 19.9938 15.9829 19.9938H33.0698C33.4859 19.9938 33.8286 20.2934 33.8286 20.6679V24.1386C33.5349 24.5381 31.6255 25.412 27.4639 26.4107V25.6866C27.4639 24.8876 26.8519 24.2385 26.1175 24.2385ZM21.7356 17.2472C21.9315 16.9725 22.3476 16.4981 22.9106 16.4981H26.142C26.9743 16.4981 27.6842 17.4719 27.8556 18.7453H21.1971C21.2705 18.171 21.4663 17.6467 21.7356 17.2472ZM33.1922 33.7266H15.8605C15.5177 33.7266 15.224 33.427 15.224 33.0774V25.6117C16.2766 26.161 18.186 26.8352 21.6867 27.6092C21.907 29.0574 23.1065 30.1561 24.5753 30.1561C26.0196 30.1561 27.2191 29.0574 27.4149 27.6092C30.9155 26.8352 32.825 26.161 33.8531 25.6117V33.0774C33.8286 33.427 33.5349 33.7266 33.1922 33.7266Z"
                            fill="#6548EE"
                          />
                        </svg>
                        <div className="flex flex-col">
                          <h1 className="font-medium text-lg text-[#1C4980]">
                            Math Assessment
                          </h1>
                          <div className="flex gap-2">
                            <h1 className="font-semibold text-[#1C4980] text-sm">
                              Job
                            </h1>
                            <h1 className="text-[#DADCE0] h-[16px]">|</h1>

                            <div className="flex items-center gap-2">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_0_568)">
                                  <path
                                    d="M11.6667 1.75001H11.0834V0.583344H9.91669V1.75001H4.08335V0.583344H2.91669V1.75001H2.33335C1.69169 1.75001 1.16669 2.27501 1.16669 2.91668V12.25C1.16669 12.8917 1.69169 13.4167 2.33335 13.4167H11.6667C12.3084 13.4167 12.8334 12.8917 12.8334 12.25V2.91668C12.8334 2.27501 12.3084 1.75001 11.6667 1.75001ZM11.6667 12.25H2.33335V4.66668H11.6667V12.25Z"
                                    fill="#1C4980"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.50002 7.00001C3.50002 6.67784 3.76119 6.41668 4.08335 6.41668H5.83335C6.15552 6.41668 6.41669 6.67784 6.41669 7.00001C6.41669 7.32218 6.15552 7.58334 5.83335 7.58334H4.08335C3.76119 7.58334 3.50002 7.32218 3.50002 7.00001ZM7.58335 7.00001C7.58335 6.67784 7.84452 6.41668 8.16669 6.41668H9.91669C10.2389 6.41668 10.5 6.67784 10.5 7.00001C10.5 7.32218 10.2389 7.58334 9.91669 7.58334H8.16669C7.84452 7.58334 7.58335 7.32218 7.58335 7.00001ZM3.50002 9.33334C3.50002 9.01118 3.76119 8.75001 4.08335 8.75001H5.83335C6.15552 8.75001 6.41669 9.01118 6.41669 9.33334C6.41669 9.65551 6.15552 9.91668 5.83335 9.91668H4.08335C3.76119 9.91668 3.50002 9.65551 3.50002 9.33334ZM7.58335 9.33334C7.58335 9.01118 7.84452 8.75001 8.16669 8.75001H9.91669C10.2389 8.75001 10.5 9.01118 10.5 9.33334C10.5 9.65551 10.2389 9.91668 9.91669 9.91668H8.16669C7.84452 9.91668 7.58335 9.65551 7.58335 9.33334Z"
                                    fill="#1C4980"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_0_568">
                                    <rect width="14" height="14" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p className="font-medium text-xs text-[#8DA4BF]">
                                20 Apr 2023
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4167 6.66667C11.5673 6.66667 12.5 5.73393 12.5 4.58333C12.5 3.43274 11.5673 2.5 10.4167 2.5C9.26607 2.5 8.33333 3.43274 8.33333 4.58333C8.33333 5.73393 9.26607 6.66667 10.4167 6.66667Z"
                            fill="#1C4980"
                          />
                          <path
                            d="M10.4167 12.5C11.5673 12.5 12.5 11.5673 12.5 10.4167C12.5 9.26607 11.5673 8.33333 10.4167 8.33333C9.26607 8.33333 8.33333 9.26607 8.33333 10.4167C8.33333 11.5673 9.26607 12.5 10.4167 12.5Z"
                            fill="#1C4980"
                          />
                          <path
                            d="M10.4167 18.3333C11.5673 18.3333 12.5 17.4006 12.5 16.25C12.5 15.0994 11.5673 14.1667 10.4167 14.1667C9.26607 14.1667 8.33333 15.0994 8.33333 16.25C8.33333 17.4006 9.26607 18.3333 10.4167 18.3333Z"
                            fill="#1C4980"
                          />
                        </svg>
                      </div>
                    </div>
                    <svg
                      width="356"
                      height="2"
                      viewBox="0 0 356 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 1H356"
                        stroke="#DADCE0"
                        strokeDasharray="3 3"
                      />
                    </svg>
                    {/* bottom section */}
                    <div className="bottom flex gap-3 ">
                      <div className="first text-xs font-semibold">
                        <h1 className="text-[#1C4980]">00</h1>
                        <p className="text-[#1C4980]">Duration</p>
                      </div>
                      <div className="second text-xs font-semibold">
                        <h1 className="text-[#1C4980]">00</h1>
                        <p className="text-[#1C4980]">Questions</p>
                      </div>
                      <div className="last float-end m-auto"></div>
                      <button className="flex gap-1 py-[2px] px-2 rounded-[50px] border-solid border-[1px] border-[#1C4980] items-center">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.00026 1.28492L4.11464 3.17054L5.05745 4.11335L6.94307 2.22773C7.72089 1.44991 8.99368 1.44991 9.7715 2.22773C10.5493 3.00555 10.5493 4.27834 9.7715 5.05616L7.88588 6.94177L8.82869 7.88458L10.7143 5.99897C12.0154 4.69789 12.0154 2.586 10.7143 1.28492C9.41323 -0.016157 7.30134 -0.0161567 6.00026 1.28492ZM6.94307 7.88458L5.05745 9.7702C4.27963 10.548 3.00684 10.548 2.22902 9.7702C1.45121 8.99238 1.45121 7.71959 2.22902 6.94177L4.11464 5.05616L3.17183 4.11335L1.28621 5.99896C-0.0148623 7.30004 -0.0148623 9.41193 1.28621 10.713C2.58729 12.0141 4.69918 12.0141 6.00026 10.713L7.88588 8.82739L6.94307 7.88458ZM3.64324 7.41318L7.41447 3.64194L8.35728 4.58475L4.58605 8.35599L3.64324 7.41318Z"
                            fill="#1C4980"
                          />
                        </svg>
                        <h1 className="text-[#1C4980] font-medium text-sm">
                          {" "}
                          Share
                        </h1>
                      </button>
                      <div className="user_text py-[4px] px-[7px] flex gap-[10px] bg-[#6548EE] rounded-full items-center">
                        <h1 className="text-white font-bold text-sm">LP</h1>
                      </div>
                    </div>
                    {/* ******************** */}
                  </div>
                  {/* **************** */}
                  <div className="card flex flex-col rounded-xl border-solid border-[1px] border-[#DADCE0] bg-white p-4 gap-4 w-[388px]">
                    <div className="flex-both flex justify-between">
                      <div className="flex gap-2 flex-col">
                        <svg
                          width="50"
                          height="50"
                          viewBox="0 0 50 50"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="50" height="50" rx="12" fill="#EBE8FD" />
                          <path
                            d="M33.1677 18.4956H29.0796C28.8592 16.4981 27.6597 15 26.142 15H22.9106C22.0783 15 21.295 15.4494 20.7319 16.2984C20.3158 16.8976 20.0465 17.6717 19.9731 18.4956H15.8849C14.8568 18.4956 14 19.3695 14 20.4682V33.0275C14 34.1011 14.8323 35 15.8849 35H33.1677C34.1958 35 35.0526 34.1261 35.0526 33.0275V20.4682C35.0526 19.3695 34.2203 18.4956 33.1677 18.4956ZM26.1175 24.2385H22.9351C22.2007 24.2385 21.5887 24.8876 21.5887 25.6866V26.4107C17.4272 25.437 15.5177 24.563 15.224 24.1635V20.6679C15.224 20.2934 15.5667 19.9938 15.9829 19.9938H33.0698C33.4859 19.9938 33.8286 20.2934 33.8286 20.6679V24.1386C33.5349 24.5381 31.6255 25.412 27.4639 26.4107V25.6866C27.4639 24.8876 26.8519 24.2385 26.1175 24.2385ZM21.7356 17.2472C21.9315 16.9725 22.3476 16.4981 22.9106 16.4981H26.142C26.9743 16.4981 27.6842 17.4719 27.8556 18.7453H21.1971C21.2705 18.171 21.4663 17.6467 21.7356 17.2472ZM33.1922 33.7266H15.8605C15.5177 33.7266 15.224 33.427 15.224 33.0774V25.6117C16.2766 26.161 18.186 26.8352 21.6867 27.6092C21.907 29.0574 23.1065 30.1561 24.5753 30.1561C26.0196 30.1561 27.2191 29.0574 27.4149 27.6092C30.9155 26.8352 32.825 26.161 33.8531 25.6117V33.0774C33.8286 33.427 33.5349 33.7266 33.1922 33.7266Z"
                            fill="#6548EE"
                          />
                        </svg>
                        <div className="flex flex-col">
                          <h1 className="font-medium text-lg text-[#1C4980]">
                            Math Assessment
                          </h1>
                          <div className="flex gap-2">
                            <h1 className="font-semibold text-[#1C4980] text-sm">
                              Job
                            </h1>
                            <h1 className="text-[#DADCE0] h-[16px]">|</h1>

                            <div className="flex items-center gap-2">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_0_568)">
                                  <path
                                    d="M11.6667 1.75001H11.0834V0.583344H9.91669V1.75001H4.08335V0.583344H2.91669V1.75001H2.33335C1.69169 1.75001 1.16669 2.27501 1.16669 2.91668V12.25C1.16669 12.8917 1.69169 13.4167 2.33335 13.4167H11.6667C12.3084 13.4167 12.8334 12.8917 12.8334 12.25V2.91668C12.8334 2.27501 12.3084 1.75001 11.6667 1.75001ZM11.6667 12.25H2.33335V4.66668H11.6667V12.25Z"
                                    fill="#1C4980"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.50002 7.00001C3.50002 6.67784 3.76119 6.41668 4.08335 6.41668H5.83335C6.15552 6.41668 6.41669 6.67784 6.41669 7.00001C6.41669 7.32218 6.15552 7.58334 5.83335 7.58334H4.08335C3.76119 7.58334 3.50002 7.32218 3.50002 7.00001ZM7.58335 7.00001C7.58335 6.67784 7.84452 6.41668 8.16669 6.41668H9.91669C10.2389 6.41668 10.5 6.67784 10.5 7.00001C10.5 7.32218 10.2389 7.58334 9.91669 7.58334H8.16669C7.84452 7.58334 7.58335 7.32218 7.58335 7.00001ZM3.50002 9.33334C3.50002 9.01118 3.76119 8.75001 4.08335 8.75001H5.83335C6.15552 8.75001 6.41669 9.01118 6.41669 9.33334C6.41669 9.65551 6.15552 9.91668 5.83335 9.91668H4.08335C3.76119 9.91668 3.50002 9.65551 3.50002 9.33334ZM7.58335 9.33334C7.58335 9.01118 7.84452 8.75001 8.16669 8.75001H9.91669C10.2389 8.75001 10.5 9.01118 10.5 9.33334C10.5 9.65551 10.2389 9.91668 9.91669 9.91668H8.16669C7.84452 9.91668 7.58335 9.65551 7.58335 9.33334Z"
                                    fill="#1C4980"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_0_568">
                                    <rect width="14" height="14" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p className="font-medium text-xs text-[#8DA4BF]">
                                20 Apr 2023
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        {/* Three Dots svg */}
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4167 6.66667C11.5673 6.66667 12.5 5.73393 12.5 4.58333C12.5 3.43274 11.5673 2.5 10.4167 2.5C9.26607 2.5 8.33333 3.43274 8.33333 4.58333C8.33333 5.73393 9.26607 6.66667 10.4167 6.66667Z"
                            fill="#1C4980"
                          />
                          <path
                            d="M10.4167 12.5C11.5673 12.5 12.5 11.5673 12.5 10.4167C12.5 9.26607 11.5673 8.33333 10.4167 8.33333C9.26607 8.33333 8.33333 9.26607 8.33333 10.4167C8.33333 11.5673 9.26607 12.5 10.4167 12.5Z"
                            fill="#1C4980"
                          />
                          <path
                            d="M10.4167 18.3333C11.5673 18.3333 12.5 17.4006 12.5 16.25C12.5 15.0994 11.5673 14.1667 10.4167 14.1667C9.26607 14.1667 8.33333 15.0994 8.33333 16.25C8.33333 17.4006 9.26607 18.3333 10.4167 18.3333Z"
                            fill="#1C4980"
                          />
                        </svg>
                      </div>
                    </div>
                    {/* vector */}
                    <svg
                      width="356"
                      height="2"
                      viewBox="0 0 356 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 1H356"
                        stroke="#DADCE0"
                        strokeDasharray="3 3"
                      />
                    </svg>
                    {/* bottom section */}
                    <div className="bottom flex gap-3 ">
                      <div className="first text-xs font-semibold">
                        <h1 className="text-[#1C4980]">00</h1>
                        <p className="text-[#1C4980]">Duration</p>
                      </div>
                      <div className="second text-xs font-semibold">
                        <h1 className="text-[#1C4980]">00</h1>
                        <p className="text-[#1C4980]">Questions</p>
                      </div>
                      <div className="last float-end m-auto"></div>
                      <button className="flex gap-1 py-[2px] px-2 rounded-[50px] border-solid border-[1px] border-[#1C4980] items-center">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.00026 1.28492L4.11464 3.17054L5.05745 4.11335L6.94307 2.22773C7.72089 1.44991 8.99368 1.44991 9.7715 2.22773C10.5493 3.00555 10.5493 4.27834 9.7715 5.05616L7.88588 6.94177L8.82869 7.88458L10.7143 5.99897C12.0154 4.69789 12.0154 2.586 10.7143 1.28492C9.41323 -0.016157 7.30134 -0.0161567 6.00026 1.28492ZM6.94307 7.88458L5.05745 9.7702C4.27963 10.548 3.00684 10.548 2.22902 9.7702C1.45121 8.99238 1.45121 7.71959 2.22902 6.94177L4.11464 5.05616L3.17183 4.11335L1.28621 5.99896C-0.0148623 7.30004 -0.0148623 9.41193 1.28621 10.713C2.58729 12.0141 4.69918 12.0141 6.00026 10.713L7.88588 8.82739L6.94307 7.88458ZM3.64324 7.41318L7.41447 3.64194L8.35728 4.58475L4.58605 8.35599L3.64324 7.41318Z"
                            fill="#1C4980"
                          />
                        </svg>
                        <h1 className="text-[#1C4980] font-medium text-sm">
                          {" "}
                          Share
                        </h1>
                      </button>
                      <div className="user_text py-[4px] px-[7px] flex gap-[10px] bg-[#6548EE] rounded-full items-center border-solid border-[1px] border-[#ffff]">
                        <h1 className="text-white font-bold text-sm">LP</h1>
                      </div>
                      <div className="user_text py-[4px] px-[7px] ml-[-29px] flex bg-[#3079E1] rounded-full items-center border-solid border-[1px] border-[#ffff]">
                        <h1 className="text-white font-bold text-sm">LP</h1>
                      </div>
                      <div className="ml-[-29px] user_text py-[4px] px-[7px] flex  bg-[#E9407A]  border-solid border-[1px] border-[#ffff] rounded-full items-center">
                        <h1 className="text-white font-bold text-sm">LP</h1>
                      </div>
                    </div>
                    {/* ******************** */}
                  </div>
                  {/* **************** */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopMod;

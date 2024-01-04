import MiddleSectionMob from "./MiddleSectionMob";
import SideMenu from "./SideMenu";
import SubsectionMob from "./SubsectionMob";

const TopSectionMob = () => {
  const handleMenu = () => {
    const sidebar = document.querySelector(".sideMenu");
    sidebar.style.display = "flex";
    sidebar.style.transform = "translateX(0px)";
    sidebar.style.transition = "all 0.5s ease-in";
  };
  return (
    <>
      <SideMenu />
      {/* Top section Code */}
      <div className="top__section flex justify-between ">
        <div className="left flex gap-10">
          <div className="icon rgb(242, 248, 254) p-1 rounded-full ">
            <i className="ri-menu-2-line font-bold " onClick={handleMenu}></i>
          </div>
          <div className="icon__text ">
            <h1>Assessment</h1>
          </div>
        </div>
        <div className="right">
          <i className="ri-macbook-line"></i>
        </div>
      </div>
      {/* Mid Top section code */}
      <div className="lower__top flex justify-center py-5">
        <div className="left-text ">
          <h1>My Assessments</h1>
        </div>
        <div className="right-text">
          <h1>Unstop Assessments</h1>
        </div>
      </div>
      <MiddleSectionMob />
      <SubsectionMob />
    </>
  );
};

export default TopSectionMob;

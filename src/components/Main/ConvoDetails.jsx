import React from "react";
import "./Main.css";

const ConvoDetails = ({displayWidth}) => {
  const infoCardsArray = [
    {
      value: "50%",
      desc: "email open rate",
      icon: "/Icons/openIcon.svg",
    },
    {
      value: "100%",
      desc: "content click rate",
      icon: "/Icons/personIcon.svg",
    },
    {
      value: "22:53",
      desc: "total time spent",
      icon: "/Icons/TimerIcon.svg",
    },
    {
      value: "$ 367",
      desc: "deal value",
      icon: "/Icons/moneyBagIcon.svg",
    },
  ];
  const tabsArray = [
    {
      tabTitle: "Recipients",
      count: "08",
      isActive: true,
    },
    {
      tabTitle: "Sections",
      count: "05",
      isActive: false,
    },
  ];
  const tabData=[
    {
        profile:'/Images/profile1.jpg',
        name:'James Clark',
        lastView:'last viewed 02 Jan 2024',
        time:'~85m',
    }, {
        profile:'/Images/profile2.jpg',
        name:'Elizabeth Carol',
        lastView:'last viewed 02 Jan 2024',
        time:'~85m',
    }, {
        profile:'/Images/profile3.jpg',
        name:'Michael',
        lastView:'last viewed 02 Jan 2024',
        time:'~85m',
    }, {
        profile:'/Images/profile4.jpg',
        name:'Pamela Jack',
        lastView:'last viewed 02 Jan 2024',
        time:'~85m',
    }, {
        profile:'/Images/profile5.jpg',
        name:'Pamela Jack',
        lastView:'last viewed 02 Jan 2024',
        time:'~85m',
    },
    
  ]
  return (
    <div className="convoDetailsBody">
      <div className="convoDetailsBodySection1" />
      <div className="convoDetailsBodySection2">
        <div className="convoDetailsBodySection2Main">
          <div className="TitleFlexCard">
            <h1 className="convoDetailsBodySection2Title">
              Collection “seeeek”{" "}
            </h1>
            {displayWidth >=768 &&<div className="convoDetailsBodySection2options">
              <div className="option cursorPointer">
                <span className="iconSpan">
                  <img src="Icons/viewIcon.svg" width={16} height={16} alt="" />
                </span>
              </div>
              <div className="option cursorPointer">
                <span className="iconSpan">
                  <img
                    src="Icons/ReloadIcon.svg"
                    width={16}
                    height={16}
                    alt=""
                  />
                </span>
              </div>
              <div className="option cursorPointer">
                <span className="iconSpan">
                  <img
                    src="Icons/DeleteIcon.svg"
                    width={16}
                    height={16}
                    alt=""
                  />
                </span>
              </div>
            </div>}
          </div>
          <div className="DescFlexCard">
            <p className="paragraph">You shared 2 assets with 4 recipients</p>
            <p className="paragraph2">1 month ago via QuickSend</p>
          </div>
          <div className="InfoCards">
            {infoCardsArray.map((info) => (
              <div className="InfoCard">
                <div className="topLevelInfoCard">
                  <p className="topLevelInfoCardParagraph">{info.value}</p>
                  <span>
                    <img src={info.icon} alt="" />
                  </span>
                </div>
                <p className="bottomLevelparagraph">{info.desc}</p>
              </div>
            ))}
          </div>
          <div className="sectionTabs">
            {tabsArray.map((tab) => (
              <div className="tab-main cursorPointer">
                <div
                  class={`tab-title ${tab.isActive ? "active" : "notActive"}`}
                >
                  <span>{tab.tabTitle}</span> -{" "}
                  <span
                    class={`tab-number ${
                      tab.isActive ? "active" : "notActive"
                    }`}
                  >
                    {tab.count}
                  </span>
                </div>
                {tab.isActive && <hr class="separator" />}
              </div>
            ))}
          </div>
        </div>
        <div className="tab-section-content">
            <div className="tab-content">
            {tabData.map(content=>(<div className="tab-content-items">
                <div className="tab-content-items-section1">
                    <img className="tab-content-items-section1-img cursorPointer" height={40} width={40} alt='' src={content.profile} />
                    <p className="tab-content-items-section1-name cursorPointer">{content.name}</p>
                    {displayWidth >=768 &&<div className="divider"></div>}
                    {displayWidth >=768 &&<p className="tab-content-items-section1-lastSeen">{content.lastView}</p>}
                </div>
                <div className="tab-content-items-section2">
                <p className="tab-content-items-section1-lastSeen">{content.time}</p>
                <span className="cursorPointer">
                    <img src='/Icons/open_red.svg' alt="" />
                  </span>
                  <span className="cursorPointer">
                    <img src='/Icons/personIcon.svg' alt="" />
                  </span>
                  <span className="cursorPointer">
                    <img src='/Icons/ShareIcon.svg' alt="" />
                  </span>
                  {displayWidth >=768 && <div className="divider"></div>}
                {displayWidth >=768 &&<div className="option cursorPointer">
                <span className="iconSpan">
                  <img src="Icons/mapIcon.svg" width={16} height={16} alt="" />
                </span>
              </div>}
                </div>
            </div>))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ConvoDetails;

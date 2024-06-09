import React, { useReducer } from "react";
import "./Main.css";
import conversationDetails from '../../data/conversationDetails.json'

const initialState = {
  conversationsDetails: conversationDetails,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CONVERSATIONS_DETAILS':
      return { ...state, conversationsDetails: action.payload };
    default:
      return state;
  }
};

const ConvoDetails = ({displayWidth}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
            {state.conversationsDetails?.map(content=>(<div className="tab-content-items">
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

import React from "react";
import ConvoDetails from "./ConvoDetails";
import "./Main.css";
const Maincontent = ({ displayWidth }) => {
  const conversationList = [
    {
      image: "/Images/convo1.jpg",
      title: "Meet New Paperflite",
      lastShared: "Shared 4 hours ago",
      active: false,
      usedBy: "Kevin +6 more",
    },
    {
      image: "/Images/convo2.jpg",
      title: "Collection “seeeek”",
      lastShared: "Shared 1 month ago",
      active: true,
      usedBy: "Rhonald",
    },
    {
      image: "/Images/convo1.jpg",
      title: "Indira Gandhi International Ai...",
      lastShared: "Shared 4 hours ago",
      active: false,
      usedBy: "Kevin +6 more",
    },
    {
      image: "/Images/convo2.jpg",
      title: "Paperflite Originals",
      lastShared: "Shared 4 hours ago",
      active: false,
      usedBy: "Rhonald",
    },
    {
      image: "/Images/convo1.jpg",
      title: "Meet New Paperflite",
      lastShared: "Shared 4 hours ago",
      active: false,
      usedBy: "Kevin +6 more",
    }
    
  ];
  return (
    <div className="conversationContainer">
      {displayWidth >= 768 ? (
          <div className="conversationList-title">
            <div className="conversationList-title-sub">
              <div className="conversationList-title-title">
                <h1 className="conversationList-title-title-h1">
                  conversations
                </h1>
                <div className="option cursorPointer">
                  <span className="iconSpan">
                    <img
                      src="Icons/menuIcon.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <p className="conversationList-title-p">track user engagement</p>
            </div>
            <div className="conversationList-input">
              <div class="search-box">
                <input
                  type="text"
                  placeholder="search by conversations and contacts"
                />
              </div>
              <div className="sortMenu">
                <p>Sort by :</p>
                <p className="pred cursorPointer">Created Date</p>
                <p className="cursorPointer">Last Activity</p>
                <p className="cursorPointer">Time Spent</p>
              </div>
            </div>
             <div className="conversationList-content">
            {conversationList.map(convo=>(
                <div className="convoItem cursorPointer">
                    <img height={100} width={90} src={convo.image} alt="" />
                    <div className="convoItem-content">
                    <div className="content-1">
                      <p className={`content-1-title ${convo.active ? 'active' : ''}`}>{convo.title}</p>
                      <p className="content-1-lastShared">{convo.lastShared}</p>
                    </div>
                    <div className="content-2">
                      <p>{convo.usedBy}</p>
                    </div>
                    </div>
                </div>
            ))}
          </div>
          </div>
         
      ) : null}
      <ConvoDetails displayWidth={displayWidth} />
    </div>
  );

   
};

export default Maincontent;

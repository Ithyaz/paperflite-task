import React, { useReducer } from "react";
import ConvoDetails from "./ConvoDetails";
import "./Main.css";
import conversationsData  from '../../data/conversations.json'
const initialState = {
  conversations: conversationsData,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CONVERSATIONS':
      return { ...state, conversations: action.payload };
    default:
      return state;
  }
};
const Maincontent = ({ displayWidth }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
            {state.conversations?.map(convo=>(
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

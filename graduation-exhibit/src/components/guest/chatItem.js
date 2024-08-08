import React, { useState } from 'react';
import styled from 'styled-components';
import editIcon from '../../assets/pencil.svg';
import deleteIcon from '../../assets/trash.svg';
import ChatModal from '../../components/guest/chatModal';

// 글자 색상 결정 함수
const getTextColor = (bgColor) => {
  const r = parseInt(bgColor.slice(1, 3), 16);
  const g = parseInt(bgColor.slice(3, 5), 16);
  const b = parseInt(bgColor.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? '#000' : '#fff'; // 밝기 기준에 따라 검정색 또는 흰색 선택
};

function ChatItem({ id, title, body, color, createAt, setData }) {
  const [edit, setEdit] = useState(false);
  const editToggle = () => setEdit(!edit);
  const [editTitle, setEditTitle] = useState(title);
  const [editBody, setEditBody] = useState(body);
  const [editColor, setEditColor] = useState(color);

  // ChatItem Click시, Modal 보기
  const [modalShow, setModalShow] = useState(true);
  const toggleModalShow = () => setModalShow(!modalShow);

  const onSubmit = () => {
    fetch(`http://localhost:4000/guest2/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: editTitle,
        body: editBody,
        color: editColor,
      }),
    }).then((res) => {
      if (res.ok) {
        alert('수정이 완료되었습니다');
        fetch('http://localhost:4000/guest2')
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          });
        setEdit(false);
      } else {
        alert('수정이 실패하였습니다.');
      }
    });
  };

  const onCancel = () => {
    setEditTitle(title);
    setEditBody(body);
    setEditColor(color);
    setEdit(false);
  };

  const onDelete = () => {
    if (window.confirm('삭제 하시겠습니까?')) {
      fetch(`http://localhost:4000/guest2/${id}`, {
        method: 'DELETE',
      }).then((res) => {
        if (res.ok) {
          alert('삭제가 완료되었습니다');
          fetch('http://localhost:4000/guest2')
            .then((res) => res.json())
            .then((data) => {
              setData(data);
            });
        } else {
          alert('삭제가 실패하였습니다.');
        }
      });
    }
  };

  const textColor = getTextColor(editColor);

  return (
    <>
      <ChatItemWrap>
        {!edit && (
          <div className="hover-bar">
            <button className="edit-btn" onClick={editToggle}>
              <img src={editIcon} alt="수정아이콘" />
            </button>
            <button className="delete-btn" onClick={onDelete}>
              <img src={deleteIcon} alt="삭제아이콘" />
            </button>
          </div>
        )}
        <ChatBox style={{ background: editColor, color: textColor }} onClick={toggleModalShow}>
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="제목"
            disabled={!edit}
            required
            autoFocus
          />
          {edit ? (
            <textarea
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              className="chat-body"
              placeholder="내용"
              disabled={!edit}
              required
            />
          ) : (
            <p className="chat-body">{editBody}</p>
          )}
        </ChatBox>
        {edit && (
          <>
            <EditBtnWrap>
              <button className="saveBtn" onClick={onSubmit}>
                저장
              </button>
              <button className="cancelBtn" onClick={onCancel}>
                취소
              </button>
            </EditBtnWrap>
            <ul className="colorSelect">
              <li className="color-1" onClick={() => setEditColor('#ededed')} />
              <li className="color-2" onClick={() => setEditColor('#bebebe')} />
              <li className="color-3" onClick={() => setEditColor('#999999')} />
              <li className="color-4" onClick={() => setEditColor('#666666')} />
              <li className="color-5" onClick={() => setEditColor('#333333')} />
              <li className="color-6" onClick={() => setEditColor('#000000')} />
            </ul>
          </>
        )}
      </ChatItemWrap>
      {!edit && (
        <ChatModal
          title={title}
          body={body}
          color={color}
          createAt={createAt}
          modalShow={modalShow}
          toggleModalShow={toggleModalShow}
        />
      )}
    </>
  );
}

const ChatItemWrap = styled.li`
  flex: 0 0 auto;
  position: relative;
  margin: 0 7px 14px;
  &:hover .hover-bar {
    display: flex;
    flex-flow: row nowrap;
  }
  .hover-bar {
    display: none;
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 5px;
    padding: 0 5px;
    background: #f3f3f3;
    button {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      border: none;
      background: none;
      cursor: pointer;
      &:hover {
        background: #e5e5e5;
      }
      img {
        height: 15px;
      }
    }
  }
  &:hover .colorSelect {
    flex: 0 0 auto;
    display: flex;
    flex-flow: row nowrap;
    position: absolute;
    bottom: 8px;
    li {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-left: 8px;
      border: 1px solid #fff;
      box-sizing: border-box;
      cursor: pointer;
      &:hover {
        border-color: #777;
      }
      &.color-1 {
        background: #ededed;
      }
      &.color-2 {
        background: #bebebe;
      }
      &.color-3 {
        background: #999999;
      }
      &.color-4 {
        background: #666666;
      }
      &.color-5 {
        background: #333333;
      }
      &.color-6 {
        background: #000000;
      }
    }
  }
`;

const ChatBox = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-flow: column nowrap;
  padding: 10px;
  border-radius: 8px 8px 0 8px;
  box-shadow: 2px 3px 5px rgba(170, 170, 170, 0.5);
  cursor: pointer;
  background: ${(props) => props.bgColor || '#333'};
  color: ${(props) => props.textColor || '#fff'}; /* 글자 색상 설정 */

  input {
    background: none;
    border: none;
    font-family: 'Noto Sans KR', sans-serif;
    color: inherit; /* 글자 색상 상속 */
    font-size: 15.5px;
    line-height: 18px;
    font-weight: 500;
    margin-bottom: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    &:focus {
      outline: none;
    }
  }

  textarea {
    background: none;
    border: none;
    font-family: 'Noto Sans KR', sans-serif;
    color: inherit; /* 글자 색상 상속 */
    font-weight: 400;
    font-size: 14px;
    resize: none;
    padding: 0;
    &:focus {
      outline: none;
    }
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #bbb;
      border-radius: 10px;
      cursor: pointer;
    }
    &::-webkit-scrollbar-track {
      background-color: #eee;
      border-radius: 10px;
    }
  }
`;

const EditBtnWrap = styled.div`
  position: absolute;
  top: 0;
  right: -55px;
  display: flex;
  flex-flow: column;
  z-index: 1;
  button {
    flex: 0 0 auto;
    height: 25px;
    padding: 0 10px;
    border: none;
    font-size: 13px;
    font-weight: 600;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    &.saveBtn {
      background: #333;
      margin-bottom: 5px;
    }
    &.cancelBtn {
      background: #bbb;
    }
  }
`;

export default ChatItem;

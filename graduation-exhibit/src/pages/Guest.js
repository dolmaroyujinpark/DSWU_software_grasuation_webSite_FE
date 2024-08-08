import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // react-router-dom의 useNavigate 훅을 가져옵니다
import styled from 'styled-components'; // styled-components를 사용하여 스타일링

const Guest = () => {
  const [comments, setComments] = useState([]); // 댓글 상태를 관리합니다
  const [loading, setLoading] = useState(true); // 데이터 로딩 상태를 관리합니다
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동을 처리합니다

  useEffect(() => { // 백엔드랑 연동 필요한 부분
    // 페이지 로드 시 데이터 가져오기
    fetch('http://localhost:4000/guest2')
      .then((res) => res.json())
      .then((data) => {
        // 최신 8개 데이터만 가져오기 (배열의 마지막 8개 항목)
        const latestComments = data.slice(-8);
        setComments(latestComments);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleMoreClick = () => {
    navigate('/guest2'); // 'guest2' 경로로 이동합니다
  };

  if (loading) {
    return <LoadingMessage>Loading...</LoadingMessage>; // 데이터가 로딩 중일 때 표시할 메시지
  }

  return (
    <GuestWrap id='guest'>
      <h2>Guest Book</h2>
      <CommentSection>
        <div className="comments-grid">
          {comments.length === 0 ? (
            <div className="no-comments">No comments available.</div>
          ) : (
            comments.map((comment) => (
              <div className="comment-box" key={comment.id}>
                <h4>{comment.title}</h4>
                <p>{comment.body}</p>
                <span>{comment.date}</span>
              </div>
            ))
          )}
        </div>
      </CommentSection>
      <MoreButton onClick={handleMoreClick}>MORE</MoreButton> {/* 클릭 시 handleMoreClick 호출 */}
    </GuestWrap>
  );
};

// styled-components 사용 예시
const GuestWrap = styled.section`
  padding: 42px;
  background-color: #000; /* 배경색을 검은색으로 설정 */
  color: #fff; /* 글자색을 흰색으로 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommentSection = styled.div`
  width: 100%;
  max-width: 1200px; /* 원하는 최대 너비 */
  .comments-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 가로 4개 */
    gap: 10px;
    margin-top: 20px;
  }
  .comment-box {
    margin-bottom: 10px;
    border: 1px solid #444; /* 테두리 색상 */
    padding: 10px;
    background-color: #333; /* 댓글 박스 배경색 */
    color: #fff; /* 댓글 박스 글자색 */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 세로 중앙 정렬 */
    align-items: flex-start; /* 가로 왼쪽 정렬 */
    min-height: 150px; /* 최소 높이 설정 */
    position: relative; /* position: relative 설정으로 padding-bottom을 정확하게 조절할 수 있게 함 */
  }
  .comment-box h4, .comment-box p, .comment-box span {
    margin: 0;
    padding: 0;
    text-align: left; /* 텍스트 왼쪽 정렬 */
  }
  .comment-box p {
    margin-top: 5px; /* 제목과 본문 사이의 간격 */
    margin-bottom: 5px; /* 본문과 날짜 사이의 간격 */
    overflow: hidden; /* 긴 텍스트가 넘칠 경우 숨김 */
    text-overflow: ellipsis; /* 말줄임표 추가 */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; /* 최대 4줄까지 표시 */
    line-clamp: 4; /* 최대 4줄까지 표시 (지원되지 않는 경우 fallback) */
  }
  .no-comments {
    width: 100%;
    text-align: center;
    color: #999;
    font-style: italic;
  }
`;


const MoreButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ffffff;
  color: #000000;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #333333;
    color: #ffffff;
  }
`;

const LoadingMessage = styled.div`
  color: #fff;
  font-size: 18px;
  margin-top: 20px;
`;

export default Guest;

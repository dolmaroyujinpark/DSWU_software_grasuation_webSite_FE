import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // react-router-dom의 useNavigate 훅을 가져옵니다
import styled from 'styled-components'; // styled-components를 사용하여 스타일링
import './css/Guest.scss';

const Guest = () => {
  const [comments, setComments] = useState([]); // 댓글 상태를 관리합니다
  const [loading, setLoading] = useState(true); // 데이터 로딩 상태를 관리합니다
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동을 처리합니다

  useEffect(() => { //백엔드랑 연동 필요한 부분
    // 페이지 로드 시 데이터 가져오기
    fetch('http://localhost:4000/guest')
      .then((res) => res.json())
      .then((data) => {
        // 데이터를 날짜별로 내림차순 정렬
        const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        // 최신 8개 데이터만 가져오기
        const latestComments = sortedData.slice(0, 8);
        setComments(latestComments);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleMoreClick = () => {
    navigate('/guest2'); // 'test' 경로로 이동합니다
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
  padding: 20px;
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
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const LoadingMessage = styled.div`
  color: #fff;
  font-size: 18px;
  margin-top: 20px;
`;

export default Guest;
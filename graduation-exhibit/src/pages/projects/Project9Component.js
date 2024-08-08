import React, { useState } from 'react';
import '../css/ProjectComponent.css';
import i1 from '../../assets/team9_service1.png';
import i2 from '../../assets/team9_service2.png';
import i3 from '../../assets/team9_service3.png';
import i4 from '../../assets/team9_service4.png';
import project9_mainphoto from '../../assets/project9_mainphoto.jpg';

function Project9Component() {
  const [likeCount, setLikeCount] = useState(0); // 좋아요 카운트 상태
  const [liked, setLiked] = useState(false); // 좋아요 상태

  const developers = [
    {
      name: "| 김도영",
      role: "| 데이터 수집 및 분류, 모바일 프로그래밍, 추천 알고리즘 설계",
      ment: "캡스톤 프로젝트를 하는 동안 팀원들과 함께 여러 과정에서 다양한 시행착오를 경험하며 많이 성장하고 이해할 수 있는 기회를 가지게 되어 의미 있었습니다! 팀에게 많은 조언과 마 음을 주신 이재호 교수님께 감사드립니다."
    },
    {
      name: "| 김이슬",
      role: "| 서버 프로그래밍, 모바일 프로그래밍, 데이터베이스 설계 및 구축",
      ment: "프로젝트를 진행하면서 수많은 역경이 있었지만 이로 인해 많은 걸 배우고 성장하는 계기가 되었습니다. 그리고 1년 동 안 함께해 준 팀원분들과 많은 조언을 주신 교수님께 감사드립니다."
    },
    {
      name: "| 신수영",
      role: "| 딥러닝 데이터 수집 및 모델 학습 (Kobert, pytorch)",
      ment: "1년이 넘는 시간동안 프로젝트를 진행하면서 기획부터 개발까지 모든 과정을 경험해본 뜻깊은 시간이었습니다. 함께 팀 프로젝트를 하면서 소통과 협력의 중요성을 알게 되었습니다. 팀원들 모두와 지도 교수님이신 이재호 교수님께 감사드립니다."
    },
    {
      name: "| 안성하",
      role: "| 음악 데이터 수집 및 가공, 알고리즘 설계 및 구현",
      ment: "프로젝트를 함께 해주신 조원들과 교수님께 진심으로 감사 드립니다. 이번 경험을 통해 많은 것을 배울 수 있었습니다."
    },
  ];

  // 버튼 클릭 핸들러
  const handleButtonClick = () => {
    if (liked) {
      setLikeCount(likeCount - 1); // 좋아요 카운트 감소
      setLiked(false); // 좋아요 상태 해제
    } else {
      setLikeCount(likeCount + 1); // 좋아요 카운트 증가
      setLiked(true); // 좋아요 상태 설정
    }
  };

  return (
    <div className="AppComp">
      <div className="App-header">
        <h1>ㅣ그날의 감정을 기록하고 음악을 추천받는 어플리케이션:D-ONE</h1>
        <h1>ㅣD-ONE</h1>
      </div>
      <div className="images">
        <img src={i1} alt="service1" className="photo" />
        <img src={i2} alt="service2" className="photo" />
        <img src={i3} alt="service3" className="photo" />
        <img src={i4} alt="service4" className="photo" />
      </div>
      <hr className="divider" />
      <div className="App-header">
        <h1>ㅣ기획 의도</h1>
        <div className="description-content">
          <p>
            국내 통계에 따르면, 인구 10만 명당 자살률은 25.2명에 달하며, 우울증 진료 인원은 100만 명이 넘는다. 감성일기 프로젝트의 기획 의도는 현대인들이 일 상
            속에서 느끼는 감정을 기록하고 분석하여 자기 이해와 감정 관리를 돕는 것이다. 특히, 사용자 맞춤형 설문지를 통해 특정 감정 상태에서 어떤 음악을 듣는지
            분석하고, 이를 바탕으로 감정에 맞는 음악을 추천하는 시스템을 제 공한다. 사용자가 감정을 기록하고, 감정 패턴을 시각화하여 정서적 상태를 파악할 수
            있도록 지원하며, 맞춤형 음악 추천을 통해 정서적 웰빙 을 증진시키고, 스트레스와 불안을 감소시켜 더 행복하고 건강한 삶을 영위할 수 있도록 돕는 것이
            목표이다.
          </p>
        </div>
      </div>
      <hr className="divider" />
      <div className="App-header">
        <h1>ㅣ서비스 소개</h1>
        <div className="description-content">
          <p>
            Feelic은 사용자의 감정을 분석하여 맞춤형 음악을 추천하고, 정서 관리를 돕 는 애플리케이션이다. 현대인의 바쁜 일상 속에서 감정을 기록하고 관리하 며,
            음악을 통해 정서적 안정과 위로를 찾을 수 있도록 설계되었다. Feelic은 다음과 같은 주요 기능을 제공한다.
          </p>
          <p>
            첫 번째, 감정 분석 기능으로 사용자가 작성한 일기를 감정 분석 인공지능 모 델을 활용하여 기쁨, 슬픔, 분노, 불안, 중립의 5가지 감정으로 분석한다. 이를
            통해 사용자는 자신의 감정 상태를 객관적으로 파악할 수 있다.
          </p>
          <p>
            두 번째, 맞춤형 음악 추천 기능으로 사용자의 감정 데이터를 분석하여 리듬 감, 템포, 장단조, 긍정도 등의 음악적 요소를 고려하여 사용자의 음악 취향 을
            분류하고, 그에 맞는 음악을 추천하여 정서적 안정을 돕는다.
          </p>
          <p>
            세 번째, 감정 기록 및 관리 기능으로 사용자는 자신의 감정 일지를 작성하고, 이를 동해 감정의 변화를 시각적으로 확인할 수 있다. 이를 통해 사용자는 자
            신의 감정 패턴을 이해하고, 더 나은 정서 관리를 할 수 있다. 이와 같은 다양한 기능을 포함하는 애플리케이션인 Feelic을 통해 사용자는 자신의 감정을 더
            잘 이해하고, 적절한 음악을 통해 정서적 안정과 위로를 얻을 수 있을 것이다.
          </p>
        </div>
      </div>
      <hr className="divider" />
      <div className="App-header">
        <h1>ㅣ사용 언어/개발 툴</h1>
        <div className="description-content">
          <p>Skill | JAVA, PHP, MySQL, PyTorch, Python, Flask</p>
          <p>Tool | Visual Studio Code, AndroidStudio, AWS EC2 </p>
          <p>Device | Android Phone</p>
        </div>
      </div>

      {/* 타원형 박스와 하트 버튼 */}
      <div className={`oval-box ${liked ? 'liked' : ''}`} onClick={handleButtonClick}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
        <i className="fas fa-heart heart-icon"></i>
        <span className="like-count">{likeCount}개 </span>
      </div>
      <hr className="divider" />

      <div className="App-header">
        <h1>ㅣDEVELOPERS</h1>
      </div>
      <div className="main-photo">
        <img src={project9_mainphoto} alt="Main" className="main-photo-img" />
      </div> {/* 큰 이미지 */}

      <div className="developer-list-2">
        {developers.map((developer, index) => (
          <div className="developer-card-2" key={index}>
            <div className="info">
              <p className="name">{developer.name}</p>
              <p className="role">{developer.role}</p>
              <p className="ment">{developer.ment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project9Component;
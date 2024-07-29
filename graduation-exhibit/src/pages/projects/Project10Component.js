import React, { useState } from 'react';
import '../css/ProjectComponent.css';
import i1 from '../../assets/i1.jpg';
import i2 from '../../assets/i2.jpg';
import i3 from '../../assets/i3.jpg';
import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';
import p4 from '../../assets/p4.jpg';
import p5 from '../../assets/p4.jpg';

function Project10Component() {
    const [likeCount, setLikeCount] = useState(0); // 좋아요 카운트 상태
    const [liked, setLiked] = useState(false); // 좋아요 상태

    const developers = [
        {
          name: "| 강채은",
          role: "| Birth 앱 UI 및 서버 개발, IoT 개발, YOLO 모델 학습, 모델 가속화",
          ment: "항상 사랑하는 부모님, 동생 너무 감사합니다.  마지막으로 대학 생활의 힘이 되어준 김혜성, 박도현 군에게도 감사 인사 전합니다.",
          photo: p1,
        },
        {
          name: "| 김서윤",
          role: "| Birth 앱 디자인, IoT 개발, 자세 검출 모델 사용",
          ment: "일년동안 열심히 해왔고 즐겁게 잘 마무리할 수 있어 뿌듯해요. 앞으로도 파이팅!",
          photo: p2,
        },
        {
          name: "| 김연수",
          role: "| IoT 개발, 모델 경량화, 자세 검출 모델 사용",
          ment: "So I'm ready to journey again",
          photo: p3,
        },
        {
          name: "| 조은솔",
          role: "| IoT 개발, YOLO 데이터 수집 및 모델 학습, 모델 가속화",
          ment: "나 졸업한다 짱이지… 이 졸작을 봐, 대박임",
          photo: p4,
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
        <h1>임산부 이동을 더 간편하게: Birth</h1>
        <h1>Dukgle</h1>
      </div>
      <div className="images">
        <div className="photo" style={{ backgroundImage: `url(${i1})` }}></div>
        <div className="photo" style={{ backgroundImage: `url(${i2})` }}></div>
        <div className="photo" style={{ backgroundImage: `url(${i3})` }}></div>
      </div>
      <hr className="divider" />
      <div className="App-header">
        <h1>ㅣ기획 의도</h1>
        <div className="description-content">
          <p>
            본 프로젝트는 임산부가 대중교통을 이용할 때 겪는 불편을 해소하고, 임산부 배려석 및 수유실의 효율적 이용 방안을 모색하기 위해 시작되었습니다. 현재
            임산부의 대중교통 이용 편리성을 위한 정책으로는 초기 임산부를 위한 임산부 배지 시스템과 지하철의 임산부 배려석, 지하철 역사의 수유실이 있습니다.
            하지만 현재 시행 중인 임산부 배지 시스템은 초기 임신부의 불편함을 완전히 해결하지 못하고 있으며 임산부 배려석은 임산부보다 비 임산부의 사용률이 더
            높아 많은 사람이 불쾌감을 느끼고, 대부분의 수유실은 인증 절차 없이 개방되어 임산부들이 불안함을 느끼고 있습니다. 이에 본 프로젝트는 시각적 및 음성적
            알림을 통해 비 임산부가 자리를 양보하도록 유도하는 임산부 배려석 반응 시스템과 인증 여부에 따른 자동문 제어를 통해 수유실의 보안 문제를 해결하는
            수유실 자동 출입 시스템을 제안하며, 이를 통해 임산부들이 대중교통을 편리하게 이용할 수 있도록 지원하고자 합니다.
          </p>
        </div>
      </div>
      <hr className="divider" />
      <div className="App-header">
        <h1>ㅣ서비스 소개</h1>
        <div className="description-content">
          <p>
            본 프로젝트는 임산부가 대중교통을 이용할 때 겪는 불편을 해소하고, 임산부 배려석 및 수유실의 효율적 이용 방안을 모색하기 위해 시작되었습니다. 현재
            임산부의 대중교통 이용 편리성을 위한 정책으로는 초기 임산부를 위한 임산부 배지 시스템과 지하철의 임산부 배려석, 지하철 역사의 수유실이 있습니다.
          </p>
          <p>
            하지만 현재 시행 중인 임산부 배지 시스템은 초기 임신부의 불편함을 완전히 해결하지 못하고 있으며 임산부 배려석은 임산부보다 비 임산부의 사용률이 더
            높아 많은 사람이 불쾌감을 느끼고, 대부분의 수유실은 인증 절차 없이 개방되어 임산부들이 불안함을 느끼고 있습니다.
          </p>
          <p>
            이에 본 프로젝트는 시각적 및 음성적 알림을 통해 비 임산부가 자리를 양보하도록 유도하는 임산부 배려석 반응 시스템과 인증 여부에 따른 자동문 제어를
            통해 수유실의 보안 문제를 해결하는 수유실 자동 출입 시스템을 제안하며, 이를 통해 임산부들이 대중교통을 편리하게 이용할 수 있도록 지원하고자 합니다.
          </p>
        </div>
      </div>
      <hr className="divider" />
      <div className="App-header">
        <h1>ㅣ사용 언어/개발 툴</h1>
        <div className="description-content">
          <p>Skill | JAVA, Spring Boot, Python, PyTorch, OpenCV, ONNX, TensorFlow Lite, MediaPipe, MySQL</p>
          <p>Tool | Android Studio, Intellij, Visual Studio Code, YOLOv5-ultralytics, Figma, Github, 3D프린터</p>
          <p>Device| Raspberry Pi 4B, Arduino Uno, Logitec C270, Android Phone, 블루투스 스피커, WS2812B LED, 28BYJ-48 Motor</p>
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

            <div className="developer-list">
                {developers.map((developer, index) => (
                    <div className="developer-card" key={index}>
                        <div className="photo" style={{ backgroundImage: `url(${developer.photo})` }}></div>
                        <div className="info">
                            <p>{developer.name}</p>
                            <p>{developer.role}</p>
                            <p>{developer.ment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project10Component;
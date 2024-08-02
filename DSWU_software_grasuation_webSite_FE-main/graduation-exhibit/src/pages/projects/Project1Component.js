import React, { useState } from 'react';
import '../css/ProjectComponent.css';
import i1 from '../../assets/team1_service1.png';
import i2 from '../../assets/team1_service2.png';
import i3 from '../../assets/team1_service3.png';
import i4 from '../../assets/team1_service4.png';
import project1_mainphoto from '../../assets/project1_mainphoto.jpeg';

function Project1Component() {
    const [likeCount, setLikeCount] = useState(0); // 좋아요 카운트 상태
    const [liked, setLiked] = useState(false); // 좋아요 상태

    const developers = [
        {
            name: "| 이승은",
            role: "| 아두이노 무선 리모컨 제작 및 기능 구현, 데이터 베이스, 게임 프로그래밍, 무선 리모컨과 어플 간 서버 통신",
            ment: "1년 넘게 팀원들의 노력이 모여 우리 앱 '샨티'가 완성되었다. 우리의 소중한 노력의 산물인 샨티! 샨티처럼 몸도 마음도 건강하게 살자."
        },
        {
            name: "| 정수민",
            role: "| 어플 UI제작 및 기능 구현 운동 자세 분석 데이터 수집 및 기능 구현, 데이터 베이스",
            ment: "긴 시간 동안 수많은 시행착오를 겪으며 함께 좋은 결과물을 만들어낸 정말 의미 있는 프로젝트였다. 이 과정에서 값진 경험을 쌓으며 나 자신도 크게 성장할 수 있었다. 조원들과 머리를 맞대고 새벽까지 회의하고 고민하며 개발했던 순간들이 많이 떠오른다. 모두 정말 고생 많았고, 고마웠어!"
        },
        {
            name: "| 이채민",
            role: "| 어플 UI제작 및 기능 구현, 통합 시스템 구축, 게임 프로그래밍",
            ment: "1년 넘게 진행한 캡스톤 프로젝트를 마무리하며, 그동안 많은 도전과 성장을 경험할 수 있었습니다. 가장 크게 배운 것은 팀원들과의 협력과 소통이었던 것 같습니다. 샨티팀, 수고 많았어! 샨티하게 살자~"
        },
        {
            name: "| 유지연",
            role: "| 운동 자세 분석 데이터 수집 및 기능 구현, 통합 시스템 구축, 딥러닝 데이터 수집 및 모델 학습",
            ment: "항상 발등에 불 떨어지듯이 지냈던 우리 팀! 매번 늦은 시간까지 회의하느라 수고했고 고마워~!"
        },
        {
            name: "| 형재희",
            role: "| 얼굴 딥러닝 데이터 수집 및 모델 학습, 얼굴 위치에 따른 방향 조절 구현",
            ment: "프로젝트 하는 동안 팀원들에게 많이 배우고 긴 시간 동안 다같이 끝까지 함께여서 힘든 시간도 잘 이겨낼 수 있었습니다 이 프로젝트가 좋은 기반이 되어서 더 좋은 개발자로, 더 좋은 사람으로 성장할 수 있도록 항상 기도할게 우리 이제 졸업하자!!"
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
                <h1>ㅣ언제 어디서나 누구든지 올바른 운동을 통해 건강한 삶 살기</h1>
                <h1>ㅣSHANNTI</h1>
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
                        현대 사회에서 건강과 웰빙에 대한 관심이 높아지면서 많은 사람들이 규칙적인 운동을 생활의 중요한 부분으로 인식하고 있다. 그러나 바쁜 일상 속에서
                        운동을 위해 따로 시간을 내고 비용을 지출하는 것이 쉽지 않으며, 전문가의 도움 없이 올바른 운동 자세를 유지하는 것도 어렵다. 이를 해결하기 위해 정확한
                        자세로 운동할 수 있도록 돕는 애플리케이션을 개발하였다. 이 애플리케이션은 얼굴 인식 로그인 기능, Mediapipe Pose Detection을 사용한 자세 분석 기능,
                        그리고 Arduino 에어마우스를 활용한 유산소 게임 기능을 통합하여 사용자들이 안전하고 효율적으로 운동할 수 있도록 돕는다. 앞으로도 사용자 피드백을
                        반영하여 기능을 개선하고 다양한 운동 프로그램과 게임을 개발하여 시간과 장소에 제약없이 즐겁게 운동할 수 있도록 할 것이다.
                    </p>
                </div>
            </div>
            <hr className="divider" />
            <div className="App-header">
                <h1>ㅣ서비스 소개</h1>
                <div className="description-content">
                    <p>
                        우리 애플리케이션은 MLKit을 활용한 얼굴 인식 로그인 기능을 제공하여 언제 어디서나 간편하게 로그인할 수 있다. 이 기능은 여러 사용자가 하나의 기기를
                        사용할 때에도 편리하며, 특히 어르신과 어린이 같은 사용자들에게 유용하다. 또한, Mediapipe Pose Detection을 통해 사용자의 자세를 분석하고 올바른
                        자세로 운동할 수 있도록 즉각적인 피드백을 제공한다. 이를 통해 부상 위험을 줄이고 효과적인 운동을 돕는다. 더불어, 아두이노로 제작한 에어마우스를
                        이용한 게임 요소를 추가하여 유산소 운동을 더 즐겁게 수행할 수 있도록 하고 랭킹 시스템을 도입해 운동에 대한 동기부여를 강화한다. 이처럼, 우리
                        애플리케이션은 사용자들이 언제 어디서나 정확한 자세로 운동할 수 있도록 지원하며, 보다 즐겁고 효과적인 운동 경험을 제공하여 전반적인 건강 증진에
                        기여한다.
                    </p>
                </div>
            </div>
            <hr className="divider" />
            <div className="App-header">
                <h1>ㅣ사용 언어/개발 툴</h1>
                <div className="description-content">
                    <p>Skill | JAVA, Kotlin, SQL, C, C++, TensorFlowLite, MediaPipe, MLkit</p>
                    <p>Tool | AndroidStudio, Figma, Arduino, Fusion 360, Firebase, Github</p>
                    <p>Device| Arduino Uno </p>
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
                <img src={project1_mainphoto} alt="Main" className="main-photo-img" />
            </div> {/* 큰 이미지 */}

            <div className="developer-list-2">
                {developers.map((developer, index) => (
                    <div className="developer-card-2" key={index}>
                        <div className="info">
                            <p>{developer.name}</p>
                            <p>{developer.role}</p>
                            <p className="ment">{developer.ment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project1Component;
import React, { useState } from 'react';
import '../css/ProjectComponent.css';
import i1 from '../../assets/team2_service1.PNG';
import i2 from '../../assets/team2_service2.PNG';
import i3 from '../../assets/team2_service3.PNG';
import i4 from '../../assets/team2_service4.PNG';
import i5 from '../../assets/team2_service5.PNG';
import project2_mainphoto from '../../assets/project2_mainphoto.PNG';

function Project2Component() {
    const [likeCount, setLikeCount] = useState(0); // 좋아요 카운트 상태
    const [liked, setLiked] = useState(false); // 좋아요 상태

    const developers = [
        {
            name: "| 김경민",
            role: "| 데이터베이스 설계 및 구축, 라즈베리파이 제어, 서버 프로그래밍",
            ment: "Fall down 7 Stand up 8"
        },
        {
            name: "| 안가은",
            role: "| 라즈베리파이 제어, 서버 프로그래밍, YOLO 모델 훈련",
            ment: "내 필름이 더 반짝 I did it"
        },
        {
            name: "| 문나연",
            role: "| 앱 프로그래밍, 데이터베이스 설계 및 구축, CNN 모델 설계 및 훈련",
            ment: "잊지마 너는 그렇게 찬란히 빛나"
        },
        {
            name: "| 정다윤",
            role: "| 앱 프로그래밍, CNN 모델 설계 및 훈련",
            ment: "단단해져 고난은 make it true"
        },
        {
            name: "| 한서현",
            role: "| 라즈베리파이 제어, 서버 프로그래밍, YOLO 모델 훈련",
            ment: "I run 거친 바람 가르고 난 다시 높이 날아올라"
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
                <h1>ㅣProgFriends: 식물과 green 일상</h1>
                <h1>ㅣProgfriends</h1>
            </div>
            <div className="images">
                <img src={i1} alt="service1" className="photo" />
                <img src={i2} alt="service2" className="photo" />
                <img src={i3} alt="service3" className="photo" />
                <img src={i4} alt="service4" className="photo" />
                <img src={i5} alt="service5" className="photo" />
            </div>
            <hr className="divider" />
            <div className="App-header">
                <h1>ㅣ기획 의도</h1>
                <div className="description-content">
                    <p>
                        20~30대 1인 가구의 반려식물 키우기 취미가 급증하며 '식물'과 '집사'를 합쳐, 반려식물을 키우는 사람을 뜻하는 '식집사'라는 단어가 등장했습니다.
                        반려식물은 동물에 비해 키우기 쉽고, 외로움을 해소할 수 있다는 장점이 있으나 실내 식물은 적절한 관리가 이루어지지 않으면 생장에 어려움을 겪고
                        병충해에 취약해질 수 있습니다. 식물 관리 경험과 지식 부족 뿐만 아니라, 1인 가구 특성상 오래 집을 비우게 되면 반려식물을 돌볼 사람이 없다는 문제도
                        발생합니다. 이러한 문제를 해결하기 위해 반려식물 원거리 모니터링과 병충해 진단 및 해결책, 생장환경 자동화 서비스를 제공하는데에 초점을 맞춘
                        애플리케이션을 제작했습니다.
                    </p>
                </div>
            </div>
            <hr className="divider" />
            <div className="App-header">
                <h1>ㅣ서비스 소개</h1>
                <div className="description-content">
                    <p>
                        베란다 집사는 스마트 화분 관리 애플리케이션으로, 사용자가 원거리에서 식물의 상태를 모니터링하고 관리할 수 있게 돕습니다. 첫째, 실시간 모니터링
                        기능을 구현하고, 사용자는 식물의 생장 환경을 실시간으로 확인하고 제어할 수 있는 환경을 제공합니다. 사용자는 Flask 웹 화면에서 공기 온습도,
                        반려식물의 토양 습도, YOLO를 이용한 반려식물의 병충해 여부 등을 확인할 수 있습니다. 둘째, 병충해 진단 및 진단서 제공 기능은 CNN 모델을 이용해 어떤
                        병충해인지 확인하고 원인, 증상, 해결책, 추천 약품 등을 진단서 형태로 제시합니다. 셋째, 생장환경 자동화 기능은 토양 습도와 공기 온습도를 측정하고,
                        최적의 생장 환경에 맞춰 물펌프를 작동합니다. 이 서비스는 기존 스마트 화분의 한계를 극복하고 사용자에게 더 효과적이고 편리한 식물 관리 솔루션을
                        제공합니다.
                    </p>
                </div>
            </div>
            <hr className="divider" />
            <div className="App-header">
                <h1>ㅣ사용 언어/개발 툴</h1>
                <div className="description-content">
                    <p>Skill | JAVA, Kotlin, SQL, C, C++, TensorFlowLite, MediaPipe, MLkit</p>
                    <p>Tool | AndroidStudio, Figma, Arduino, Fusion 360, Firebase, Github</p>
                    <p>Device | Arduino Uno </p>
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
                <img src={project2_mainphoto} alt="Main" className="main-photo-img" />
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

export default Project2Component;
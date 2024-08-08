import React, { useState } from 'react';
import '../css/ProjectComponent.css';
import i1 from '../../assets/team5_service1.png';
import i2 from '../../assets/team5_service2.png';
import i3 from '../../assets/team5_service3.png';
import i4 from '../../assets/team5_service4.png';
import project5_mainphoto from '../../assets/project5_mainphoto.png';


function Project5Component() {
    const [likeCount, setLikeCount] = useState(0); // 좋아요 카운트 상태
    const [liked, setLiked] = useState(false); // 좋아요 상태

    const developers = [
        {
            name: "| 이연우",
            role: "| 앱/웹 프로그래밍, 졸음 인식 모델 설계 및 구현, IoT 개발",
            ment: "일 년이라는 긴 시간 동안 팀원들과 협력하며 프로젝트의 전 과정을 경험할 수 있는 뜻깊은 시간이었습니다. 무사히 프로젝트를 완성할 수 있어 기쁩니다. 마지막까지 최선을 다한 우리 유나, 은현이,소영이와 지도해주신 이배호 교수님께 감사드립니다."
        },
        {
            name: "| 정유나",
            role: "| 앱/웹 프로그래밍, 얼굴 인식 모델 구현 및 학습, IoT 개발",
            ment: "이번 프로젝트를 마무리하면서 팀원들에게 고마운 마음을 전하고 싶습니다. 프로젝트 과정에서 협력과 소통의 중요성을 다시금 깨달았습니다. 이번 경험을 바탕으로 앞으로도 사회에 긍정적인 영향을 미칠 수 있는 프로젝트를 개발하고 싶습니다."
        },
        {
            name: "| 안은현",
            role: "| 앱/웹 프로그래밍, 데이터베이스 설계 및 구축, 졸음 인식 모델 설계 및 구현, IoT 개발, 서버 개발",
            ment: "졸프하면서 힘들 때도 많았지만 너희들 덕분에 열심히 할 수 있었어 너무 고마워! 학교에서 술도 마셔보고, 복도에서 자동차도 운전해 보는 이 경험은 평생 기억에 남을 거야. 주연이조 1년 동안 수고했고 고마웠어!!"
        },
        {
            name: "| 장소영",
            role: "| 앱/웹 프로그래밍, 데이터베이스 설계 및 구축, 얼굴 인식 모델 구현 및 학습, IoT 개발, 서버 개발",
            ment: "지난 일 년간 팀장으로서의 경험은 단순히 업무를 지휘하는 것을 넘어, 협력의 중요성을 깨닫게 해주었습니다. 팀원들 덕분에 중간에 포기하지 않고 끝까지 해낼 수 있었습니다. 이 경험을 바탕으로 더 나은 사람이 되고 싶습니다.DIFFERENT US"
        }
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
                <h1>ㅣEagleEagle: 음주 및 졸음 운전을 예방하는 모니터링 시스템</h1>
                <h1>ㅣ주연이조</h1>
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
                        음주 운전은 지난해에만 13만명이 적발되고, 이로 인한 사고로 214명이 사망하는 등 심각한 결과를 초래하고 있다. 졸음운전은 운전자의 주의력 저하와 반응 시간 지연을 초래하여 심각한 사고를 유발하는 주요 원인이다. 음주 운전과 졸음운전은 모두 운전자의 판단력을 저하시켜 사고 발생 가능성을 크게 증가시키는 중대한 사회적 문제이다. '이글이글(Eagle Eagle)' 시스템은 이러한 문제를 해결하기 위해 운전 중 졸음 및 음주를 실시간으로 탐지하여 사고를 미리 예방하는 기술적 해결책을 제공한다. 이를 통해 사고 발생 가능성을 줄이고 소중한 인명을 보호하는데 기여하고자 한다.
                    </p>
                </div>
            </div>
            <hr className="divider" />
            <div className="App-header">
                <h1>ㅣ서비스 소개</h1>
                <div className="description-content">
                    <p>이글이글 시스템에서는 세 가지 주요 기능을 제안한다.</p>
                    <p>첫째, 얼굴 인식 기술을 통해 사용자의 얼굴을 등록하고, 서비스 사용자와 운전자가 동일인인지 식별한다.</p>
                    <p>둘째, MQ3 센서를 통해 운전자의 알토올 수치를 측정하고,MPU 6050 센서를 통해 차량의 움직임을 감지한다.</p>
                    <p>셋째, 실시간으로 운전자의 눈과 고개의 움직임을 감지하여 졸음 운전을 인식하는 졸음 인식 기술을 제공한다.</p>
                    <p>사용자는 이글이글 시스템에 안드로이드 앱과 웹 인터페이스를 통해 접근할 수 있다. 안드로이드 앱을 통해 얼굴을 등록하고 졸음 분석을 수행하며, 웹 인터페이스를 통해 시스템의 모든 기능을 확인할 수 있다. 이글이글 시스템은 졸음운전과 음주 운전의 심각성을 구체적으로 준석하고, 이를 방지하기 위한 최신 기술들의 효과성과 적용 가능성을 논의하는 것을 목표로 한다. 이를 통해 교통사고 예방을 위한 기술적 접근의 중요성을 강조하며, 안전한 도로 환경 조성에 기여하고자 한다.</p>
                </div>
            </div>
            <hr className="divider" />
            <div className="App-header">
                <h1>ㅣ사용 언어/개발 툴</h1>
                <div className="description-content">
                    <p>Skill | Python, JAVA, MySQL, HTML, CSS, JavaScript,TensorFlow</p>
                    <p>Tool | PyCharm, AndroidStudio, VisualStudio, Flask, Node.js, Firebase, Figma</p>
                    <p>Device | Android Phone, PC, RaspberryPi4</p>
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
                <img src={project5_mainphoto} alt="Main" className="main-photo-img" />
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

export default Project5Component;
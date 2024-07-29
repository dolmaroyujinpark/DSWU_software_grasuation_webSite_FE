import React, { useState } from 'react';
import '../css/ProjectComponent.css';
import i1 from '../../assets/i1.jpg';
import i2 from '../../assets/i2.jpg';
import i3 from '../../assets/i3.jpg';
import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';
import p4 from '../../assets/p4.jpg';

function Project4Component() {
    const [likeCount, setLikeCount] = useState(0); // 좋아요 카운트 상태
    const [liked, setLiked] = useState(false); // 좋아요 상태

    const developers = [
        {
            name: "| 강나연",
            role: "| ",
            ment: "",
            photo: p1,
        },
        {
            name: "| 고서영",
            role: "| ",
            ment: "",
            photo: p2,
        },
        {
            name: "| 박영신",
            role: "| ",
            ment: "",
            photo: p3,
        },
        {
            name: "| 오주원",
            role: "| 백엔드 개발",
            ment: "끝까지 함께하지 못해서 미안하고 날 깍두기로 받아줘서 고마워(눙물..) 건강만땅 행복만땅 럭키퐁클",
            photo: p4,
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
                <h1>스투키(STOOKI): 모두를 위한 키오스크 서비스</h1>
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
                    <p>코로나19의 장기화로 인해 사용자의 라이프스타일이 변화하면서 비대면 서비스의 중요성이 부각되고 있습니다. 그러나 동시에 특정 사용자 그룹, 특히 노인이나 장애인, 어린이들에게는 접근성과 사용성의 문제가 발생하고 있습니다. STOOkI는 이러한 문제를 해결하기 위해 개발되었습니다. 사용자의 다양한 요구를 정확히 파악하여 디지털 격차를 해소하고, 누구나 동등하게 서비스를 이용할 수 있는 기회를 제공합니다. 기존 키오스크 시스템의 접근성 문제를 개선하고, 모든 사용자가 기술을 효과적으로 활용할 수 있도록 지원하는 것을 목표로 합니다. STOOkI는 비대면 서비스의 확장 속에서 디지털 소외계층의 접근성과 사용성을 보장하여, 모든 사용자가 편리하게 서비스를 이용할 수 있는 환경을 조성하고자 합니다.</p>
                </div>
            </div>
            <hr className="divider" />
            <div className="App-header">
                <h1>ㅣ서비스 소개</h1>
                <div className="description-content">
                    <p>'스투키'는 모든 사용자가 쉽게 접근할 수 있는 (내가 말했는지, 외부에서 삽입된 음성인지 알 수 없음) 기반 인터페이스를 제공합니다. 사용자가 명령어를 말하면 시스템이 이를 인식하여 필요한 서비스를 제공합니다. 이 시스템은 Google Media Pipe의 입술 움직임 감지 기술, Google Cloud의 STT(Speech-to-Text)와 TTS(Text-to-Speech) 기술을 통합하여 사용성을 극대화하였습니다.
                        입술 움직임 감지 기술은 사용자의 입술 움직임을 실시간으로 추적하여 (내가 말했는지, 외부에서 삽입된 음성인지 알 수 없음) 입력을 시작합니다. 이는 공공장소나 소음이 많은 환경에서도 안정적으로 작동합니다. 수집된 (내가 말했는지, 외부에서 삽입된 음성인지 알 수 없음) 데이터는 전처리 과정을 거쳐 주변 소음을 제거하고, (내가 말했는지, 외부에서 삽입된 음성인지 알 수 없음) 인식의 정확도를 높입니다. 이후 (내가 말했는지, 외부에서 삽입된 음성인지 알 수 없음) 데이터는 실시간으로 텍스트로 변환되며, 변환된 텍스트는 Dialogflow 기반의 챗봇으로 전달됩니다.
                        챗봇은 사용자의 질문이나 요구를 분석하여 적절한 응답을 생성합니다. 이를 통해 사용자는 자연스러운 대화 흐름을 경험할 수 있습니다. 챗봇의 응답은 다시 음성으로 변환되어 사용자에게 전달됩니다. Google Cloud의 TTS 기술을 통해 생성된 음성은 자연스럽고 이해하기 쉬운 형태로 제공됩니다.
                        '스투키' 시스템은 다양한 디바이스에서 일관된 사용자 경험을 제공하는 반응형 웹페이지를 갖추고 있습니다. 웹페이지는 메인 페이지, 메뉴 선택 페이지, 결제 페이지, 결제 완료 페이지로 구성되어 있습니다. 음성인식 기술을 통합하여 사용자가 (내가 말했는지, 외부에서 삽입된 음성인지 알 수 없음) 명령으로 간편하게 주문할 수 있도록 하였으며, 실시간으로 진행 상황을 확인할 수 있는 인터페이스를 제공합니다.
                        결론적으로, '스투키' 시스템은 디지털 기술에 익숙하지 않은 사용자도 쉽게 접근하고 사용할 수 있는 직관적인 인터페이스를 제공하며, 디지털 격차를 해소하는 데 기여할 수 있습니다.</p>
                </div>
            </div>
            <hr className="divider" />
            <div className="App-header">
                <h1>ㅣ사용 언어/개발 툴</h1>
                <div className="description-content">
                    <p>Skill: TTS, STT, MediaPipe, Dialogflow
                        Tool: PyCharm, Flask, Figma, HTML/CSS/JavaScript
                    </p>
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

export default Project4Component;
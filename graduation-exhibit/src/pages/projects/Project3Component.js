import React, { useState } from 'react';
import '../css/ProjectComponent.css';
import i1 from '../../assets/team3_service1.png';
import i2 from '../../assets/team3_service2.png';
import i3 from '../../assets/team3_service3.jpg';
import i4 from '../../assets/team3_service4.jpg';
import i5 from '../../assets/team3_service5.png';
import p1 from '../../assets/정3영1_1.PNG';
import p2 from '../../assets/정3영1_2.PNG';
import p3 from '../../assets/정3영1_3.PNG';
import p4 from '../../assets/정3영1_4.PNG';

function Project3Component() {
    const [likeCount, setLikeCount] = useState(0); // 좋아요 카운트 상태
    const [liked, setLiked] = useState(false); // 좋아요 상태

    const developers = [
        {
            name: "| 박지영",
            role: "| 3D 안경 모델링, AR 가상 시착 어플 제작",
            ment: "처음으로 긴 시간동안 팀별 프로젝트를 경험해 볼 수 있었던 시간이었다. 주제부터 결과물 제작까지 만들면서 정말 고생 많았고 팀원들에게 고맙단 말을 하고 싶다.",
            photo: p1,
        },
        {
            name: "| 염혜선",
            role: "| 안드로이드 어플 제작",
            ment: "처음으로 안드로이드 어플을 처음부터 끝까지 만들어본 경험을 할 수 있었다. 어려움도 있었지만 정말 많이 배울 수 있는 프로젝트였다. 일년동안 고생한 팀원들에게 수고했다고 다시 한 번 말해주고 싶다.",
            photo: p2,
        },
        {
            name: "| 정현정",
            role: "| 선호도 기반 추천시스템, 모델학습기반 추천시스템",
            ment: "1년간의 캡스톤 프로젝트는 때론 지치기도 했지만, 그 과정에서 얻은 경험은 매우 값졌다. 팀원들과 협력하며 팀워크의 중요성을 깨달았다. 함께해준 팀원들에게 감사의 마음을 전한다.",
            photo: p3,
        },
        {
            name: "| 최예람",
            role: "| 사용자 얼굴형 분석, 안드로이드 어플",
            ment: "이렇게 좋은 프로젝트로 대학생활을 마무리할 수 있어서 감사하다.",
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
                <h1>ㅣ가상 안경 시착 및 추천 'GLASSH’</h1>
                <h1>ㅣ정3영1</h1>
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
                    <p>온라인에서 안경을 구매하고 싶은데 그 안경이 자신과 어울리는지 모르겠어서 구매를 망설인적이 있지 않으신가요? 온라인 매장이 확대되고 있는 시장의 변화를 고려하여 매장에서 받을 수 있는 서비스를 온라인에서도 제공 받을 수 있는 ‘Glassh’를 기획하였습니다. 직접 매장을 가지 않고 온라인에서 본인과 어울리는 안경을 추천받고 시착해보는 생생한 경험을 제공하는 것을 목표로 합니다.</p>
                </div>
            </div>
            <hr className="divider" />
            <div className="App-header">
                <h1>ㅣ서비스 소개</h1>
                <div className="description-content">
                    <p>오프라인 매장 서비스를 온라인에서도 제공하기 위해서 추천과 시착 기능을 포함한다.
                        1. 얼굴형 기반 추천은 사용자의 얼굴을 인식해서 얼굴형에 어울리는 20개의 안경을 추천한다.
                        2. 사용자 선호도 기반 추천은 사용자의 선호도 조사를 통해 취향에 맞는 안경을 추천해준다.
                        3. 실물 안경 기반 추천은 사용자가 가지고 있는 안경과 비슷한 제품을 추천받고 싶은경우, 실물 안경을 촬영하면 그와 비슷한 안경 20개가 추천된다.
                        4. 소비자는 추천된 결과를 기반으로 안경을 시착해 볼 수 있다.</p>
                </div>
            </div>
            <hr className="divider" />
            <div className="App-header">
                <h1>ㅣ사용 언어/개발 툴</h1>
                <div className="description-content">
                    <p>Skills | Python, JAVA, C#, Android, TensorFlowLite, ARcore</p>
                    <p>Tools | PyCharm, Android Studio, Unity, Firebase</p>
                    <p>Devices | Android Phone</p>
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
                        <img src={developer.photo} alt={developer.name} className="photo" />
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

export default Project3Component;
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

function Project7Component() {
    const [likeCount, setLikeCount] = useState(0); // 좋아요 카운트 상태
    const [liked, setLiked] = useState(false); // 좋아요 상태

    const developers = [
        {
            name: "| 안예은",
            role: "| 프론트엔드 및 알고리즘 개발",
            ment: " 나 졸업한다 짱이지 TZA을 봐 대박임 ( •̀ω•́ )و✧",
            photo: p1,
        },
        {
            name: "| 이규빈",
            role: "| 데이터베이스 구축 및 서버 프로그래밍",
            ment: "수고했어 말랑이들∿ ෆ",
            photo: p2,
        },
        {
            name: "| 정수현",
            role: "| 모바일 프로그래밍",
            ment: "말랑이들 수고했다,,",
            photo: p3,
        },
        {
            name: "| 김희수",
            role: "| 프론트엔드 및 UI/UX 디자인",
            ment: "말랑이들 수고했엉 최고얌🍀이제 졸업이다~ ʸᵉᵃʰ( ᐛ✌)",
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
                <h1>ㅣTZA(톤잘알) / 퍼스널 컬러 진단 및 개인 맞춤형 뷰티 서비스</h1>
                <h1>ㅣ말랑이들</h1>
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
                        ‘퍼스널 컬러’란 개인이 타고난 신체 색과 조화롭게 어우러져 긍정적 이미지를 연출하는 고유색을 의미합니다. 그러나 오프라인 진단은 주관적이고 비용이 높으며, 온라인 진단은 촬영 조건과 기기 성능 차이로 인해 정확도가 떨어진다는 단점이 존재합니다.
                    </p>
                    <p>
                        이를 해결하기 위해 데이터 분석 알고리즘 및 강건한 촬영 환경을 통해 정확하게 퍼스널 컬러를 진단 후, 퍼스널 컬러 기반 메이크업 제품 제공 및 가상 메이크업 기능이 포함된 애플리케이션을 개발했습니다.
                    </p>
                </div>
            </div>
            <hr className="divider" />
            <div className="App-header">
                <h1>ㅣ서비스 소개</h1>
                <div className="description-content">
                    <p>
                        TZA(톤잘알)는 퍼스널 컬러 진단과 어울리는 메이크업 제품 정보 및 가상 메이크업 기능을 제공하는 개인 맞춤형 뷰티 서비스입니다. TZA(톤잘알)는 '진단 부스'와 '안드로이드 애플리케이션'으로 구성되어 있습니다.
                    </p>
                    <p>
                        '진단 부스'에서는 카메라와 터치모니터가 세팅되어 있어 안면 이미지를 촬영한 후 데이터 분석 알고리즘을 통해 해당 이미지를 분석하여 퍼스널 컬러를 진단합니다. 알고리즘을 통해 객관적인 진단을 저비용으로 제공함으로써 주관적이고 비용이 높은 오프라인 퍼스널 컬러 진단의 단점을 보완합니다.
                    </p>
                    <p>
                        '안드로이드 애플리케이션'에서는 진단받은 퍼스널 컬러를 기반으로 잘 어울리는 헤어, 액세서리 색상 및 메이크업 제품 정보를 제공합니다. 또한, 메이크업 제품을 이용한 가상 메이크업 기능을 통해 개인별 가장 적합한 퍼스널 컬러의 메이크업을 확인할 수 있습니다.
                    </p>
                    <p>
                        TZA(톤잘알)을 통해 간편하고 정확한 퍼스널 컬러 진단이 가능하며, 모든 세대가 쉽게 접근하고 이용할 수 있도록 설계했습니다.
                    </p>
                </div>
            </div>
            <hr className="divider" />
            <div className="App-header">
                <h1>ㅣ사용 언어/개발 툴</h1>
                <div className="description-content">
                    <p>Skill |  Java, JavaScript, Python3, SQL, React, Django, MySQL</p>
                    <p>Tool | PyCharm, Visual Studio Code, Android Studio Dolphin, Mediapipe, OpenCV, Selenium, Firebase, Amazon AWS</p>
                    <p>Device| iPad 9세대, 갤럭시 S22</p>
                    <p>OS | Windows/MacOS, Android</p>
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

export default Project7Component;
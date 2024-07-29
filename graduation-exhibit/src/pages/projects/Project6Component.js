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

function Project6Component() {
    const [likeCount, setLikeCount] = useState(0); // 좋아요 카운트 상태
    const [liked, setLiked] = useState(false); // 좋아요 상태

    const developers = [
        {
            name: "| 경다은",
            role: "| AR 실외 메모, AR 게임, AR 퀴즈",
            ment: " 프로젝트 중에는 힘들고 지쳤던 순간들이 많았는데 끝나고 돌아보니 팀원들과 함께 웃고, 버그를 잡고 기뻐했던 순간들만 기억에 남아요.힘들었던 기억을 소중하고 즐거운 추억으로 바꿔준 팀원분들 고맙고 사랑합니다♡ 캡스톤 수업을 참여하며 희로애락을 함께했던 덕우 분들, 여러분의 앞길이 꽃으로 가득하길 바랄게요!", photo: p1,
        },
        {
            name: "| 김가윤",
            role: "| AR 실내 메모, AR 게임",
            ment: "두 학기에 걸쳐 달려온 프로젝트를 잘 마무리 할 수 있어 기쁩니다. 지도해주신 강지헌 교수님, 함께 노력한 팀원들, 그리고 다방면으로 돌봐준 수, 완, 홍에게도 감사의 인사를 전합니다.",
            photo: p2,
        },
        {
            name: "| 서윤수",
            role: "| 안드로이드, AR 게임 모델링",
            ment: "개발 꼬꼬마로 참여하여 뜻깊었고, 코드로 세상을 바꾸는 개발자로 성장하고 싶습니다.",
            photo: p3,
        },
        {
            name: "| 전은채",
            role: "| AR 실내 메모, AR 물건메모, AR 길찾기, 안드로이드",
            ment: "1년 동안 수고 많았고 앞으로도 파이팅",
            photo: p4,
        },
        {
            name: "| 오다은",
            role: "| AR 실외 메모, AR물건메모, AR 길찾기",
            ment: " 1년 동안의 프로젝트를 통해 많은 것을 배울 수 있는 시간이었습니다. 함께한 팀원과 교수님 감사드립니다.",
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
                <h1>ㅣIMAEZIM : 증강현실 기반의 다중 환경 SNS 메모 시스템</h1>
                <h1>ㅣCodeDuck(코드덕)</h1>
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
                        인스타그램의 모든 사진들은 행복해 보이는데요. 모두가 더 웃고, 더 즐거워 보이는 이 사진들은 그들의 감정과, 생각을 공유하는 느낌보다 오히려 행복을 경쟁한다는 느낌을 줍니다.
                    </p>
                    <p>
                        어떻게 하면 이 사진의 평면성에 묻혀진 감정과 생각에 공감할 수 있을까요?
                        저희 앱은 사용자를 '평가자'에만 머물게 하는 기존 SNS 구조에서 벗어나, SNS를 작성한 공간에서 같은 풍경을 바라보며 그들의 이야기를 듣게 합니다. 이 과정에서 사용자는 더 이상 '평가자'로만 남지 않고, 친구들의 이야기를 진정으로 이해하고, 공감할 수 있는 '경험자'로 변합니다.
                    </p>
                    <p>
                        이렇게 서로 공감하며 소통하는 SNS를 만드는 게 저희 프로젝트의 목적이었고, 이를 위해 AR 기술을 채택하였습니다.
                    </p>
                </div>
            </div>
            <hr className="divider" />
            <div className="App-header">
                <h1>ㅣ서비스 소개</h1>
                <div className="description-content">
                    <p>
                        이매짐(IMAEZIM, 이어짐 맺어짐 그래서 그려짐)은 AR(Augmented Reality, 증강현실)기술을 이용하여 SNS 기능과, 이 외의 다양한 부가 기능을 제공하는 앱입니다. 이매짐 앱이 주는 경험은 총 3가지로 분류해볼 수 있습니다.
                    </p>
                    <p>
                        첫번째 경험은 '소통' 입니다. 이매짐의 SNS를 통해 실내, 외 공간에 AR 형태로 글, 사진, 음성, 영상 메모를 남겨 다양한 방법으로 소통할 수 있게 하였습니다. 공간의 한계를 넘어서서 이동하는 물건에도 메모를 남기도록 하여 사용자가 메모를 통해 표현할 수 있는 범위를 넓혔습니다. 사용자가 해당 위치나 사물을 비추면 사전에 등록된 각 종류의 메모를 확인할 수 있습니다.
                    </p>
                    <p>
                        두번째 경험은 '편리'입니다. 'AR길찾기'는 사용자가 찾는 AR메모로 데려다 주는 네비게이션 기능으로 메모를 찾을 때 어려움을 줄여줍니다.
                    </p>
                    <p>
                        마지막 경험은 '재미'입니다. 'AR퀴즈'는 무심코 지나가는 장소에서 새로운 정보를 제공하여 사용자가 교육적 가치를 얻을 수 있도록 합니다. 'AR게임'은 AR을 직관적으로 경험할 수 있는 기능입니다. 관광장소 '경복궁'에 현지화된 게임으로 모델링하여 여행 중 기억에 남는 추억을 만들 수 있을 것이라 기대합니다.
                    </p>
                </div>
            </div>
            <hr className="divider" />
            <div className="App-header">
                <h1>ㅣ사용 언어/개발 툴</h1>
                <div className="description-content">
                    <p>Skill |  Kotlin, C#, Python, SQLite, etc.</p>
                    <p>Tool | Android Studio, Unity, Photon, GitHub,Django, etc.</p>
                    <p>Device| Android Phone (API Level 24 and above), Google Cloud Platform(GCP)</p>
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
        </div >
    );
}

export default Project6Component;
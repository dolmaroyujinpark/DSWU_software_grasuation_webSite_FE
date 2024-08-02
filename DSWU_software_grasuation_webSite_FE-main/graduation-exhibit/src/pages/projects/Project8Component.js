import React, { useState } from 'react';
import '../css/ProjectComponent.css';
import i1 from '../../assets/team8_service1.jpg';
import i2 from '../../assets/team8_service2.jpg';
import i3 from '../../assets/team8_service3.jpg';
import i4 from '../../assets/team8_service4.png';
import p1 from '../../assets/동그라미_1.PNG';
import p2 from '../../assets/동그라미_2.PNG';
import p3 from '../../assets/동그라미_3.JPG';
import p4 from '../../assets/동그라미_4.PNG';
import p5 from '../../assets/동그라미_5.PNG';

function Project8Component() {
    const [likeCount, setLikeCount] = useState(0); // 좋아요 카운트 상태
    const [liked, setLiked] = useState(false); // 좋아요 상태

    const developers = [
        {
            name: "| 이서영",
            role: "| 데이터베이스 연동, UI/UX 설계 및 구축",
            ment: "열정적인 팀원들과 함께 목표를 이루기 위해 노력하며 즐겁게 프로젝트를 완성할 수 있었던 기회에 감사드립니다.",
            photo: p1,
        },
        {
            name: "| 임지영",
            role: "| 데이터베이스 연동, UI/UX 설계 및 구축",
            ment: "팀원들 모두가 밤낮없이 노력한 덕분에 이번 프로젝트는 잊지 못할 소중한 경험으로 남았습니다.",
            photo: p2,
        },
        {
            name: "| 정윤서",
            role: "| 라즈베리파이 시스템 구축, 데이터베이스 연동",
            ment: "대학 생활의 마침표를 찍는 졸업 프로젝트를 완수하고나니 이제 진짜 졸업이 실감납니다. 프로젝트 기간 동안 함께 달려나간 우리 동그라미 팀원들 그리고 지도교수 이재호 교수님께 감사를 표합니다. 1년동안 완주를 목표로 함께 달리며 때로는 지치고 벽에 부딪히기도 했지만, 이 모든 경험이 우리에게 양분이 될 거라 믿어 의심치 않습니다. 소중한 경험을 통해 많이 배우고 깨달음을 얻었으며, 이에 함께 해준 팀원들에게 다시 한 번 고마움을 전합니다. ",
            photo: p3,
        },
        {
            name: "| 추서연",
            role: "| 알고리즘 설계,딥러닝 데이터 수집, 모델 개발",
            ment: "프로젝트를 통해 많은 것을 배우고 성장할 수 있었습니다. 팀원들의 헌신과 협업 덕분에 예상보다 더 훌륭한 결과를 얻을 수 있었고, 함께 일하는 과정에서 얻은 소중한 경험들은 앞으로의 커리어에 큰 자산이 될 것입니다.프로젝트 내내 도전과 해결책을 찾아가는 과정이 즐거웠고, 그로 인해 더욱 단단해진 팀워크를 느낄 수 있었습니다. 이 기회를 주신 모든 분들께 깊은 감사를 드리며, 앞으로도 함께할 도전에 대한 기대감을 안고 마무리하고자 합니다.",
            photo: p4,
        },
        {
            name: "| 탁재영",
            role: "| 데이터베이스 설계 및 구축, 추천 알고리즘 설계 및 구현",
            ment: "팀원들과 뜻을 모아 프로젝트 완성에 온전히 몰입할 수 있는 즐거운 시간이었습니다.",
            photo: p5,
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
                <h1>ㅣ우리집 냉장고 식재료 해결 열쇠:Cookey</h1>
                <h1>ㅣ동그라미</h1>
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
                    저희의 서비스는 현대인들의 바쁜 일상 속에서 냉장고 속 식재료를 간편하게 파악할 수 있도록 신선도, 소비기한 등의 정보를 제공하여 식재료 관리를 더욱 효율적이고 편리하게 만드는 것 입니다.
                    </p>
                    <p>
                    또한 냉장고 속 식재료를 기반으로 한 레시피를 제공하여 메뉴 고민에 대한 부담을 덜고, 다양한 요리를 즐길 수 있도록 하여 식생활의 질을 향상시키는 데 중점을 두고 있습니다.
                    </p>
                </div>
            </div>
            <hr className="divider" />
            <div className="App-header">
                <h1>ㅣ서비스 소개</h1>
                <div className="description-content">
                    <p>[쿡기(Cookey)의 핵심 기능]</p>
                    <p>1. 식재료 현황 분석 서비스</p>
                    <p>실시간 객체 탐지를 통한 냉장고 속 식재료 현황 및 앱 업데이트</p>
                    <p>주요 정보 : 식재료의 종류, 소비기한, 들어온 날짜, 신선도</p>
                    <p>해당 정보를 바탕으로 한 자주 찾는 식재료 등록, 원터치 주문, 소비기한 임박 재료 알림 기능 제공</p>
                    <p>2. 보유 식재료 기반 에시피 추천 서비스</p>
                    <p>사용자의 냉장고 식재료 현황에 알맞는 레시피 추천</p>
                    <p>소비기한 임박 재료와 자주 찾는 재료를 우선순위로 둔 알고리즘 설계</p>
                    <p>앱 페이지에는 각 항목별 알고리즘이 적용된 Top 3 레시피와 전체 레시피 나열 및 레시피 상세 페이지 제공</p>
                </div>
            </div>
            <hr className="divider" />
            <div className="App-header">
                <h1>ㅣ사용 언어/개발 툴</h1>
                <div className="description-content">
                    <p>Skill | JAVA, Python</p>
                    <p>Tool | AndroidStudio, Google Firebase, TensorFlow lite, TensorFlow, PyTorch</p>
                    <p>Device| RaspberryPi4</p>
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

export default Project8Component;
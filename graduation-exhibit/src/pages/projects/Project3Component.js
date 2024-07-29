import React, { useState } from 'react';
import '../css/ProjectComponent.css';
import i1 from '../../assets/i1.jpg';
import i2 from '../../assets/i2.jpg';
import i3 from '../../assets/i3.jpg';
import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';
import p4 from '../../assets/p4.jpg';

function Project3Component() {
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
                <h1>가상 안경 시착 및 추천 'GLASSH’</h1>
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
                    <p>온라인에서 안경을 구매하고 싶은데 그 안경이 자신과 어울리는지 모르겠어서 구매를망설인적이 있지 않으신가요? 온라인 매장이 확대되고 있는 시장의 변화를 고려하여매장에서 받을 수 있는 서비스를 온라인에서도 제공 받을 수 있는 ‘Glassh’를기획하였습니다. 직접 매장을 가지 않고 온라인에서 본인과 어울리는 안경을 추천받고시착해보는 생생한 경험을 제공하는 것을 목표로 합니다.</p>
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
                    <p>Skills : Python, JAVA, C#, Android, TensorFlowLite, ARcore
                        Tools : PyCharm, AndroidStudio, Unity, Firebase
                        Devices : Android Phone</p>
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

export default Project3Component;
import React from "react";
import image from "../../assets/photo_pics3.PNG"; // 이미지 경로 수정
import "../css/ProfessorComponent.css"; // CSS 파일 임포트

const Professor3Component = () => {
  return (
    <div className="professor-container">
      <h3 className="professor-title">| 이재호 교수님</h3>
      <div className="professor-content">
        <img src={image} alt="Professor 3" className="professor-image" />
        <div className="professor-content">
          <div className="professor-text">
            <div className="professor-text-line">훌륭하게 성장한 솦웨 꿈나무들~</div>
            <div className="professor-text-line">졸전 진심진심 축하합니다!!</div>
            <div className="professor-text-line">부푼꿈 품고 솦웨 왔는데... 수업이 어렵네요... 애들이 다 잘하네요...</div>
            <div className="professor-text-line">디소공 생기면서 솦웨 없어진다네요... 속상한 마음이 클 것 같아요...</div>
            <div className="professor-text-line">
              캡스톤 2년차 지나면서, 제 눈엔 폭풍 성장이 보였습니다. 작년보다 확실히 퀄업 입니다. (작년애들 열람 금지) 여러분은 이제 확실히 개발자 되셨습니다.
              팀원끼리 속상해하고 고민하고 열심히 달렸고, 이제 막 종점을 찍었습니다. 누가 더 했든, 누가 덜 했든, 팀플이라는 그 어려운걸 해냈으니, 각자 서로
              쓰담쓰담 해줍시다^^
            </div>
            <div className="professor-text-line">
              사회에서 또 팀플 하다 속상하면 언제든 모교에 놀러오세요. 여러분 모두 준비된 인재 되심을 인지하시고, 졸업 후 새로운 무대에서 맹활약 하시길 진심으로
              바랍니다.
            </div>
            <div className="professor-text-line">제 2회 졸업작품 전시회 개최를 정말 축하드립니다.</div>
            <div className="professor-text-line">2024 탈 학과장 이재호 드림.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Professor3Component;

import React from "react";
import image from "../../assets/photo_pics4.PNG"; // 이미지 경로 수정
import "../css/ProfessorComponent.css"; // CSS 파일 임포트

const Professor5Component = () => {
  return (
    <div className="professor-container">
      <h3 className="professor-title">| 유제혁 교수님</h3>
      <div className="professor-content">
        <img src={image} alt="Professor 2" className="professor-image" />
        <div className="professor-content">
          <div className="professor-text">
            <div className="professor-text-line">사랑하는 학우 여러분들. 끝없는 열정으로 졸업작품 전시까지 준비하느라 정말 고생이 많았습니다.</div>
            <div className="professor-text-line">
              대학생활의 매 순간이 어렵고 힘들었겠지만, 여러분들의 무한한 가능성을 위한 발전의 시간이라고 믿어 의심치 않습니다. 각고의 노력과 도전 끝에
              완성해가는 졸업작품을 보면서, 여러분들의 참신한 아이디어와 독창성에 감탄하였습니다. 여러분들이 완성해가는 졸업작품들 속에서 소프트웨어 공학의
              깊이와 폭을 확인 할 수 있었고, 그것들이 이 분야의 지식을 깊이 이해하며, 세상의 문제들을 해결하는데 필요한 기술과 능력을 갖추었음을 확신하였습니다.
            </div>
            <div className="professor-text-line">
              졸업작품은 단순한 학문적 성취를 넘어서, 여러분의 창의성과 노력, 그리고 열정이 담긴 결과물입니다. 힘든 시기를 겪으면서도 포기하지 않고 완성한 이
              작품들은 그 자체로 소중한 경험과 의미를 지니고 있습니다. 물론 모든 것이 완벽할 수는 없겠지만, 졸업작품을 만드는 과정에서 얻은 지혜와 경험은
              여러분의 미래에 큰 도움이 될 것입니다.
            </div>
            <div className="professor-text-line">
              우리가 사는 세상은 계속 변하고, 배워야 하는 기술도 변합니다. 늘 변화를 받아들이고, 끊임없이 배우고 도전하는 자세가 중요합니다. 여러분들의 미래가
              무한한 가능성으로 가득 찬 것처럼, 소프트웨어 공학 분야도 그러합니다. 그 가능성을 이끌어 낼 수 있는 것은 창의성, 열정과 도전정신이 있는 바로
              여러분들입니다.
            </div>
            <div className="professor-text-line">
              마지막으로, 여러분들의 열정과 노력에 대한 이 모든 성과를 축하드립니다. 그리고 더 큰 도전을 위해 졸업전시회를 시작으로 하는 새로운 여정을 떠나는
              여러분을 응원합니다.
            </div>
            <div className="professor-text-line">앞으로 펼쳐질 미래가 기대됩니다. 감사합니다. </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Professor5Component;

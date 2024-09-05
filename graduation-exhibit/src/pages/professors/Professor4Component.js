import React from "react";
import image from "../../assets/photo_pics4.PNG"; // 이미지 경로 수정
import "../css/ProfessorComponent.css"; // CSS 파일 임포트

const Professor4Component = () => {
  return (
    <div className="professor-container">
      <h3 className="professor-title">| 음두헌 교수님</h3>
      <div className="professor-content">
        <img src={image} alt="Professor 2" className="professor-image" />
        <div className="professor-content">
          <div className="professor-text">
            <div className="professor-text-line">4년이라는 대학생활!</div>
            <div className="professor-text-line">
              정말 긴 시간처럼 느껴졌겠지만, 이제 그 긴 여정의 마무리를 준비하는 시간이 다가왔습니다. 여러분이 그동안 쏟아 부은 노력과 열정으로 여러분만의
              졸업작품을 완성하고, 이렇게 졸업 작품 전시회를 열게 된 것을 진심으로 축하합니다.
            </div>
            <div className="professor-text-line">
              졸업작품은 단순한 학문적 성취를 넘어서, 여러분의 창의성과 노력, 그리고 열정이 담긴 결과물입니다. 힘든 시기를 겪으면서도 포기하지 않고 완성한 이
              작품들은 그 자체로 소중한 경험과 의미를 지니고 있습니다. 물론 모든 것이 완벽할 수는 없겠지만, 졸업작품을 만드는 과정에서 얻은 지혜와 경험은
              여러분의 미래에 큰 도움이 될 것입니다.
            </div>
            <div className="professor-text-line">
              이번 졸업작품 전시회가 끝나면, 대학생활의 마지막 단계가 곧 다가온다는 것을 상기해봅니다. 졸업작품을 포함한 여러분이 그동안 걸어온 길과 쌓아온
              경험은 여러분이 졸업 후 어떤 길을 선택하든 큰 자산이 될 것이라고 확신합니다. 졸업작품을 처음 시작할 때를 생각해 보세요. 너무 막연하고 부담이
              되었지만, 여러분 모두는 그러한 부담감을 이겨내고 졸업작품을 훌륭히 완성하였습니다. 이 경험을 상기하며 항상 자신감을 가지고 새로운 도전에 나서시기
              바랍니다.
            </div>
            <div className="professor-text-line">
              소프트웨어 전공 2기 졸업생으로서 여러분의 성취를 자랑스럽게 생각하며, 앞으로의 여정에서도 여러분이 원하는 꿈을 이룰 수 있기를 기원합니다. 다시한번
              졸업작품 전시회와 여러분의 새로운 시작을 진심으로 축하합니다.
            </div>
            <div className="professor-text-line">소프트웨어 전공 2기 졸업생, 화이팅!!! 감사합니다.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Professor4Component;

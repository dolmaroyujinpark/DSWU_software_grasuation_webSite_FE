import React from "react";
import image from "../../assets/photo_pics1.PNG"; // 이미지 경로 수정
import "../css/ProfessorComponent.css"; // CSS 파일 임포트

const Professor1Component = () => {
  return (
    <div className="professor-container">
      <h3 className="professor-title">| 강지헌 교수님</h3>
      <div className="professor-content">
        <img src={image} alt="Professor 1" className="professor-image" />
        <div className="professor-text">
          <div className="professor-text-line">
            졸업프로젝트 준비를 시작한 지 벌써 1년의 세월이 지나 결실을 보는 자리가 마련되었습니다. 가장 많이 수고한 학생들에게 찬사와 감사의 마음을 전합니다.
          </div>
          <div className="professor-text-line">
            작년 이맘쯤 팀이 구성되어 지도교수가 배정되고, 각 팀별 어떤 주제로 1년간의 프로젝트를 이끌어갈지 치열하게 고민했던 시간들이 떠오르고,
            미니프로젝트/중간발표/최종발표 등 여러분의 아이디어에 놀라고 늘어가는 개발/발표 실력에 놀라곤 했었습니다. 물론 좀 더 가치 있는 결과물을 얻었으면
            하는 마음에 짧은 식견의 피드백으로 마음 아프게 한 것도 있을 거라 생각됩니다. 혹시 그랬다면 미안해요!~~
          </div>
          <div className="professor-text-line">
            여러분의 인생에서 작은 작품 하나가 이렇게 완성되었습니다. 앞으로 사회에 나가 지금과 같이 풀어야 할 문제를 만나고, 해결방법을 모색하여 풀릴 듯 안
            풀릴 듯한 일들을 차근차근 해결해야 하는 과정을 거칠 것입니다. 아래 그림처럼 계획과 현실의 괴리에 좌절하는 일도 생기겠지요. 그럴 때마다 하기 싫지만
            했던 의지, 최선을 다했던 기억과 경험이 여러분의 계획과 현실을 바로잡아 줄 거라 확신합니다. 본인의 가치를 믿고 조금 돌아가더라도 본인의 계획을 꼭
            이루시길 바랍니다.
          </div>
          <div className="professor-text-line">
            유난히도 더웠던 여름이 지나가고 있습니다. 제가 좋아하는 말 중 하나가 “이 또한 지나가리라”입니다. 여러분의 소프트웨어전공에서의 여정 한 페이지가
            지나가고 있습니다. 졸업작품전시회를 위해 너무나 많은 고생을 한 학생 여러분, 행사 진행을 위해 노력해준 졸업준비위원회 학우들과 조교님, 학생들
            지도해주신 교수님들… 졸업작품전시회가 드디어 지나가고 있습니다.^^ 학생들에게 조금 더 세심하게 챙겨주지 못한 아쉬움이 남아 미안한 마음도 크네요.
            미안한 마음은 후배들에게 보다 최선을 다하는 것으로 대신하겠습니다.
          </div>
          <div className="professor-text-line" style={{ fontWeight: "bold", padding: "10px" }}>
            여러분들이 제자여서 너무나 자랑스럽습니다. (강지헌은 좋겠다 우리가 제자여서……^^)
          </div>
        </div>
      </div>
    </div>
  );
};
export default Professor1Component;

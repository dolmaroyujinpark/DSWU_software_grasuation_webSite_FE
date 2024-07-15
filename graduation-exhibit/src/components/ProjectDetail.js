import React from 'react';

const projects = [
  { id: 1, title: '프로젝트 1', description: '프로젝트 1 설명', details: '상세 정보' },
  { id: 2, title: '프로젝트 2', description: '프로젝트 2 설명', details: '상세 정보' },
  // 추가 프로젝트 정보
];

function ProjectDetail({ projectId }) {
  const project = projects.find(p => p.id === parseInt(projectId));

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>{project.details}</p>
    </div>
  );
}

export default ProjectDetail;

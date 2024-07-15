import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, title: '프로젝트 1', description: '프로젝트 1 설명' },
  { id: 2, title: '프로젝트 2', description: '프로젝트 2 설명' },
  // 추가 프로젝트 정보
];

function ProjectList() {
  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <Link to={`/project/${project.id}`}>자세히 보기</Link>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;

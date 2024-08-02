import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { hash } = useLocation();   //현재 url의 해시 부분 추출(해시는 #로 시작하는 url의 부분)

  //해시 변화 감지 및 스크롤 조정
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
}

export default ScrollToTop;

import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { ReactComponent as CreateIcon } from '../assets/pencil.svg';
import ChatItem from '../components/guest/chatItem';
import Template from '../components/template/template';
import './css/Guest.scss'; // CSS import

function GuestPage() {
    const now = dayjs();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [data, setData] = useState([]);
    const reverse = [...data].reverse();

    useEffect(() => {
        fetch('http://localhost:4000/guest2')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    const [color, setColor] = useState('#ffffff');
    const [Create, setCreate] = useState(false);

    const toggleCreate = () => setCreate(!Create);

    const onSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:4000/guest2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                body,
                color,
                createAt: now.format('YYYY-MM-DD HH:mm'),
            }),
        }).then((res) => {
            if (res.ok) {
                alert('생성이 완료되었습니다');
                setTitle('');
                setBody('');
                setColor('#ffffff');
                fetch('http://localhost:4000/guest2')
                    .then((res) => res.json())
                    .then((data) => {
                        setData(data);
                    });
                setCreate(false); // 메시지 작성 후 채팅 생성 영역을 닫습니다.
            } else {
                alert('생성이 실패하였습니다.');
            }
        });
    };

    const onCancel = () => {
        setTitle('');
        setBody('');
        setColor('#fff');
        setCreate(false); // 채팅 생성 영역을 닫습니다.
    };

    return (
        <Template>
            <div className="guest-wrap detail-page">
                <div className="guest-top">
                    <h2>GUESTBOOK</h2>
                </div>
                <ul className="chat-wrap detail-chat-wrap">
                    {data.length === 0 ? (
                        <p className="no-data">데이터가 없습니다.</p>
                    ) : (
                        reverse.map((o) => (
                            <ChatItem
                                key={o.id}
                                id={o.id}
                                color={o.color}
                                title={o.title}
                                body={o.body}
                                createAt={o.createAt}
                                setData={setData}
                            />
                        ))
                    )}
                </ul>
                <div className="create-wrap">
                    <div className={`chat-create ${Create ? 'input-wrap' : 'icon-wrap'}`}>
                        {Create ? (
                            <form onSubmit={onSubmit}>
                                <div className="input-wrap">
                                    <div className="chat-box" style={{ background: color }}>
                                        <input
                                            placeholder="제목"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            required
                                        />
                                        <textarea
                                            placeholder="내용"
                                            value={body}
                                            onChange={(e) => setBody(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <ul className="color-select">
                                        <li className="color-1" onClick={() => setColor('#cccccc')} />
                                        <li className="color-2" onClick={() => setColor('#bebebe')} />
                                        <li className="color-3" onClick={() => setColor('#999999')} />
                                        <li className="color-4" onClick={() => setColor('#666666')} />
                                        <li className="color-5" onClick={() => setColor('#333333')} />
                                        <li className="color-6" onClick={() => setColor('#000000')} />
                                    </ul>
                                </div>
                                <div className="edit-btn-wrap">
                                    <button className="save-btn" type="submit">
                                        입력
                                    </button>
                                    <button className="cancel-btn" type="button" onClick={onCancel}>
                                        취소
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <CreateIcon className="create-icon" onClick={toggleCreate} />
                        )}
                    </div>
                    {Create && <div className="out-area" onClick={toggleCreate} />}
                </div>
            </div>
        </Template>
    );
}

export default GuestPage;

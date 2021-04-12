import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const name = 'Quynh Nguyen Van';
    const age = 22; // number

    const isMale = true; // boolean
    const student = {
        deparment: 'International School',
    }; // objects
    const colorList = ['red', 'green', 'blue']; // string

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    {name} - {age} - {student.deparment}
                </p>

                {/* CACH 1: HIEN THI CO DIEU KIEN */}
                {isMale ? <p>Male</p> : <p>Female</p>}

                {/* CACH 2: */}
                {isMale && <p>This is a man</p>}
                {!isMale && <p>This is a woman</p>}

                {/* Muốn render nhiều dòng bỏ vào ngoặc tròn */}
                {isMale && (
                    <React.Fragment>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                    </React.Fragment>
                )}

                {/* Sử dụng Shift + Alt + mũi tên Lên/Xuống để copy */}
                {isMale && (
                    <>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                    </>
                )}

                {/* Đối với object không thể render trực tiếp lên trên màn hình nhen 
                chỉ render nó với key thôi */}
                <p>{student.deparment}</p>

                {/* Đối với mảng  */}
                <ul>
                    {/* lướt qua cái mảng colorList xong dùng map (ứng với 1 cái màu) 
                    mình muốn viết xuống dòng luôn
                    nên mở 1 cái ngoặc tròn thêm thẻ <li></li>
                    mỗi color trả về 1 thẻ li với {color} màu đấy*/}
                    {colorList.map((color) => (
                        <li key={color} style={{ color }}>
                            {color}
                        </li>
                    ))}
                </ul>
            </header>
        </div>
    );
}

export default App;

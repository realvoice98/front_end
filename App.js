/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '2월 17일 발행';
  let [글제목,제목변경] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let [좋아요,좋아요변경] = useState(0);
  
function 함수(){
  console.log(1);
}

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactingBlog</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]} 
        <span onClick={()=>{좋아요변경(좋아요+1)}}>👍🏻</span> {좋아요} 
        <br></br>
        {/* <button onClick={()=>{}}>변경하기</button> */}
        </h4>
        
        <p>{post}</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>{post}</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>{post}</p>
      </div>
      
      <Modal></Modal>
      <Button></Button>
    </div>
  );
}

function Modal(){ //컴포넌트
    return(
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    )
}

function Button(){ 
  let [num,ch] = useState(0);
  return(
    <div className='Button'>
    <button onClick={()=>{ch(num+3)}}>눌러봐</button> {num}
    </div>
  )
}

export default App;


//어떤걸 컴포넌트 만들면 좋은가
//1.반복적인 html축약할때
//2. 큰 페이지들
// 자주변경되는 것들 
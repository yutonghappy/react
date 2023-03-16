function App() {

    const red = {
        color:"red"
    }

    const elem = (<div>李凯旋</div>);

    const list = [(<div key={1}>大话西游</div>), (<span key={2}>从你的全世界路过</span>),(<i key={3}>乘风破浪</i>)]
  return (
      <div>
        <div>Hello, React</div>
        <ul>
            <li id="sang">张三</li>
            <li id="zhang">李四</li>
            <li  className={'haha'}>王五</li>
            <li style={red}>王二麻子</li>
        </ul>
          {elem}
          {list}
      </div>
  );
}

export default App;

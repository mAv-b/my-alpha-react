import './App.css';

let bool = false;
let num1 = '';
let num2 = '';
let op = '';

function digit(e){
  let t =  e.target.textContent;
  if (bool){
    bool=false;
    document.getElementById('screen').textContent = '';
  }
  if(!op){
    num1 += t;
    document.getElementById('screen').textContent += t;
  }else{
    num2 += t;
    document.getElementById('screen').textContent += t;
  };
};

function operation(e){
  if(!op){
    document.getElementById('screen').textContent = '';
    op = e.target.textContent;
  }
  else return;
};

function equal(e){
  if(num1 && num2 && op){
    switch (op){
      case '+':
        document.getElementById('screen').textContent = Number(num1)+Number(num2);
        console.log(Number(num1))
        break;
      case '-':
        document.getElementById('screen').textContent = Number(num1)-Number(num2);
        break;
      case 'x':
        document.getElementById('screen').textContent = Number(num1)*Number(num2);
        break;
      case '/':
        document.getElementById('screen').textContent = Number(num1)/Number(num2);
        break;
      default:
        return;
    };
    num1 = '';
    num2 = '';
    op = '';
    bool = true;
  }else{
    return
  };
};

function App() {
  return (
    <section id='calculadora'>
      <div id='screen'>

      </div>
      <div id='teclas'>
        <div onClick={digit} className='tecla'>9</div>
        <div onClick={digit} className='tecla'>8</div>
        <div onClick={digit} className='tecla'>7</div>
        <div onClick={operation} className='tecla'>/</div>
        <div onClick={digit} className='tecla'>6</div>
        <div onClick={digit} className='tecla'>5</div>
        <div onClick={digit} className='tecla'>4</div>
        <div onClick={operation} className='tecla'>x</div>
        <div onClick={digit} className='tecla'>3</div>
        <div onClick={digit} className='tecla'>2</div>
        <div onClick={digit} className='tecla'>1</div>
        <div onClick={operation} className='tecla'>+</div>
        <div onClick={digit} className='tecla'>.</div>
        <div onClick={digit} className='tecla'>0</div>
        <div onClick={equal} className='tecla'>=</div>
        <div onClick={operation} className='tecla'>-</div>
      </div>
    </section>
  );
}

export default App;


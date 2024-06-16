import './App.css';

function App(props) {
  return (
    <div className="dos">
      <div className='texto'>
        <h1> <center> {props.nome}</center></h1>
        <h2><center>{props.insti}</center></h2>
        <center>
        <p className='segundotext'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi voluptas nam quasi sapiente mollitia natus ab sed odit, est nihil distinctio eligendi voluptatibus temporibus necessitatibus veritatis, quaerat repellat. Amet, repellendus.</p>
        <p className='segundotext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad eligendi asperiores suscipit perspiciatis quibusdam commodi cum amet ducimus! Sed quod perferendis magni? Reiciendis tenetur molestiae temporibus excepturi iste! Reprehenderit.</p>
        </center>
      </div>
      <div>
          <img className='img' src={props.imgs} alt="" />
      </div>
    </div>
  );
}

export default App;

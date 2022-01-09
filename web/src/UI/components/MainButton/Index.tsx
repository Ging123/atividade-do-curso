import './styles.scss';

interface props {
  content?:string;
  margin?:string;
  onClick?:() => void;
  type?:'button'|'reset'|'submit'
}

const MainButton = (props:props) => {
  return (
    <button 
      className='main-button less-brightness-on-hover-or-click'  
      type={props.type} 
      style={{ margin:props.margin }}
      onClick={props.onClick}>
      { props.content }
    </button>
  );
}

export default MainButton;
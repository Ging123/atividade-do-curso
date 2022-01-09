interface props {
  content?:string;
  color?:string;
  onClick?:() => void;
}

const ClickableText = (props:props) => {
  return (
    <b 
      className='clickable-text less-brightness-on-hover-or-click' 
      style={{ color:props.color }} 
      onClick={ props.onClick }>
      { props.content }
    </b>
  )
}

export default ClickableText;
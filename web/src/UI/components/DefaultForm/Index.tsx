import './styles.scss';

interface props {
  children?:any;
  onSubmit?:() => void;
}

const DefaultForm = (props:props) => {
  return (
    <form className='default-form' onSubmit={props.onSubmit}>
      { props.children }
    </form>
  )
}

export default DefaultForm;
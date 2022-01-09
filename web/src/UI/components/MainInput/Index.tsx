import './styles.scss';

interface props {
  icone?:JSX.Element;
  margin?:string;
  maxLength?:number;
  minLength?:number;
  onChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?:string;
  required?:boolean;
  type?:"email"|"number"|"password"|"text";
  value:string;
}

const MainInput = (props:props) => {
  return (
    <div className='main-input-container' style={{ margin:props.margin }}>
      { props.icone }
      <input
        className='main-input'
        maxLength={props.maxLength}
        minLength={props.minLength}
        onChange={props.onChange}
        placeholder={props.placeholder}
        required={props.required}
        value={props.value}
      />
    </div>
  )
}

export default MainInput;
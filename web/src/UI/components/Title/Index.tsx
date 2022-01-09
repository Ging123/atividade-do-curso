import './styles.scss';

interface props {
  margin?:string;
  text:string;
}

const Title = ({text, margin}:props) => {
  return (
    <div className="title" style={{ margin:margin }}>
      { text }
    </div>
  )
}

export default Title;
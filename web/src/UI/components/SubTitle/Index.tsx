import './styles.scss';

interface props {
  margin?:string;
  text:string;
}

const SubTitle = ({text, margin}:props) => {
  return (
    <div className='sub-title' style={{ margin:margin }}>
      { text }
    </div>
  )
}

export default SubTitle;
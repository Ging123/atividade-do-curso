import './styles.scss';

interface props {
  children?:any;
}

const PageContainer = (props:props) => {
  return (
    <div className='page-container'>
      {props.children}
    </div>
  );
}

export default PageContainer;
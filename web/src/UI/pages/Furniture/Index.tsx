import FurnitureForm from "../../components/FurnitureForm/Index";
import PageContainer from "../../components/PageContainer/Index";
import SubTitle from "../../components/SubTitle/Index";
import Title from "../../components/Title/Index";

const Furniture = () => {
  document.title = 'Móveis';

  return (
    <PageContainer>
      <Title margin="10px 0px" text='bem vindo :3'/>
      <SubTitle text="Peça os melhores móveis do universo aqui"/>
      <FurnitureForm/>
    </PageContainer>
  )
}

export default Furniture;
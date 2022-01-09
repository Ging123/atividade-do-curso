import { useState } from 'react';
import { FaBook, FaBox, FaPalette, FaRulerHorizontal } from 'react-icons/fa';
import DefaultForm from '../DefaultForm/Index';
import MainButton from '../MainButton/Index';
import MainInput from '../MainInput/Index';
import './styles.scss';

const FurnitureForm = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [metric, setMetric] = useState('');
  const [material, setMaterial] = useState('');
  const [imageLink, setImageLink] = useState('');

  return (
    <DefaultForm>
      <MainInput
        icone={<FaBook/>}
        maxLength={100}
        onChange={(e) => setName(e.target.value)}
        margin='15px 0px 10px 0px'
        placeholder='Nome do móvel'
        required={true}
        value={name}
      />
      <MainInput
        icone={<FaPalette/>}
        maxLength={30}
        onChange={(e) => setColor(e.target.value)}
        placeholder='Cor'
        required={true}
        value={color}
      />
      <MainInput
        icone={<FaRulerHorizontal/>}
        margin='10px 0px'
        maxLength={50}
        onChange={(e) => setMetric(e.target.value)}
        placeholder='Métricas'
        required={true}
        value={metric}
      />
      <MainInput
        icone={<FaBox/>}
        maxLength={100}
        onChange={(e) => setMaterial(e.target.value)}
        placeholder='Materiais'
        required={true}
        value={material}
      />
      <input
        className='image-link'
        value={imageLink}
        onChange={(e) => setImageLink(e.target.value)}
        type={'file'}
        accept="image/png, image/gif, image/jpeg"
      />
      <MainButton
        content='Pedir'
        type='submit'
      />
    </DefaultForm>
  )
}

export default FurnitureForm;
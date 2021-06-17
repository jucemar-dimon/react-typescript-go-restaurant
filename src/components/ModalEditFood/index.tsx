import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { useRef } from 'react';

interface Food {
  id:number;
  name: string;
  description: string;
  price: number,
  available: boolean,  
  image: string;
}

interface ModalEditFoodProps {
  setIsOpen: () => void;
  handleUpdateFood: (food:Food) => void;
  editingFood: Food;
  isOpen: boolean;
}

export default function ModalEditFood(props: ModalEditFoodProps) {
  const formRef = useRef<FormHandles>(null);
  const { isOpen, setIsOpen, editingFood, handleUpdateFood } = props;

  async function handleSubmit(data:Food) {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );

};



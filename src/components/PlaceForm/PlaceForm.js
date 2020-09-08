import React from 'react';
import { useForm } from 'react-hook-form';

const PlaceForm = ({ onAddCardSubmit }) => {
  const { handleSubmit, register, errors } = useForm({
    mode: 'onChange',
  });
  const handleData = (data) => {    
    onAddCardSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleData)} className='popup__form' noValidate>
      <label className='popup__label'>
        <input
          name='name'
          ref={register({
            required: 'Это поле необходимо заполнить',
            minLength: {
              value: 2,
              message: 'Должно быть не менее 2 символов',
            },
            maxLength: {
              value: 30,
              message: 'Должно быть не менее 40 символов',
            },
          })}
          type='text'
          id='place-name'
          className={`popup__input ${errors.name ? 'popup__input_type_error' : ''}`}
          placeholder='Введите адрес или город'
          autoСomplete='off'
        />
        {errors.name && (
          <span className='popup__error' id='place-name-error'>
            {errors.name.message}
          </span>
        )}
      </label>
     
      <button
        type='submit'
        className={`button popup__button ${errors.link || errors.name ? 'popup__button_disabled' : 0}`}
      >
        Добавить
      </button>
    </form>
  );
};

export default PlaceForm;

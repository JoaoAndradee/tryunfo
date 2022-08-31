import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <>
        <input
          type="text"
          name="cardName"
          onChange={ onInputChange }
          value={ cardName }
          data-testid="name-input"
        />
        <textarea
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
          data-testid="description-input"
        />
        <input
          type="number"
          name="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
          data-testid="attr1-input"
        />
        <input
          type="number"
          name="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
          data-testid="attr2-input"
        />
        <input
          type="number"
          name="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
          data-testid="attr3-input"
        />
        <input
          type="text"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
          data-testid="image-input"
        />
        <select
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
          data-testid="rare-input"
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        { hasTrunfo === false
          && <input
            type="checkbox"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
          /> }
        Super Trunfo ?
        { hasTrunfo
          && <p>Você já tem um Super Trunfo em seu baralho</p> }
        <input
          type="button"
          name="Salvar"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          value="Salvar"
          data-testid="save-button"
        />
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;

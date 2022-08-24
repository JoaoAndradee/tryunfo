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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <>
        <input
          type="text"
          onChange={ onInputChange }
          value={ cardName }
          data-testid="name-input"
        />
        <textarea
          value={ cardDescription }
          onChange={ onInputChange }
          data-testid="description-input"
        />
        <input
          type="number"
          value={ cardAttr1 }
          onChange={ onInputChange }
          data-testid="attr1-input"
        />
        <input
          type="number"
          value={ cardAttr2 }
          onChange={ onInputChange }
          data-testid="attr2-input"
        />
        <input
          type="number"
          value={ cardAttr3 }
          onChange={ onInputChange }
          data-testid="attr3-input"
        />
        <input
          type="text"
          value={ cardImage }
          onChange={ onInputChange }
          data-testid="image-input"
        />
        <select
          value={ cardRare }
          onChange={ onInputChange }
          data-testid="rare-input"
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <input
          type="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          data-testid="trunfo-input"
        />
        Super Trunfo ?
        <input
          type="button"
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;

import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <input type="text" name="name" id="name" data-testid="name-input" />
        <textarea data-testid="description-input" />
        <input type="number" name="attr1" id="attr1" data-testid="attr1-input" />
        <input type="number" name="attr2" id="attr2" data-testid="attr2-input" />
        <input type="number" name="attr3" id="attr3" data-testid="attr3-input" />
        <input type="text" name="image" id="image" data-testid="image-input" />
        <select data-testid="rare-input">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <input
          type="checkbox"
          name="super-trunfo"
          id="super-trunfo"
          data-testid="trunfo-input"
        />
        Super Trunfo ?
        <input type="button" value="Salvar" data-testid="save-button" />
      </>
    );
  }
}

export default Form;

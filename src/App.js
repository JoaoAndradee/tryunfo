import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: '',
    saveButton: () => {
      const {
        cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      } = this.state;
      const MAX_POWER_ATTR = 90;
      const MAX_POWER_TOTAL = 210;
      if (
        cardName.length > 0
        && cardDescription.length > 0
        && cardImage.length > 0
        && cardRare.length > 0
      ) {
        if (
          cardAttr1 > MAX_POWER_ATTR
          || cardAttr2 > MAX_POWER_ATTR
          || cardAttr3 > MAX_POWER_ATTR
        ) {
          return true;
        }
        if (
          parseInt(cardAttr1, 10)
          + parseInt(cardAttr2, 10)
          + parseInt(cardAttr3, 10) <= MAX_POWER_TOTAL
          && cardAttr1 + cardAttr2 + cardAttr3 > 0
        ) {
          return false;
        }
      }
      return true;
    },
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

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
      saveButton,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ false }
          isSaveButtonDisabled={ saveButton() }
          // Requisito 06
          onSaveButtonClick={ () => {
            this.setState({
              cardName: '',
              cardDescription: '',
              cardImage: '',
              cardAttr1: '0',
              cardAttr2: '0',
              cardAttr3: '0',
              cardRare: 'normal',
            });
          } }
          // FIM
          onInputChange={ this.handleChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;

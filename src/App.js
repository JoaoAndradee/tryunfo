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
    cardTrunfo: false,
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
    // Requisito 06
    cardDeck: [],
    // Fim 06
    hasTrunfo: false,
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
      // Requisito 06
      cardDeck,
      // Fim 06
      hasTrunfo,
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
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ saveButton() }
          // Requisito 06
          onSaveButtonClick={ () => {
            const newCard = {
              nome: cardName,
              description: cardDescription,
              image: cardImage,
              attr1: cardAttr1,
              attr2: cardAttr2,
              attr3: cardAttr3,
              rare: cardRare,
              superTrunfo: cardTrunfo,
            };
            cardDeck.push(newCard);
            this.setState({
              cardName: '',
              cardDescription: '',
              cardImage: '',
              cardAttr1: '0',
              cardAttr2: '0',
              cardAttr3: '0',
              cardRare: 'normal',
              hasTrunfo: cardTrunfo,
            });
          } }
          // FIM
          onInputChange={ this.handleChange }
          hasTrunfo={ hasTrunfo }
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
        <h2>Todas as suas Cartas</h2>
        {
          cardDeck.map((item, index) => (
            <Card
              cardName={ item.nome }
              cardDescription={ item.description }
              cardAttr1={ item.attr1 }
              cardAttr2={ item.attr2 }
              cardAttr3={ item.attr3 }
              cardImage={ item.image }
              cardRare={ item.rare }
              cardTrunfo={ item.superTrunfo }
              key={ index }
            />
          ))
        }
      </div>
    );
  }
}

export default App;

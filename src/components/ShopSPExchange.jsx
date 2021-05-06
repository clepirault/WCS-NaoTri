/* eslint-disable no-unused-vars */
import './ShopSPExchange.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import coins from '../images/coins.png';
import bon1 from '../images/bon1.png';
import bon2 from '../images/bon2.png';
import bon5 from '../images/bon5.png';
import bon10 from '../images/bon10.png';
/* eslint-disable react/destructuring-assignment */

function ShopSPExchange(props) {
  // eslint-disable-next-line react/prop-types
  const { name, address, ville } = props.shop;

  const Spoints = parseInt(localStorage.getItem('sp'), 10);

  const history = useHistory();

  const msgAlert = `Attention, n'appuyez sur 'Retour Home' qu'après confirmation du personnel en caisse.`;

  const [choice, setChoice] = useState('');
  const [choiceVisible, setChoiceVisible] = useState(true);
  const [changeNOK, setChangeNOK] = useState(false);
  const [changeOK, setChangeOK] = useState(false);

  function Valider() {
    if (Spoints >= parseInt(choice, 10)) {
      setChoiceVisible(false);
      setChangeOK(true);
      setChangeNOK(false);
      localStorage.setItem('sp', Spoints - parseInt(choice, 10));
    } else {
      setChoiceVisible(false);
      setChangeOK(false);
      setChangeNOK(true);
    }
  }

  function backToChoice() {
    setChoiceVisible(true);
    setChangeOK(false);
    setChangeNOK(false);
  }

  function backToHome() {
    setChoiceVisible(true);
    setChangeOK(false);
    setChangeNOK(false);
    history.push('/home');
  }

  return (
    <div>
      <h3>Enseigne :</h3>
      <p>{name}</p>
      <p>{address}</p>
      <p>{ville}</p>
      {choiceVisible && (
        <div className="body">
          <p>SP disponibles : {Spoints}</p>
          <div className="label-SP">
            <label htmlFor="100SP" className="label">
              <img src={coins} alt="coins" className="coins" />
              <p>100SP = 1€</p>
              <input
                type="radio"
                name="SP"
                value="100"
                id="100SP"
                className="input-sp"
                onClick={(e) => setChoice(e.target.value)}
              />
            </label>
          </div>
          <div className="label-SP">
            <label htmlFor="200SP" className="label">
              <img src={coins} alt="coins" className="coins" />
              <p>200SP = 2€</p>
              <input
                type="radio"
                name="SP"
                value="200"
                id="200SP"
                className="input-sp"
                onClick={(e) => setChoice(e.target.value)}
              />
            </label>
          </div>
          <div className="label-SP">
            <label htmlFor="500SP" className="label">
              <img src={coins} alt="coins" className="coins" />
              <p>500SP = 5€</p>
              <input
                type="radio"
                name="SP"
                value="500"
                id="500SP"
                className="input-sp"
                onClick={(e) => setChoice(e.target.value)}
              />
            </label>
          </div>
          <div className="label-SP">
            <label htmlFor="1000SP" className="label">
              <img src={coins} alt="coins" className="coins" />
              <p>1000SP = 10€</p>
              <input
                type="radio"
                name="SP"
                value="1000"
                id="1000SP"
                className="input-sp"
                onClick={(e) => setChoice(e.target.value)}
              />
            </label>
          </div>
          <button type="button" className="btnSP" onClick={Valider}>
            Valider
          </button>
        </div>
      )}
      {changeNOK && (
        <div className="body">
          <p>Pas assez de SP</p>
          <button type="button" className="btnSP" onClick={backToChoice}>
            Retour
          </button>
        </div>
      )}
      {changeOK && (
        <div className="body">
          <p>Transaction validée !</p>
          <p>Montrer ce code barre en caisse.</p>
          {choice === '100' ? (
            <img src={bon1} alt="bon 1 euro" className="barcode" />
          ) : (
            ''
          )}
          {choice === '200' ? (
            <img src={bon2} alt="bon 2 euros" className="barcode" />
          ) : (
            ''
          )}
          {choice === '500' ? (
            <img src={bon5} alt="bon 5 euros" className="barcode" />
          ) : (
            ''
          )}
          {choice === '1000' ? (
            <img src={bon10} alt="bon 10 euros" className="barcode" />
          ) : (
            ''
          )}
          <p className="msgAlert">{msgAlert} </p>
          <button type="button" className="btnSP" onClick={backToHome}>
            Retour Home
          </button>
        </div>
      )}
    </div>
  );
}

export default ShopSPExchange;

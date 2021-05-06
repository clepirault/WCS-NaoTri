import './ShopSPExchange.css';
import coins from '../images/coins.png';
/* eslint-disable react/destructuring-assignment */
const Spoints = parseInt(localStorage.getItem('sp'), 10);
function Valider() {}
/* Vérifier quel bouton est activé + générer code barre (check googlefont code barre) et l'afficher quand on val + disparition boutons + un disable des boutons si pas encore le nb de SP suffisants ? */

function ShopSPExchange(props) {
  // eslint-disable-next-line react/prop-types
  const { name, address } = props.shop;
  return (
    <div>
      <p>Enseignes :</p>
      <p>{name}</p>
      <p>{address}</p>
      <p>SP disponibles : {Spoints}</p>
      <div>
        <div className="label-SP">
          <label htmlFor="100SP" className="label">
            <img src={coins} alt="coins" className="coins" />
            <p>100SP = 1€</p>
            <input
              type="radio"
              name="SP"
              value="100SP"
              id="100SP"
              className="input-sp"
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
              value="200SP"
              id="200SP"
              className="input-sp"
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
              value="500SP"
              id="500SP"
              className="input-sp"
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
              value="1000SP"
              id="1000SP"
              className="input-sp"
            />
          </label>
        </div>
      </div>
      <button type="button" onClick={Valider}>
        Valider
      </button>
    </div>
  );
}

export default ShopSPExchange;

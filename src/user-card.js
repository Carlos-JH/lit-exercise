import { LitElement, html, css } from 'lit-element';
import './fetch-tipycode'; //importamos nuestro componente fetch

export class UserCard extends LitElement {
  static styles = css`

    #container1 {
      background-color: #000000;
      width: 60%;
      padding: 16px;
      margin: 8px;
      text-align: center;
      color: #fff;
      border-radius: 10px;
    }
 

    img {
      max-width: 100%;
      height: auto;
      border-radius: 10px;
    }

  `;

  static get properties() {
    return {
      data: {type: Object},
      favorites : {type: Boolean},
      listFavorites : {type: Array}

    };
  }

  constructor() {
    super();
    this.data = {}
    this.favorites = false;
    this.listFavorites = [];
  }

  addFavorites() {
    const nombre = this.data.name;
    if (!this.listFavorites.includes(nombre)) {
      this.favorites = true;
      console.log("Se agregó a:", nombre);
      this.listFavorites.push(nombre);
    
    }
  }

  deleteFavorites() {
    const nombre = this.data.name;
    const index = this.listFavorites.indexOf(nombre);
    if (index > -1) {
      this.favorites = false;
      console.log("Se eliminó a:", nombre);
      this.listFavorites.splice(index, 1);

    }
  }



  render() {

    return html`
      <div id="container1" >
        <h2>${this.data.id}. ${this.data.name}</h2>

        <img src="${this.data.image}" } />

        <h3>¿Favorito? ${this.favorites ? 'Sí' : 'No'}</h3>
        ${this.favorites 
          ? html`<button @click="${() => this.deleteFavorites()}">Eliminar Fav</button>` 
          : html`<button @click="${() => this.addFavorites()}">Agregar Fav</button>`
        }
    
      </div>
      
       
       ${this.listFavorites.map(item =>
          html`<favorites-list .list=${item}></favorites-list>`
          )}
   
   
    `;
  }


}

customElements.define('user-card', UserCard);

import { LitElement, html, css } from 'lit-element';
//Este componente solo llama a la API y retorna datos por propiedas a otro componente "user-card"


export class FetchTipycode extends LitElement {

 static get styles() {
    return css`
    .container{
        display: flex; flex-wrap: wrap;
        justify-content: center;
    }
    `
 }

  static get properties() {
    return {
      data: { type: Array }
    };
  }

  constructor() {
    super();
    this.data = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchData();
  }

  async fetchData() {
    try {
      const resp = await fetch('https://rickandmortyapi.com/api/character');
      const data = await resp.json();
      this.data = data.results; // actualizamos la propiedad data con todos los datos de los personajes
      //al final del componente veremmos la estructura JSON de la API; y así vemos por qué "data.results"
    } catch (error) {
      console.error('FetchError:', error);
    }
    console.log(this.data);
  }

  render() {
    return html`
     <h2>Datos de API:</h2>
      <div class="container">
       
          ${this.data.map(item =>
             html`<user-card .data=${item}></user-card>`
             )}
      </div>
    `;
  }
}

customElements.define('fetch-tipycode', FetchTipycode);


//______________ESTRUCTURA DE API

// "results": [
//     {
//     "id": 1,
//     "name": "Rick Sanchez",
//     "status": "Alive",
//     "species": "Human",
//     "type": "",
//     "gender": "Male",
//     "origin": {
//     "name": "Earth (C-137)",
//     "url": "https://rickandmortyapi.com/api/location/1"
//     },
//     "location": {
//     "name": "Citadel of Ricks",
//     "url": "https://rickandmortyapi.com/api/location/3"
//     },
//     "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//     "episode": [],
//     "url": "https://rickandmortyapi.com/api/character/1",
//     "created": "2017-11-04T18:48:46.250Z"
//     },
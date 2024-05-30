import { LitElement, html, css } from 'lit-element';
import'./user-card'
export class FavoritesList extends LitElement {

static styles = css`
    .container2 {
      background-color: #45c5cc;
      width: 60%;
      padding: 16px;
      margin: 8px;
      text-align: center;
      color: #fff;
      border-radius: 10px;
    }
`;

    static get properties() {
        return {
            list : {type: Object}
        };
    }

    constructor(){
        super();
        this.list = {};
    }


    render() {
        console.log(this.list);
        return html`
        <div class="container2">
        <div>
        <h2>Favorito ♥</h2>   
            <h4>${this.list}</h4>
        </div>
          
        </div>
        `;
    }
}
customElements.define('favorites-list', FavoritesList);
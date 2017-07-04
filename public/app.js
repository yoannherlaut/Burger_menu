var Router      = ReactRouterDOM.BrowserRouter;
var Route       = ReactRouterDOM.Route;
var Link        = ReactRouterDOM.Link;


class Footer extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
        <nav className="bar bar-tab">
          <Link className="tab-item active" to="/">
            <span className="icon icon-home"></span>
            <span className="tab-label">Home</span>
          </Link>

          <Link className="tab-item" to="/Burger">
            <span className="icon icon-person"></span>
            <span className="tab-label">Burger</span>
          </Link>
        </nav>

    );
  }
}

class App extends React.Component {

  constructor() {
    super();
    this.test = this.test.bind(this);
    this.state = { compteur: 0 };
  }

  test(){
    var newquantity = this.state.compteur + 1
      this.setState({
      compteur: newquantity
    });
  }

  render() {

  var burgersList = [
    {image: 'https://lacapsule.academy/wks2/burger_1.png', price: '11€', name: 'Le New-yorker', desc:'Burger de boeuf limousin, cheddar, oignons rings, roquette, tomate, cornichon, sauce paprika'},
    {image: 'https://lacapsule.academy/wks2/burger_2.png', price: '12€', name: 'Le Amberger', desc:'Burger de boeuf limousin, oignons confits, salade, tomate, fourme d’Ambert et noix'},
    {image: 'https://lacapsule.academy/wks2/burger_3.png', price: '11€', name: 'Le Poulet', desc:'Burger de poulet, cheddar, avocat, tomate, oignons, sauce au citron vert'}
  ];

    return(
      <div>
        <Basket compteur={this.state.compteur}/>
        <BurgerList burgers={burgersList} testclick={this.test} title="Burger Shop" />
        <Footer/>
      </div>
    );
  }
}

class Basket extends React.Component {

  constructor() {
    super();
}

  render() {
    return(
      <header className="bar bar-nav">
      <h1 className="title"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> <span className="badge">{this.props.compteur}</span></h1>
      </header>
    );
  }
}

class Home extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(

      <div>

        <div className="content-padded">
           <img className="biere" src="http://25.media.tumblr.com/tumblr_mc8cbolrrd1resjnxo1_500.gif"/>
        </div>

        <Footer/>

      </div>
    );
  }
}


class BurgerList extends React.Component {

  constructor() {
    super();
  }

  render() {
    var burgersComponent = [];
    for(var i=0; i<this.props.burgers.length; i++) {
      burgersComponent.push(<Burger testclick={this.props.testclick} burger={this.props.burgers[i]} />);
    }
    return(
      <div className="content">
        <h6>{this.props.title}</h6>
        <ul className="table-view">
          {burgersComponent}
        </ul>
      </div>
    );
  }

}

class Burger extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = { quantity: 0 };
  }

  handleClick() {

    var newquantity = this.state.quantity + 1;
    this.setState({
      quantity: newquantity
    });
    this.props.testclick();
  }

  render() {
    return(
      <li onClick={this.handleClick} className="table-view-cell media">
        <img className="media-object pull-left" src={this.props.burger.image} />
        <div className="media-body">
        {this.props.burger.name} {this.props.burger.price}
      <p>{this.props.burger.desc}</p>
        </div>
        <span className="badge">{this.state.quantity}</span>
      </li>
    );
  }
}


ReactDOM.render(
  <Router>
    <div>
        <Route exactpath="/" component={Home}/>
        <Route path="/Burger" component={App}/>
    </div>
 </Router>
  ,
  document.getElementById('container')
);

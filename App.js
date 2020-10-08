const sampleBurger = {
  name: "Cheeseburger",
  price: 1488,
  description: "Burger with meat and cheese",
  image:
    "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Cheeseburger.jpg",
  status: true,
};

const formatPrice = (cents) => {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "EUR",
  });
};
const removeDuplicates = (arr) => {
  let p = {};
  arr.forEach((x) => {
    p[x] = (p[x] || 0) + 1;
  });
  return Object.keys(p).map((x) => {
    return { id: x, count: p[x] };
  });
};
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      burgers: [],
      order: [],
    };
    this.addBurger = this.addBurger.bind(this);
  }
  addBurger = (e) => {
    this.setState({ burgers: [...this.state.burgers, e] });
  };

  loadSample = () => {
    this.setState({ burgers: [...this.state.burgers, sampleBurger] });
  };

  addToOrder = (e) => {
    this.setState({ order: [...this.state.order, e.name] });
  };

  updateBurger = (e, u) => {
    const burger = this.state.burgers;

    burger[e] = u;

    this.setState({ burgers: [...this.state.burgers, burger] });
    this.setState({
      burgers: [
        ...this.state.burgers.filter((e) => {
          return !Array.isArray(e);
        }),
      ],
    });
  };
  deleteBurger = (e) => {
    const burger = this.state.burgers;
    burger.splice(e, 1);
    this.setState({ burgers: [...this.state.burgers, burger] });
    this.setState({
      burgers: [
        ...this.state.burgers.filter((e) => {
          return !Array.isArray(e);
        }),
      ],
    });
  };
  render() {
    const burgerlist = this.state.burgers.map((e, i) => {
      return (
        <Burger
          key={e}
          index={e}
          details={this.state.burgers[i]}
          addToOrder={this.addToOrder}
        />
      );
    });
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
          <ul>{burgerlist}</ul>
        </div>
        <Order {...this.state} />
        <Inventory
          addBurger={this.addBurger}
          loadSample={this.loadSample}
          burgers={this.state.burgers}
          updateBurger={this.updateBurger}
          deleteBurger={this.deleteBurger}
        />
      </div>
    );
  }
}

const Header = () => (
  <header className="top">
    <h1>Menu</h1>
  </header>
);

class AddBurger extends React.Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.priceRef = React.createRef();
    this.descriptionRef = React.createRef();
    this.imageRef = React.createRef();
    this.statusRef = React.createRef();
  }

  addBurger = (e) => {
    e.preventDefault();
    const burger = {
      name: this.nameRef.current.value,
      price: Number(this.priceRef.current.value),
      description: this.descriptionRef.current.value,
      image: this.imageRef.current.value,
      status: this.statusRef.current.value === "yes" ? true : false,
    };
    this.props.addBurger(burger);
    e.currentTarget.reset();
  };
  render() {
    return (
      <form className="burger-edit" onSubmit={this.addBurger}>
        <input name="name" type="text" ref={this.nameRef} placeholder="Name" />
        <input
          name="price"
          type="text"
          ref={this.priceRef}
          placeholder="Price"
        />
        <input
          name="description"
          type="text"
          ref={this.descriptionRef}
          placeholder="Description"
        />
        <input
          name="image"
          type="text"
          ref={this.imageRef}
          placeholder="Image"
        />
        <select name="status" ref={this.statusRef}>
          <option value="yes">Available</option>
          <option value="no">Unavailable</option>
        </select>
        <button type="submit">Add Burger </button>
      </form>
    );
  }
}

class EditBurger extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = (e) => {
    const editedBurger = {
      ...this.props.burgers,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    this.props.updateBurger(this.props.index, editedBurger);
  };
  render() {
    return (
      <div className="burger-edit">
        <input
          name="name"
          type="text"
          onChange={this.handleChange}
          value={this.props.burgers.name}
          readonly="readonly"
        />
        <input
          name="price"
          type="text"
          value={this.props.burgers.price}
          onChange={this.handleChange}
        />
        <input
          name="description"
          type="text"
          value={this.props.burgers.description}
          onChange={this.handleChange}
        />
        <input
          name="image"
          type="text"
          value={this.props.burgers.image}
          onChange={this.handleChange}
        />
        <select
          name="status"
          value={this.props.burgers.status ? "yes" : "no"}
          onChange={this.handleChange}
        >
          <option value="yes">Available</option>
          <option value="no">Unavailable</option>
        </select>
        <button onClick={() => this.props.deleteBurger(this.props.index)}>
          DELETE BURGER
        </button>
      </div>
    );
  }
}

class Inventory extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {" "}
        <h2>Stock</h2>
        {this.props.burgers.map((e, i) => {
          return (
            <EditBurger
              burgers={Object.values(this.props.burgers)[i]}
              updateBurger={this.props.updateBurger}
              key={i}
              index={i}
              deleteBurger={this.props.deleteBurger}
            />
          );
        })}
        <AddBurger addBurger={this.props.addBurger} />
        <button onClick={this.props.loadSample}>LOAD SAMPLE BURGER</button>
      </div>
    );
  }
}
class Order extends React.Component {
  render() {
    const orderIds = Object.values(this.props.order);
    const burgerprice = Object.values(this.props.burgers);
    let pricer = {};
    for (let a = 0; a < burgerprice.length; a++) {
      let b = burgerprice[a].name;
      for (let c = 0; c < orderIds.length; c++) {
        if (orderIds[c] === b) {
          pricer[b] = burgerprice[a].price;
          break;
        }
      }
    }

    let temp = 0;
    let total = removeDuplicates(orderIds).forEach((e) => {
      temp += pricer[e.id] * e.count;
    });
    let x = removeDuplicates(orderIds).map((e) => {
      return (
        <ul>
          <li class="prices">
            {e.count} {e.id}
            {e.count > 1 ? "s" : ""} {formatPrice(pricer[e.id] * e.count)}{" "}
          </li>
        </ul>
      );
    });
    return (
      <div className="order-wrap" id="orders">
        <h2>Your order</h2>
        {x}
        <div className={temp === 0 ? "hidden" : ""}>
          <b>Total: </b>
          {formatPrice(temp)}
        </div>
      </div>
    );
  }
}

class Burger extends React.Component {
  render() {
    const way = this.props.details;
    const isAvailiable = way.status ? true : false;
    return (
      <li className="menu-burger">
        <img src={way.image} />
        <h3 className="burger-name">
          {way.name}
          <span className="price">{formatPrice(way.price)}</span>
        </h3>
        <p>{way.description}</p>
        <button
          disabled={!isAvailiable}
          onClick={() => {
            this.props.addToOrder(this.props.index);
          }}
        >
          {isAvailiable ? "ADD TO CART" : "SOLD OUT"}
        </button>
      </li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

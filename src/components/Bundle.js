import { PureComponent } from "react";
export default class Bundle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mod: null
    };
  }

  UNSAFE_componentWillMount() {
    this.load(this.props);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }
  load(props) {
    this.setState({
      mod: null
    });

    props.load().then(mod => {
      this.setState({
        mod: mod.default ? mod.default : mod
      });
    });
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null;
  }
}

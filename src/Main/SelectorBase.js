import { Component } from 'react';
import ReactTooltip from 'react-tooltip';

class SelectorBase extends Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleDocumentClick);
    ReactTooltip.hide();
  }

  handleClick(event) {
    this.setState({ show: !this.state.show });
  }

  handleDocumentClick(event) {
    if (this.ref && !this.ref.contains(event.target)) {
      this.setState({ show: false });
    }
  }

  setRef(node) {
    this.ref = node;
  }
}

export default SelectorBase;

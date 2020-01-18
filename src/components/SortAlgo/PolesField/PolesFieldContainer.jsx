import PolesField from './PolesField'
import { connect } from 'react-redux';

let mapStateToProps= (state) => {
  return {
    poles: state.sortAlgo.poles
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

const PolesFieldContainer = connect(mapStateToProps, mapDispatchToProps)(PolesField)

export default PolesFieldContainer;
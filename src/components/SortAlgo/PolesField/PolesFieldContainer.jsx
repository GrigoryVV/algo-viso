import PolesField from './PolesField'
import { connect } from 'react-redux';

let mapStateToProps= (state) => {
  return {
    poles: state.sortAlgo.poles,
    redId: state.sortAlgo.redId,
    greenId: state.sortAlgo.greenId
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

const PolesFieldContainer = connect(mapStateToProps, mapDispatchToProps)(PolesField)

export default PolesFieldContainer;
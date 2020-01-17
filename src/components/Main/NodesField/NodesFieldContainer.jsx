import NodesField from './NodesField'
import { connect } from 'react-redux';

let mapStateToProps= (state) => {
  return {
    nodes: state.main.nodes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    
  };
}

const NodesFieldContainer = connect(mapStateToProps, mapDispatchToProps)(NodesField)

export default NodesFieldContainer;
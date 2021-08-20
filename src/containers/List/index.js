import { connect } from 'react-redux';
import List from 'src/components/List';

const mapStateToProps = (state) => ({
  list: state.seeds.list,
});

const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch({ type: 'GETTING_LIST' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);

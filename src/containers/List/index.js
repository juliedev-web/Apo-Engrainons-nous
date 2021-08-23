import { connect } from 'react-redux';
import List from 'src/components/List';

const mapStateToProps = (state) => ({
  list: state.seeds.listFiltered,
});

export default connect(mapStateToProps)(List);

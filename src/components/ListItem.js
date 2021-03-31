import React, {useEffect, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {Card} from './common/Card';
import * as actions from '../actions';

const ListItem = props => {
  const {id, title, description} = props.item;
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    LayoutAnimation.spring();
  });

  return (
    <TouchableOpacity onPress={() => dispatch(actions.selectLibrary(id))}>
      <View>
        <Card>
          <Text style={styles.title}>{title}</Text>
          {id === props.selectedLibraryId ? (
            <Text style={styles.textStyle}>{description}</Text>
          ) : null}
        </Card>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 15,
  },
  textStyle: {
    paddingLeft: 15,
  },
});

const mapStateToProps = state => {
  return {selectedLibraryId: state.selectedLibraryId};
};

export default connect(mapStateToProps, actions)(ListItem);

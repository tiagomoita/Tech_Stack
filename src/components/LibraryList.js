import React, {Component} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.libraries}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <ListItem item={item} />;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //borderColor: 'blue',
    //borderWidth: 3,
  },
});

const mapStateToProps = state => {
  return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);

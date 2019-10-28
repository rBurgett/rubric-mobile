import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Content, H1, Grid, Col, Row } from 'native-base';
import { routes, colors, prayers } from '../../constants';
import Container from '../shared/container';
import Button from '../shared/button';
import Icon from '../shared/icon';

const Home = ({ navigation }) => {
  return (
    <Container>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate(routes.SETTINGS)}><Icon style={styles.menuButtonIcon}>menu</Icon></TouchableOpacity>
      <StatusBar backgroundColor={colors.BROWN} barStyle="light-content" />
      <Grid style={styles.grid}>
        <Col>
          <Row style={styles.headerRow}>
            <Col>
              <Image style={styles.image} source={require('../../../images/rubric.church.png')} />
              <H1 style={styles.header}>Rubric.Church</H1>
            </Col>
          </Row>
          <Row style={styles.buttonsRow}>
            <Content>
              <Button onPress={() => navigation.navigate(routes.PRAYER, {prayer: prayers.MORNING_PRAYER})}>Morning Prayer</Button>
              <Button onPress={() => navigation.navigate(routes.DAILY_READING)}>Daily Reading</Button>
              <Button onPress={() => navigation.navigate(routes.PRAYER, {prayer: prayers.NOON_PRAYER})}>Noon Prayer</Button>
              <Button onPress={() => navigation.navigate(routes.PRAYER, {prayer: prayers.EARLY_EVENING_PRAYER})}>Early Evening Prayer</Button>
              <Button onPress={() => navigation.navigate(routes.PRAYER, {prayer: prayers.CLOSE_OF_DAY_PRAYER})}>Close of Day Prayer</Button>
            </Content>
          </Row>
        </Col>
      </Grid>
    </Container>
  );
};
Home.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    marginBottom: -20
  },
  header: {
    alignSelf: 'center',
    fontFamily: 'serif',
    color: colors.BROWN,
    marginBottom: 10
  },
  headerRow: {
    flex: -1
  },
  buttonsRow: {
    marginTop: 15
  },
  grid: {
    flex: 1
  },
  menuButton: {
    position: 'absolute',
    right: 15,
    top: 3,
    flex: -1
  },
  menuButtonIcon: {
    color: colors.BROWN,
    fontSize: 40
  }
});

export default Home;

import {Dimensions, StyleSheet} from 'react-native';
import Color, {COLOURS} from '../../database/Database';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  //container
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOURS.white,
    position: 'relative',
  },
  //renderProduct
  renderProductWrap: {
    width: width,
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderProductImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  //scrollView
  containerScrollView: {
    width: '100%',
    backgroundColor: COLOURS.backgroundLight,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  iconBackWrap: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingLeft: 16,
  },
  iconBack: {
    fontSize: 18,
    color: COLOURS.backgroundDark,
    padding: 12,
    backgroundColor: COLOURS.white,
    borderRadius: 10,
  },
  productImageBarWrap: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 32,
  },

  productImageDot: {
    width: '16%',
    height: 2.4,
    backgroundColor: COLOURS.black,
    marginHorizontal: 4,
    borderRadius: 100,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginVertical: 4,
    color: COLOURS.black,
    maxWidth: '84%',
  },
  productLink: {
    fontSize: 24,
    color: Color.Green,
    backgroundColor: Color.Green + 10,
    padding: 8,
    borderRadius: 100,
  },
  productDescription: {
    fontSize: 12,
    color: COLOURS.black,
    fontWeight: '400',
    letterSpacing: 1,
    opacity: 0.5,
    lineHeight: 20,
    maxWidth: '85%',
    maxHeight: 44,
    marginBottom: 18,
  },
  shoppingCart: {
    fontSize: 18,
    color: Color.Green,
    marginRight: 6,
  },
  shoppingText: {
    fontSize: 12,
    color: COLOURS.black,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 14,
  },
  locationPin: {
    fontSize: 16,
    color: Color.YellowDisable,
  },
  addressText: {
    marginLeft: 10,
  },
  viewDirection: {
    fontSize: 22,
    color: COLOURS.backgroundDark,
  },
  priceContainer: {
    paddingHorizontal: 16,
  },
  priceText: {
    fontSize: 18,
    fontWeight: '500',
    maxWidth: '85%',
    color: COLOURS.black,
    marginBottom: 4,
  },
  taxText: {
    marginBottom: 8,
  },
  //productBar
  productBarAni: {
    width: '16%',
    height: 2.4,
    backgroundColor: COLOURS.black,
    marginHorizontal: 4,
    borderRadius: 100,
  },
  //shopping icon
  spIconWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 14,
  },
  spIcon: {
    fontSize: 18,
    color: Color.Green,
    marginRight: 6,
  },
  spText: {
    fontSize: 12,
    color: COLOURS.black,
  },
  //wrap title and btn link
  titleAndBtnLinkWrap: {
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  //pin
  pinContainerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 14,
    borderBottomColor: COLOURS.backgroundLight,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  pinSubContainer: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
  },
  pinIconWrap: {
    color: Color.Yellow,
    backgroundColor: COLOURS.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 100,
    marginRight: 10,
  },
  pinIcon: {
    fontSize: 16,
    color: Color.Red,
  },
  IconRight: {
    fontSize: 22,
    color: COLOURS.backgroundDark,
  },

  //add to cart button
  atcBtnWrap: {
    marginVertical: 10,
    height: '8%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  atcBtnTouch: {
    width: '86%',
    height: '90%',
    backgroundColor: Color.Green,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  atcBtn: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 1,
    color: COLOURS.white,
    textTransform: 'uppercase',
  },
});

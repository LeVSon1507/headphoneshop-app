import {StyleSheet} from 'react-native';
import Color, {COLOURS} from '../../database/Database';

export const styles = StyleSheet.create({
  //renderProducts
  renderProductsContainer: {
    width: '100%',
    height: 100,
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  renderProductsImgWrap: {
    width: '30%',
    height: 100,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOURS.backgroundLight,
    borderRadius: 10,
    marginRight: 22,
  },
  renderProductsImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  productDetailsWrap: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
  },
  groupIconWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  groupIconMinusAndPlus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconMinusWrap: {
    borderRadius: 100,
    marginRight: 20,
    padding: 4,
    borderWidth: 1,
    borderColor: COLOURS.backgroundMedium,
    opacity: 0.5,
  },
  IconMinusAndPlus: {
    fontSize: 16,
    color: COLOURS.backgroundDark,
  },
  IconPlusWrap: {
    borderRadius: 100,
    marginLeft: 20,
    padding: 4,
    borderWidth: 1,
    borderColor: COLOURS.backgroundMedium,
    opacity: 0.5,
  },
  IconDel: {
    fontSize: 16,
    color: COLOURS.backgroundDark,
    backgroundColor: COLOURS.backgroundLight,
    padding: 8,
    borderRadius: 100,
  },
  //
  productName: {
    fontSize: 14,
    maxWidth: '100%',
    color: COLOURS.black,
    fontWeight: '600',
    letterSpacing: 1,
  },
  productPriceWrap: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.6,
  },
  productPriceText: {
    fontSize: 14,
    fontWeight: '400',
    maxWidth: '85%',
    marginRight: 4,
  },
  //================//

  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOURS.white,
    position: 'relative',
  },
  scvWrap: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 16,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconLeft: {
    fontSize: 18,
    color: COLOURS.backgroundDark,
    padding: 12,
    backgroundColor: COLOURS.backgroundLight,
    borderRadius: 12,
  },
  orderDtText: {
    fontSize: 14,
    color: COLOURS.black,
    fontWeight: '400',
  },
  titleHeaderText: {
    fontSize: 20,
    color: COLOURS.black,
    fontWeight: '500',
    letterSpacing: 1,
    paddingTop: 20,
    paddingLeft: 16,
    marginBottom: 10,
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deliveryWrap: {
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  titleText: {
    fontSize: 16,
    color: COLOURS.black,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 20,
  },
  deliIconWrap: {
    color: Color.Green,
    backgroundColor: COLOURS.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 10,
    marginRight: 18,
  },
  truckIcon: {
    fontSize: 18,
    color: Color.Green,
  },
  iconRight: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
  },
  addText: {
    fontSize: 14,
    color: COLOURS.black,
    fontWeight: '500',
  },
  addSubText: {
    fontSize: 12,
    color: COLOURS.black,
    fontWeight: '400',
    lineHeight: 20,
    opacity: 0.5,
  },
  visaText: {
    fontSize: 10,
    fontWeight: '900',
    color: Color.Green,
    letterSpacing: 1,
  },
});

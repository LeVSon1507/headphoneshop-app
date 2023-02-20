import {StyleSheet} from 'react-native';
import Color, {COLOURS} from '../../database/Database';

export const styles = StyleSheet.create({
  //product-card
  productContainer: {
    width: '48%',
    marginVertical: 14,
  },
  productImageContainer: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    backgroundColor: Color.Green,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  offContainer: {
    position: 'absolute',
    width: '20%',
    height: '24%',
    backgroundColor: COLOURS.green,
    top: 0,
    left: 0,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offText: {
    fontSize: 12,
    color: COLOURS.white,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  productImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 12,
    color: COLOURS.black,
    fontWeight: '600',
    marginBottom: 2,
  },
  availabilityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  availabilityIcon: {
    fontSize: 12,
    marginRight: 6,
  },
  availableText: {
    fontSize: 12,
    color: COLOURS.green,
  },
  unavailableText: {
    fontSize: 12,
    color: COLOURS.red,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '600',
  },

  //RETURN

  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Color.LightGray,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  iconBag: {
    fontSize: 18,
    color: Color.Green,
    padding: 12,
    borderRadius: 10,
    backgroundColor: COLOURS.backgroundLight,
  },
  iconCart: {
    fontSize: 18,
    color: Color.Green,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOURS.backgroundLight,
  },
  titleAndDesWrap: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: Color.Green,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 10,
    borderColor: Color.BackgroundItemDropdown,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  description: {
    fontSize: 14,
    color: COLOURS.black,
    fontWeight: '400',
    letterSpacing: 1,
    lineHeight: 24,
    borderColor: Color.BackgroundItemDropdown,
    borderBottomWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  productHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productType: {
    fontSize: 18,
    color: COLOURS.black,
    fontWeight: '500',
    letterSpacing: 1,
  },
  productCount: {
    fontSize: 14,
    color: COLOURS.black,
    fontWeight: '400',
    opacity: 0.5,
    marginLeft: 10,
  },
  productTitleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAll: {
    fontSize: 14,
    color: Color.BGKeyBoard,
    fontWeight: '400',
  },
  productContainerWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

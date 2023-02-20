import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Color, {COLOURS, Items} from '../../database/Database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './MyCartStyle';

const MyCart = ({navigation}) => {
  const [product, setProduct] = useState();
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from local DB by ID
  const getDataFromDB = async () => {
    let items = await AsyncStorage.getItem('cartItems');
    items = JSON.parse(items);
    let productData = [];
    if (items) {
      Items.forEach(data => {
        if (items.includes(data.id)) {
          productData.push(data);
          return;
        }
      });
      setProduct(productData);
      getTotal(productData);
    } else {
      setProduct(false);
      getTotal(false);
    }
  };

  //get total price of all items in the cart
  const getTotal = productData => {
    let total = 0;
    for (let index = 0; index < productData.length; index++) {
      let productPrice = productData[index].productPrice;
      total = total + productPrice;
    }
    setTotal(total);
  };

  //remove data from Cart

  const removeItemFromCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      for (let index = 0; index < array.length; index++) {
        if (array[index] === id) {
          array.splice(index, 1);
        }

        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        getDataFromDB();
      }
    }
  };

  //checkout

  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem('cartItems');
    } catch (error) {
      return error;
    }

    ToastAndroid.show('Items will be Deliverd SOON!', ToastAndroid.SHORT);

    navigation.navigate('Home');
  };

  const renderProducts = (data, index) => {
    return (
      <TouchableOpacity
        key={`${data.key}-${index}`}
        onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}
        style={styles.renderProductsContainer}>
        <View style={styles.renderProductsImgWrap}>
          <Image source={data.productImage} style={styles.renderProductsImg} />
        </View>
        <View style={styles.productDetailsWrap}>
          <View style={{}}>
            <Text style={styles.productName}>{data.productName}</Text>
            <View style={styles.productPriceWrap}>
              <Text style={styles.productPriceText}>
                &#36;{data.productPrice}
              </Text>
              <Text>
                (~&#36;
                {data.productPrice + data.productPrice / 20})
              </Text>
            </View>
          </View>
          <View style={styles.groupIconWrap}>
            <View style={styles.groupIconMinusAndPlus}>
              <View style={styles.IconMinusWrap}>
                <MaterialCommunityIcons
                  name="minus"
                  style={styles.IconMinusAndPlus}
                />
              </View>
              <Text>1</Text>
              <View style={styles.IconPlusWrap}>
                <MaterialCommunityIcons
                  name="plus"
                  style={styles.IconMinusAndPlus}
                />
              </View>
            </View>
            <TouchableOpacity onPress={() => removeItemFromCart(data.id)}>
              <MaterialCommunityIcons
                name="delete-outline"
                style={styles.IconDel}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.scvWrap}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-left"
              style={styles.iconLeft}
            />
          </TouchableOpacity>
          <Text style={styles.orderDtText}>Order Details</Text>
        </View>
        <Text style={styles.titleHeaderText}>My Cart</Text>
        <View style={{paddingHorizontal: 16}}>
          {product ? product.map(renderProducts) : null}
        </View>
        <View>
          <View style={styles.deliveryWrap}>
            <Text style={styles.titleText}>Delivery Location</Text>
            <View style={styles.deliveryContainer}>
              <View style={styles.iconRight}>
                <View style={styles.deliIconWrap}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    style={styles.truckIcon}
                  />
                </View>
                <View>
                  <Text style={styles.addText}>2 Nguyen Van Linh</Text>
                  <Text style={styles.addSubText}>55000, Da Nang</Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{fontSize: 22, color: COLOURS.black}}
              />
            </View>
          </View>
          <View style={styles.deliveryWrap}>
            <Text style={styles.titleText}>Payment Method</Text>
            <View style={styles.deliveryContainer}>
              <View style={styles.iconRight}>
                <View style={styles.deliIconWrap}>
                  <Text style={styles.visaText}>VISA</Text>
                </View>
                <View>
                  <Text style={styles.addText}>Visa Classic</Text>
                  <Text style={styles.addSubText}>****-9999-6969</Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{fontSize: 22, color: COLOURS.black}}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 80,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Order Info
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: COLOURS.black,
                  opacity: 0.8,
                }}>
                &#36;{total}.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
                Shipping Tax
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: COLOURS.black,
                  opacity: 0.8,
                }}>
                &#36;{total / 20}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: COLOURS.black,
                }}>
                &#36;{total + total / 20}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 10,
          height: '8%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => (total !== 0 ? checkOut() : null)}
          style={{
            width: '86%',
            height: '90%',
            backgroundColor: Color.Green,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 1,
              color: COLOURS.white,
              textTransform: 'uppercase',
            }}>
            CHECKOUT (&#36;{total + total / 20} )
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyCart;

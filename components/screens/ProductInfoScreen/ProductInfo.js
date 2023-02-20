import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
} from 'react-native';
import {COLOURS, Items} from '../../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './ProductInfoStyle';

const ProductInfo = ({route, navigation}) => {
  const {productID} = route.params;

  const [product, setProduct] = useState({});

  const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get product data by productID

  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id === productID) {
        await setProduct(Items[index]);
        return;
      }
    }
  };

  //add to cart

  const addToCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);

      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Home');
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Home');
      } catch (error) {
        return error;
      }
    }
  };

  //product horizontal scroll product card
  const renderProduct = ({item, index}) => {
    return (
      <View style={styles.renderProductWrap}>
        <Image source={item} style={styles.renderProductImg} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={COLOURS.backgroundLight}
        barStyle="dark-content"
      />
      <ScrollView>
        <View style={styles.containerScrollView}>
          <View style={styles.iconBackWrap}>
            <TouchableOpacity onPress={() => navigation.goBack('Home')}>
              <Entypo name="chevron-left" style={styles.iconBack} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={product.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
          />
          <View style={styles.productImageBarWrap}>
            {product.productImageList
              ? product.productImageList.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: 'clamp',
                  });
                  return (
                    <Animated.View
                      key={index}
                      style={(styles.productBarAni, [{opacity: opacity}])}
                    />
                  );
                })
              : null}
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 6,
          }}>
          <View style={styles.spIconWrap}>
            <Entypo name="shopping-cart" style={styles.spIcon} />
            <Text style={styles.spText}>Shopping</Text>
          </View>
          <View style={styles.titleAndBtnLinkWrap}>
            <Text style={styles.productTitle}>{product.productName}</Text>
            <Ionicons name="link-outline" style={styles.productLink} />
          </View>
          <Text style={styles.productDescription}>{product.description}</Text>
          <View style={styles.pinContainerWrap}>
            <View style={styles.pinSubContainer}>
              <View style={styles.pinIconWrap}>
                <Entypo name="location-pin" style={styles.pinIcon} />
              </View>
              <Text>01 Nguyen Van Linh,{'\n'}Da Nang, Viet Nam</Text>
            </View>
            <Entypo name="chevron-right" style={styles.IconRight} />
          </View>
          <View
            style={{
              paddingHorizontal: 16,
            }}>
            <Text style={styles.priceText}>{product.productPrice} &#36;</Text>
            <Text>
              Tax Rate 2%~ {product.productPrice / 20} &#36; (
              {product.productPrice + product.productPrice / 20} &#36;)
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.atcBtnWrap}>
        <TouchableOpacity
          onPress={() => (product.isAvailable ? addToCart(product.id) : null)}
          style={styles.atcBtnTouch}>
          <Text style={styles.atcBtn}>
            {product.isAvailable ? 'Add to cart' : 'Not Avialable'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductInfo;

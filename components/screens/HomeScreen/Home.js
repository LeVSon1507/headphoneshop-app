import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLOURS, Items} from '../../database/Database';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './HomeStyle';

const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from DB
  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category === 'product') {
        productList.push(Items[index]);
      } else if (Items[index].category === 'accessory') {
        accessoryList.push(Items[index]);
      }
    }
    setProducts(productList);
    setAccessory(accessoryList);
  };

  //create an product reusable card

  const ProductCard = ({data}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}
        style={styles.productContainer}>
        <View style={styles.productImageContainer}>
          {data.isOff ? (
            <View style={styles.offContainer}>
              <Text style={styles.offText}>{data.offPercentage}%</Text>
            </View>
          ) : null}
          <Image source={data.productImage} style={styles.productImage} />
        </View>
        <Text style={styles.productName}>{data.productName}</Text>
        {data.category === 'accessory' ? (
          <View style={styles.availabilityContainer}>
            <FontAwesome
              name="circle"
              style={[
                styles.availabilityIcon,
                data.isAvailable
                  ? {color: COLOURS.green}
                  : {color: COLOURS.red},
              ]}
            />
            <Text
              style={
                data.isAvailable ? styles.availableText : styles.unavailableText
              }>
              {data.isAvailable ? 'Available' : 'Unavailable'}
            </Text>
          </View>
        ) : null}
        <Text style={styles.productPrice}>&#36; {data.productPrice}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo name="shopping-bag" style={styles.iconBag} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
            <MaterialCommunityIcons name="cart" style={styles.iconCart} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleAndDesWrap}>
          <Text style={styles.title}>LVS Headphone Shop</Text>
        </View>
        <View style={styles.titleAndDesWrap}>
          <Text style={styles.description}>
            My store is selling products about headphones
          </Text>
        </View>
        <View
          style={{
            padding: 16,
          }}>
          <View style={styles.productHeader}>
            <View style={styles.productTitleWrap}>
              <Text style={styles.productType}>Products</Text>
              <Text style={styles.productCount}>41</Text>
            </View>
            <Text style={styles.seeAll}>SeeAll</Text>
          </View>
          <View style={styles.productContainerWrap}>
            {products.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>

        <View
          style={{
            padding: 16,
          }}>
          <View style={styles.productHeader}>
            <View style={styles.productTitleWrap}>
              <Text style={styles.productType}>Accessories</Text>
              <Text style={styles.productCount}>78</Text>
            </View>
            <Text style={styles.seeAll}>SeeAll</Text>
          </View>
          <View style={styles.productContainerWrap}>
            {accessory.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

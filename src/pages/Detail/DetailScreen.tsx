import React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {StyleSheet, Dimensions} from 'react-native';
import {Product} from '../../api/Product/product';
import useFetch from '../../hooks/useFetch/useFetch';
import {Constants} from '../../constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';

type DetailProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen = ({navigation, route}: DetailProps) => {
  const id = route.params.id;
  const [data, loading, error] = useFetch(`${Constants.BASE_URL}/${id}`);

  const isProductDto = (data: BaseResponse | null): data is Product => {
    return (
      data != null &&
      data &&
      typeof data === 'object' &&
      'title' in data &&
      'description' in data &&
      'price' in data
    );
  };

  if (error != null) {
    return <Text>{error.message}</Text>;
  }

  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <>
      {isProductDto(data) ? (
        <View style={styles.container}>
          <Image style={styles.image} source={{uri: data.image}} />
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.desc}>{data.description}</Text>
          <Text style={styles.price}>{data.price}</Text>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {},
  image: {
    height: deviceSize.height * (1 / 3),
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default DetailScreen;

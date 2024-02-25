import {SafeAreaView, FlatList, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {Product} from '../../api/Product/product';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import {Constants} from '../../constants';
import {StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';

type ProductProps = NativeStackScreenProps<RootStackParamList, 'Product'>;

const ProductScreen = ({navigation}: ProductProps) => {
  const [data, loading, error] = useFetch(Constants.BASE_URL);

  const renderItem = ({item}: {item: Product}) => (
    <ProductCard
      onPress={id => navigation.navigate('Detail', {id: id})}
      product={item}
    />
  );

  if (error != null) {
    return <Text>{error.message}</Text>;
  }

  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <SafeAreaView>
      {Array.isArray(data) ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ProductScreen;

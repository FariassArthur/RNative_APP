import React from "react";

//native
import { Image, Text, View } from "react-native";

//expo
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Feather } from "@expo/vector-icons";

//utils
import { PRODUCTS } from "@/src/utils/data/products";
import { formatCurrency } from "@/src/utils/functions/format-currenct";

//store
import { useCartStore } from "@/src/stores/card-store";

//componets
import { Button } from "@/src/components/button";
import LinkButton from "@/src/components/link-button";

type Props = {};

const Product = (props: Props) => {
  const { id } = useLocalSearchParams();
  const cartStore = useCartStore();
  const navigation = useNavigation()

  const product = PRODUCTS.filter((item) => item.id === id)[0];

  const handleAddToCart = () => {
    cartStore.add(product)
    navigation.goBack()
  };

  return (
    <View className="flex-1">
      <Image
        source={product.cover}
        className="w-full h-52"
        resizeMode="cover"
      />

      <View className="p-5 mt-8 flex-1">
        <Text className="text-lime-400 text-2xl font-heading my-2">
          {formatCurrency(product.price)}
        </Text>

        <Text className="text-slate-400 font-body text-base leading-6 mb-6">
          {product.description}
        </Text>

        {product.ingredients.map((i) => (
          <Text
            key={i}
            className="text-slate-400 font-body text-base leading-6"
          >
            {"\u2022"} {i}
          </Text>
        ))}
      </View>

      <View className="p-5 pb-8 gap-5">
        <Button onPress={handleAddToCart}>
          <Button.Icon>
            <Feather name="plus-circle" size={20} />
          </Button.Icon>
          <Button.Text>Adicionar ao pedido</Button.Text>
        </Button>

        <LinkButton title="Voltar ao cardápio" href="/" />
      </View>
    </View>
  );
};

export default Product;

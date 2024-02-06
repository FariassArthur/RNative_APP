import { View, Text, FlatList } from "react-native";

//React
import { useState } from "react";

//utils
import { CATEGORIES } from "../utils/data/products";

//components
import { Header } from "../components/header";
import { CategoryButton } from "../components/category-button";

export default function Home() {

  const [category, setCategory] = useState<string>(CATEGORIES[0]);

  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory)
  } 
  
  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQTY={2} />
      
      <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item}
      renderItem={({item}) => (
        <CategoryButton title={item} isSelected={item === category} onPress={() => handleCategorySelect(item)} />
      )}
      horizontal
      className="max-h-10 mt-5"
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
       />
    </View>
  );
}

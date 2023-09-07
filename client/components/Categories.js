import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { categories } from '../constants';

export default function Categories() {
  const [active, setActive] = useState(null);
  return (
    <View className="mt-4 ">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-hidden"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category, index) => {
          let isActive = category.id == active;
          let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
          let textClass = isActive
            ? 'font-semibold text-gray-800'
            : 'text-gray-500';
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setActive(category.id)}
                className={"p-1 shadow rounded-full bg-gray-200"+ btnClass}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={category.image}
                />
                <Text className={"text-sm "+ textClass}>{category.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

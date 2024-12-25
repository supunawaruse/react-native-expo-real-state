import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useUser } from '@clerk/clerk-expo'
import icons from '@/constants/icons'
import images from '@/constants/images'
import Search from '@/components/search'
import { Card, FeaturedCard } from '@/components/cards'
import Filters from '@/components/filters'

const Home = () => {
    const { user } = useUser()
    return (
        <SafeAreaView className="h-full bg-white">
            <FlatList
                data={[1, 2]}
                renderItem={() => <Card />}
                keyExtractor={(item) => item.toString()}
                numColumns={2}
                contentContainerClassName="pb-32"
                columnWrapperClassName="flex gap-5 px-5"
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View className="px-5">
                        <View className="flex flex-row items-center justify-between mt-5">
                            <View className="flex flex-row">
                                <Image
                                    source={user?.hasImage ? { uri: user?.imageUrl } : images.avatar}
                                    className="size-12 rounded-full"
                                />

                                <View className="flex flex-col items-start ml-2 justify-center">
                                    <Text className="text-xs font-rubik text-black-100">
                                        Good Morning
                                    </Text>
                                    <Text className="text-base font-rubik-medium text-black-300">
                                        {user?.fullName}
                                    </Text>
                                </View>
                            </View>
                            <Image source={icons.bell} className="size-6" />
                        </View>

                        <Search />

                        <View className="my-5">
                            <View className="flex flex-row items-center justify-between">
                                <Text className="text-xl font-rubik-bold text-black-300">
                                    Featured
                                </Text>
                                <TouchableOpacity>
                                    <Text className="text-base font-rubik-bold text-primary-300">
                                        See all
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={[1, 2, 3, 4]}
                                renderItem={() => (<FeaturedCard />)}
                                keyExtractor={(item) => item.toString()}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerClassName="flex gap-5 mt-5"
                            />
                        </View>

                        <View className="mt-5">
                            <View className="flex flex-row items-center justify-between">
                                <Text className="text-xl font-rubik-bold text-black-300">
                                    Our Recommendation
                                </Text>
                                <TouchableOpacity>
                                    <Text className="text-base font-rubik-bold text-primary-300">
                                        See all
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <Filters />
                        </View>
                    </View>
                }
            />

        </SafeAreaView>
    )
}

export default Home

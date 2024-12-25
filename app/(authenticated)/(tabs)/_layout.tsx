import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#0061FF' }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={32} color={color} />,
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ color }) => <Ionicons name="search-outline" size={32} color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={32} color={color} />,
                }}
            />
        </Tabs>
    )
}

export default TabsLayout
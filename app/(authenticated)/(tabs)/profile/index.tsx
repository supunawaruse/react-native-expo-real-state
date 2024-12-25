import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'

const Profile = () => {
    const { signOut } = useAuth();
    return (
        <View>
            <TouchableOpacity onPress={() => signOut()}>
                <Text>SignOut</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile

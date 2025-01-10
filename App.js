import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function App() {
    const [schedule, setSchedule] = useState([]);
    const [shows, setShows] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/admin/schedules').then(res => setSchedule(res.data));
        axios.get('http://localhost:3000/admin/shows').then(res => setShows(res.data));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>MBR Radio</Text>
            <Text style={styles.sectionTitle}>Live Schedule</Text>
            <FlatList
                data={schedule}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <Text>{item.title}: {item.time}</Text>}
            />
            <Text style={styles.sectionTitle}>Past Shows</Text>
            <FlatList
                data={shows}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <Text>{item.title}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
    header: { fontSize: 24, textAlign: 'center', marginVertical: 10 },
    sectionTitle: { fontSize: 18, marginTop: 20 },
});
<<<<<<< HEAD
=======
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import DonateScreen from './screens/DonateScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Schedule" component={ScheduleScreen} />
                <Stack.Screen name="Donate" component={DonateScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
>>>>>>> 56f7a26 (Condensed files into a single repository)

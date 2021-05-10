/*import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Souvenir = () => {
    return (
        <View>
            <Text>Souvenir</Text>
        </View>
    )
}

export default Souvenir

const styles = StyleSheet.create({})
*/
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Header, TextInput, Gap } from '../../components'

const Souvenir = () => {
    return (
        <View style={styles.page}>
            <Header title="Souvenir" />
            <View style={styles.contentWrapper}>
                
                <Gap height={12} />
                <Button title="Angela Souvenir" />
                <Gap height={12} />
                <Button title="Lily's Souvenir" />
            </View>
        </View>
    )
}

export default Souvenir;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    contentWrapper: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 30,
        paddingTop: 38,
        marginTop: 2,
        borderWidth: 1,
        borderColor: '#FFCCE1',
    },
})
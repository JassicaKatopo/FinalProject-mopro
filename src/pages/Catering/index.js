/*import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
    return (
        <View>
            <Text>Catering</Text>
        </View>
    )
}

export default index

const styles = StyleSheet.create({})
*/
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Header, TextInput, Gap } from '../../components'

const Catering = () => {
    return (
        <View style={styles.page}>
            <Header title="Catering" />
            <View style={styles.contentWrapper}>
                
                <Gap height={12} />
                <Button title="Puspa Catering" />
                <Gap height={12} />
                <Button title="ManadoTop Catering" />
            </View>
        </View>
    )
}

export default Catering;

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
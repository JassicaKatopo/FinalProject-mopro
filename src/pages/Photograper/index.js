/*import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Photograper = () => {
    return (
        <View>
            <Text>Photograper</Text>
        </View>
    )
}

export default Photograper

const styles = StyleSheet.create({})
*/
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Header, TextInput, Gap } from '../../components'

const Photograper = () => {
    return (
        <View style={styles.page}>
            <Header title="Photograper" />
            <View style={styles.contentWrapper}>
                
                <Gap height={12} />
                <Button title="The Uppermost Photography" />
                <Gap height={12} />
                <Button title="Antheia Photography" />
            </View>
        </View>
    )
}

export default Photograper;

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
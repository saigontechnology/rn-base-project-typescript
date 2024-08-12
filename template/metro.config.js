import {getDefaultConfig, mergeConfig} from '@react-native/metro-config'

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {}

module.exports = mergeConfig(getDefaultConfig(__dirname), config)

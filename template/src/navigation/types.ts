import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import { StackScreenProps } from "@react-navigation/stack"

export interface INavigationParams {
    params?: INavigationOnlyParams | INavigationScreenAndParams
}

export type INavigationOnlyParams = object
export type INavigationScreenAndParams = {
    screen?: string
    params?: INavigationOnlyParams | INavigationScreenAndParams
}

export type HomeStackParamList = {
    HomeScreen: undefined
}

export type AuthStackParamList = {
    LoginScreen: undefined
    SignUpScreen: undefined
}

export type AppStackParamList = AuthStackParamList & HomeStackParamList

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<AppStackParamList, T>;

export type HomeScreenProps<T extends keyof HomeStackParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<HomeStackParamList, T>,
        AppStackScreenProps<keyof AppStackParamList>
    >;

export type AuthScreenProps<T extends keyof AuthStackParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<AuthStackParamList, T>,
        AppStackScreenProps<keyof AppStackParamList>
    >;

export type IItemTabBar = {
    route: string;
    title: string
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends AppStackParamList { }
    }
} 
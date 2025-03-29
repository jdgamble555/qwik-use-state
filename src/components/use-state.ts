import {
    createContextId,
    type Signal,
    useContext,
    useContextProvider,
    useSignal
} from "@builder.io/qwik";

const useSharedContext = <T>(name: string) =>
    createContextId<T>('io.builder.qwik.' + name);

const useGetShared = <T extends object>(name: string) =>
    useContext<T, null>(useSharedContext(name), null);

const useCreateShared = <T extends object>(name: string, content: T) =>
    useContextProvider<T>(useSharedContext(name), content);


export const useState = <T>(
    key: string,
    init?: () => T,
) => {

    const shared = useGetShared<Signal<T>>(key);
    if (shared) {
        return shared;
    }

    if (!init) {
        throw new Error('You must initialize the state at the parent component!');
    }

    const initialValue = init();
    const state = useSignal(initialValue);
    useCreateShared(key, state);
    return state;
};
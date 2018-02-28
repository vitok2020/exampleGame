export interface Cloneable<T> {
    clone<K extends T>(cloneFromObj?: K):T
}
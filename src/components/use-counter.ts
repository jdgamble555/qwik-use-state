import { useState } from "./use-state";

export const useCounter = () => {
    return useState('counter', () => 1);
};
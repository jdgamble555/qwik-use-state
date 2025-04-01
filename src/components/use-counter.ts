import { useState } from "./use-state";

export const useCounter = () => useState('counter', () => 1);
'use server'

import { createAI } from 'ai/rsc'

export type AIState = Array<{
    id?: number;
    name?: 'get_info';
    role?: 'user' | 'assistant' | 'system';
    content: string;
}>

export type UIState = Array<{}>

export const AI = createAI({
    initialAIState: [],
    initialUIState: [],
    actions: {}
})
'use server'

import { createAI } from 'ai/rsc'
import type { ToolInvocation } from 'ai'

import { ReactNode } from 'react';

export type AIState = Array<{
    id?: number;
    name?: 'get_info';
    role?: 'user' | 'assistant' | 'system';
    content: string;
}>

export type UIState = Array<{
    id: number;
    role: 'user' | 'assistant';
    display: ReactNode;
    toolInvocations?: ToolInvocation[];
}>

export const AI = createAI({
    initialAIState: [],
    initialUIState: [],
    actions: {}
})
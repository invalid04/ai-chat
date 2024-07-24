'use server'

import { createAI } from 'ai/rsc'
import type { ToolInvocation } from 'ai'

import { ReactNode } from 'react';

const content = `\
 you are a medical bot and you can answer a users questions about medical information.
 
 Messages inside [] means that it's a UI element or a user event. for example:
 - "[Convert this unit to that unit] means that the interface of the conversion is shown to the user"

 When the user asks for information, display the answer with at least one link backing up your answer.
`

export const sendMessage = async () => {}

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
    initialAIState: [] as AIState,
    initialUIState: [] as UIState,
    actions: {
        sendMessage,
    }
})
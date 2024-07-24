'use client'

import {useAtBottom} from '@/lib/use-at-bottom'
import {useInView} from 'react-intersection-observer'

export function ChatScrollAnchor() {
    const isAtBottom = useAtBottom()

    return null
}
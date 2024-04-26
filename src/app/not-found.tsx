'use client';

import { redirect } from 'next/navigation'

export default function NotFound() {
    const not = true
    if (not) {
        redirect('/')
    }
}

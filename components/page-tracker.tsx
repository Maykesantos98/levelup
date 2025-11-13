"use client"

import { usePageTracking } from "@/lib/hooks/use-analytics"

export function PageTracker() {
  usePageTracking()
  return null
}

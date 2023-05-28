"use client"

import { useSession } from "next-auth/react"

export default function UserInfo() {
  const session = useSession()

  if (session.status !== "authenticated") return <></>

  return <pre>{JSON.stringify(session, null, 2)}</pre>
}

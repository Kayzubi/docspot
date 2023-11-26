import React, { ReactNode, FC } from 'react'

interface Props {
  children: ReactNode
}

const ProtectedRoute: FC<Props> = ({ children }) => {
  return <div>{children}</div>
}

export default ProtectedRoute

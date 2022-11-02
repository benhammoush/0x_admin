import React from "react"

const LoginLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grid min-h-screen grid-cols-1 grid-rows-1">
        <div
          className="flex flex-col items-center"
          style={{
            background: "radial-gradient(at center center, rgb(56, 189, 248), rgb(59, 130, 246))",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default LoginLayout

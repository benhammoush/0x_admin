import React from "react"

const LoginLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grid min-h-screen grid-cols-1 grid-rows-1">
        <div
          className="flex flex-col items-center"
          style={{
            background: "linear-gradient(73.29deg, #191B1F 0%, #212326 100%)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default LoginLayout

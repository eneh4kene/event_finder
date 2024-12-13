type ContainerProp = {
    children: React.ReactNode
}

export default function Container({children}: ContainerProp) {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto bg-white/[2%]">
        {children}
    </div>
  )
}

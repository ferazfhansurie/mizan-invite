import Image from "next/image"

interface FloralDecorationProps {
  className?: string
  rotate?: boolean
  size?: "sm" | "md" | "lg"
}

export default function FloralDecoration({ 
  className = "", 
  rotate = false,
  size = "md" 
}: FloralDecorationProps) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-72 h-72"
  }

  return (
    <div className={`absolute ${sizeClasses[size]} ${rotate ? 'rotate-180' : ''} ${className}`}>
      <Image
        src="/bunga.png"
        alt="Decorative floral element"
        fill
        className="object-contain"
        style={{ transform: rotate ? 'rotate(180deg)' : 'none' }}
      />
    </div>
  )
} 
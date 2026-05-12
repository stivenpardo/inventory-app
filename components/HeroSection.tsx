import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="flex flex-1 items-center px-6 py-16 lg:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Inventory
            <br />
            Management
          </h1>
          <p className="max-w-md text-base leading-relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            feugiat, faucibus libero id, scelerisque quam.
          </p>
          <div>
            <Button href="/learn-more">Learn More</Button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <InventoryIllustration />
        </div>
      </div>
    </section>
  );
}

function InventoryIllustration() {
  return (
    <svg
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-lg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6C63FF" />
          <stop offset="100%" stopColor="#F472B6" />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>

      {/* Isometric floor grid */}
      <g opacity="0.15" stroke="#6C63FF" strokeWidth="1">
        <path d="M250 320 L100 250 L250 180 L400 250 Z" />
        <path d="M175 285 L250 250 L325 285" />
        <path d="M250 180 L250 320" />
        <path d="M175 215 L175 285" />
        <path d="M325 215 L325 285" />
      </g>

      {/* Pedestal 1 - left */}
      <rect
        x="100"
        y="140"
        width="60"
        height="120"
        rx="30"
        fill="url(#grad1)"
        opacity="0.85"
      />
      <ellipse cx="130" cy="140" rx="30" ry="10" fill="#6C63FF" />
      {/* Shoe icon */}
      <path
        d="M115 125 Q130 115 145 125 L140 130 Q130 125 120 130 Z"
        fill="#4C1D95"
      />

      {/* Pedestal 2 - center */}
      <rect
        x="220"
        y="100"
        width="60"
        height="160"
        rx="30"
        fill="url(#grad1)"
        opacity="0.9"
      />
      <ellipse cx="250" cy="100" rx="30" ry="10" fill="#6C63FF" />
      {/* Hat/dome icon */}
      <ellipse cx="250" cy="88" rx="18" ry="8" fill="#E9D5FF" />
      <path d="M235 88 Q250 70 265 88" fill="#C4B5FD" />

      {/* Pedestal 3 - right */}
      <rect
        x="340"
        y="150"
        width="55"
        height="110"
        rx="27"
        fill="url(#grad1)"
        opacity="0.8"
      />
      <ellipse cx="367" cy="150" rx="27" ry="9" fill="#6C63FF" />
      {/* Cap icon */}
      <path
        d="M352 138 Q367 128 382 138 L380 142 Q367 135 354 142 Z"
        fill="#7C3AED"
      />

      {/* Boxes - bottom right cluster */}
      <g>
        <rect
          x="330"
          y="290"
          width="40"
          height="40"
          fill="#E9D5FF"
          stroke="#8B5CF6"
          strokeWidth="1.5"
        />
        <rect
          x="350"
          y="270"
          width="40"
          height="40"
          fill="#F3E8FF"
          stroke="#8B5CF6"
          strokeWidth="1.5"
        />
        <rect
          x="370"
          y="250"
          width="40"
          height="40"
          fill="#EDE9FE"
          stroke="#8B5CF6"
          strokeWidth="1.5"
        />
      </g>

      {/* Person 1 */}
      <g>
        <circle cx="300" cy="260" r="10" fill="#FDE68A" />
        <rect x="293" y="272" width="14" height="30" rx="5" fill="#6C63FF" />
        <rect x="290" y="302" width="6" height="15" rx="3" fill="#4C1D95" />
        <rect x="300" y="302" width="6" height="15" rx="3" fill="#4C1D95" />
      </g>

      {/* Person 2 */}
      <g>
        <circle cx="200" cy="230" r="9" fill="#FDE68A" />
        <rect x="194" y="240" width="12" height="28" rx="5" fill="#EC4899" />
        <rect x="191" y="268" width="5" height="14" rx="3" fill="#9D174D" />
        <rect x="200" y="268" width="5" height="14" rx="3" fill="#9D174D" />
      </g>

      {/* Floating screens/tablets */}
      <g opacity="0.9">
        <rect x="150" y="270" width="35" height="25" rx="3" fill="#312E81" />
        <rect
          x="153"
          y="273"
          width="29"
          height="14"
          rx="1"
          fill="#6C63FF"
          opacity="0.5"
        />
        <rect x="260" y="300" width="35" height="25" rx="3" fill="#312E81" />
        <rect
          x="263"
          y="303"
          width="29"
          height="14"
          rx="1"
          fill="#6C63FF"
          opacity="0.5"
        />
      </g>

      {/* Small decorative plants */}
      <g>
        <rect
          x="120"
          y="290"
          width="16"
          height="16"
          fill="#E9D5FF"
          stroke="#8B5CF6"
          strokeWidth="1"
        />
        <path d="M125 290 Q128 278 131 290" fill="#34D399" />
        <rect
          x="370"
          y="330"
          width="16"
          height="16"
          fill="#E9D5FF"
          stroke="#8B5CF6"
          strokeWidth="1"
        />
        <path d="M375 330 Q378 318 381 330" fill="#34D399" />
      </g>
    </svg>
  );
}

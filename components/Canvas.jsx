import React, { useRef, useEffect } from 'react'
import { Box } from '@chakra-ui/react'

class Particle {
  constructor(radius, radians, velocity, distanceFromCenter, color) {
    this.color = color
    this.radius = radius
    this.velocity = velocity
    this.radians = radians
    this.distanceFromCenter = distanceFromCenter
  }

  update = (ctx) => {
    this.radians += this.velocity

    const centerX = ctx.canvas.width / 2
    const centerY = ctx.canvas.height / 2
    const x = centerX + Math.cos(this.radians) * this.distanceFromCenter
    const y = centerY + Math.sin(this.radians) * this.distanceFromCenter

    ctx.beginPath()
    ctx.arc(x, y, this.radius, 0, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
  }
}

const Canvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let animationFrameId

    const particles = [
      new Particle(2, 0.0, 0.001, 0, '#d75458'),
      new Particle(2, 3.14, 0.005, 3, '#ff7a55'),
      new Particle(2, 1.57, 0.003, 2, '#a883ae'),
      new Particle(2, 5.5, 0.002, 3, '#eec597'),
      new Particle(2, 0.79, 0.008, 3, '#f39oce'),
      new Particle(2, 0.0, 0.003, 3, '#a883ae'),
    ]

    //Our draw came here
    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update(context)
      })

      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <Box
      width={['100%', '55%']}
      height={['80%', '90%']}
      position="absolute"
      top={['500px', '64px']}
      left={['0', '45%']}
    >
      <canvas
        ref={canvasRef}
        width="12"
        height="12"
        style={{ width: '100%', height: '100%' }}
      />
    </Box>
  )
}

export default Canvas

'use client'

import { AbsoluteFill, Img, interpolate, useCurrentFrame } from 'remotion'
import { Player } from '@remotion/player'

function UwaHeroComposition() {
  const frame = useCurrentFrame()
  const scale = interpolate(frame, [0, 600], [1.02, 1.14], { extrapolateRight: 'clamp' })
  const x = interpolate(frame, [0, 300, 600], [-1, 1, -1], { extrapolateRight: 'clamp' })
  const y = interpolate(frame, [0, 300, 600], [0, -1, 0], { extrapolateRight: 'clamp' })

  return (
    <AbsoluteFill style={{ backgroundColor: '#123d24', overflow: 'hidden' }}>
      <Img
        src="/uwa-hero.png"
        alt="Mountain gorilla in the Bwindi forest"
        style={{
          width: '106%',
          height: '106%',
          objectFit: 'cover',
          objectPosition: 'center',
          transform: `translate(${x}%, ${y}%) scale(${scale})`,
        }}
      />
    </AbsoluteFill>
  )
}

export function UwaHeroBackground() {
  return (
    <Player
      component={UwaHeroComposition}
      durationInFrames={600}
      compositionWidth={1920}
      compositionHeight={1080}
      fps={30}
      loop
      autoPlay
      controls={false}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      inputProps={{}}
    />
  )
}

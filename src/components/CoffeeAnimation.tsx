import { Box, keyframes } from '@mui/material';

const steamRise = keyframes`
  0%   { transform: translateY(0) scaleX(1);   opacity: 0; }
  15%  { opacity: 0.7; }
  50%  { transform: translateY(-38px) scaleX(1.3); opacity: 0.5; }
  100% { transform: translateY(-72px) scaleX(0.8); opacity: 0; }
`;

const steamSway1 = keyframes`
  0%   { transform: translateY(0)    translateX(0)    scaleX(1);   opacity: 0; }
  20%  { opacity: 0.65; }
  50%  { transform: translateY(-40px) translateX(8px)  scaleX(1.2); opacity: 0.45; }
  100% { transform: translateY(-80px) translateX(-4px) scaleX(0.7); opacity: 0; }
`;

const steamSway2 = keyframes`
  0%   { transform: translateY(0)    translateX(0)    scaleX(1);   opacity: 0; }
  20%  { opacity: 0.65; }
  50%  { transform: translateY(-40px) translateX(-8px) scaleX(1.2); opacity: 0.45; }
  100% { transform: translateY(-80px) translateX(4px)  scaleX(0.7); opacity: 0; }
`;

const liquidSwirl = keyframes`
  0%   { transform: rotate(0deg)   scale(1);    }
  50%  { transform: rotate(180deg) scale(0.96); }
  100% { transform: rotate(360deg) scale(1);    }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 60px 10px rgba(200,148,58,0.20), 0 0 120px 30px rgba(200,148,58,0.08); }
  50%       { box-shadow: 0 0 80px 20px rgba(200,148,58,0.35), 0 0 160px 50px rgba(200,148,58,0.14); }
`;

const floatBob = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
`;

const saucerShimmer = keyframes`
  0%, 100% { opacity: 0.6; }
  50%       { opacity: 1; }
`;

export default function CoffeeAnimation() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: 340,
        height: 380,
        mx: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Outer glow ring */}
      <Box
        sx={{
          position: 'absolute',
          width: 300,
          height: 300,
          borderRadius: '50%',
          animation: `${glowPulse} 3s ease-in-out infinite`,
          border: '1.5px solid rgba(200,148,58,0.18)',
        }}
      />

      {/* Floating cup wrapper */}
      <Box
        sx={{
          animation: `${floatBob} 4s ease-in-out infinite`,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Steam wisps */}
        <Box sx={{ position: 'relative', height: 80, width: 160, mb: -1 }}>
          {/* Left steam */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: '28%',
              width: 10,
              height: 40,
              borderRadius: '50%',
              background: 'radial-gradient(ellipse, rgba(255,248,240,0.85) 0%, transparent 100%)',
              filter: 'blur(3px)',
              animation: `${steamSway2} 2.4s ease-in-out infinite`,
              animationDelay: '0.2s',
            }}
          />
          {/* Centre steam */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 12,
              height: 48,
              borderRadius: '50%',
              background: 'radial-gradient(ellipse, rgba(255,248,240,0.9) 0%, transparent 100%)',
              filter: 'blur(3.5px)',
              animation: `${steamRise} 2.2s ease-in-out infinite`,
            }}
          />
          {/* Right steam */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: '68%',
              width: 10,
              height: 38,
              borderRadius: '50%',
              background: 'radial-gradient(ellipse, rgba(255,248,240,0.8) 0%, transparent 100%)',
              filter: 'blur(3px)',
              animation: `${steamSway1} 2.6s ease-in-out infinite`,
              animationDelay: '0.5s',
            }}
          />
        </Box>

        {/* SVG Cup */}
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'drop-shadow(0 8px 24px rgba(74,44,42,0.5))' }}
        >
          {/* Cup body */}
          <path
            d="M42 70 L55 168 Q55 178 68 178 L132 178 Q145 178 145 168 L158 70 Z"
            fill="url(#cupGrad)"
          />
          {/* Cup rim highlight */}
          <ellipse cx="100" cy="70" rx="58" ry="10" fill="url(#rimGrad)" />

          {/* Coffee liquid surface */}
          <ellipse cx="100" cy="70" rx="52" ry="8" fill="url(#coffeeGrad)" />

          {/* Swirling coffee pattern */}
          <g style={{ transformOrigin: '100px 70px' }}>
            <ellipse
              cx="100"
              cy="70"
              rx="30"
              ry="4"
              fill="none"
              stroke="rgba(200,148,58,0.55)"
              strokeWidth="2.5"
              style={{
                animation: `${liquidSwirl} 5s linear infinite`,
                transformOrigin: '100px 70px',
              }}
            />
            <ellipse
              cx="100"
              cy="70"
              rx="16"
              ry="2.5"
              fill="none"
              stroke="rgba(200,148,58,0.40)"
              strokeWidth="2"
              style={{
                animation: `${liquidSwirl} 4s linear infinite reverse`,
                transformOrigin: '100px 70px',
              }}
            />
          </g>

          {/* Foam / crema dots */}
          <circle cx="88" cy="68" r="3.5" fill="rgba(232,185,106,0.7)" />
          <circle cx="108" cy="66" r="2.5" fill="rgba(232,185,106,0.5)" />
          <circle cx="98" cy="72" r="2"   fill="rgba(232,185,106,0.55)" />

          {/* Handle */}
          <path
            d="M158 90 Q195 90 195 118 Q195 148 158 148"
            stroke="url(#handleGrad)"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M158 90 Q188 90 188 118 Q188 142 158 148"
            stroke="rgba(74,44,42,0.25)"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />

          {/* Cup shine */}
          <path
            d="M65 90 Q60 120 63 150"
            stroke="rgba(255,248,240,0.18)"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="cupGrad" x1="42" y1="70" x2="158" y2="178" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#7A5C58" />
              <stop offset="50%"  stopColor="#4A2C2A" />
              <stop offset="100%" stopColor="#2E1A18" />
            </linearGradient>
            <linearGradient id="rimGrad" x1="42" y1="60" x2="158" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%"  stopColor="#9A7A78" />
              <stop offset="100%" stopColor="#5A3C3A" />
            </linearGradient>
            <radialGradient id="coffeeGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#C8943A" />
              <stop offset="60%"  stopColor="#8B5E1A" />
              <stop offset="100%" stopColor="#5A3A0A" />
            </radialGradient>
            <linearGradient id="handleGrad" x1="158" y1="90" x2="195" y2="148" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#6A4A48" />
              <stop offset="100%" stopColor="#3E2220" />
            </linearGradient>
          </defs>
        </svg>

        {/* Saucer */}
        <Box sx={{ mt: -1.5, position: 'relative' }}>
          <svg width="240" height="38" viewBox="0 0 240 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="120" cy="14" rx="108" ry="14" fill="url(#saucerGrad)" style={{ animation: `${saucerShimmer} 3s ease-in-out infinite` }} />
            <ellipse cx="120" cy="14" rx="70"  ry="8"  fill="url(#saucerInner)" />
            <ellipse cx="120" cy="20" rx="108" ry="6"  fill="rgba(46,26,24,0.5)" />
            <defs>
              <linearGradient id="saucerGrad" x1="12" y1="0" x2="228" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#9A7A78" />
                <stop offset="50%"  stopColor="#6A4A48" />
                <stop offset="100%" stopColor="#4A2C2A" />
              </linearGradient>
              <radialGradient id="saucerInner" cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stopColor="#B89A98" />
                <stop offset="100%" stopColor="#7A5C5A" />
              </radialGradient>
            </defs>
          </svg>
        </Box>
      </Box>

      {/* Ground shadow */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 180,
          height: 18,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(46,26,24,0.45) 0%, transparent 75%)',
          filter: 'blur(4px)',
          animation: `${floatBob} 4s ease-in-out infinite`,
          animationDirection: 'reverse',
        }}
      />
    </Box>
  );
}

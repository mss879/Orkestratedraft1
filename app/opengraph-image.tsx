import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
}

export default function Image() {
  const iconUrl = new URL('/Favicon%20-%20Light.png', getSiteUrl()).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ffffff',
        }}
      >
        <img
          src={iconUrl}
          width={320}
          height={320}
          style={{
            borderRadius: 72,
            objectFit: 'contain',
          }}
        />
      </div>
    ),
    size
  );
}

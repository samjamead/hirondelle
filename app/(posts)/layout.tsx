export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-full min-h-40 rounded border border-yellow-400'>
      {children}
    </div>
  );
}

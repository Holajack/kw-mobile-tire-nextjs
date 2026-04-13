export const metadata = {
  title: "K&W Studio",
  description: "Content management for K&W Mobile Tire Service",
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}

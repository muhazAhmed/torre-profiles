import { API } from "@/config/server";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileSkills from "@/components/ProfileSkills";

async function getProfile(username: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

  const res = await fetch(`${baseUrl}/api/torre/profile/${username}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }

  return res.json();
}

export default async function ProfilePage({
  params,
}: {
  params: { username: string };
}) {
  const profile = await getProfile(params.username);

  return (
    <main className="container mx-auto p-6 flex flex-col gap-6">
      <ProfileHeader profile={profile.person} />
      <ProfileSkills strengths={profile.strengths || []} />
    </main>
  );
}

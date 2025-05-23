"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";

export default function EditorPage() {
  const [form, setForm] = useState({
    name: "",
    bio: "",
    education: "",
    skills: "",
    experience: "",
    photo: "",
    subdomain: ""
  });
  const [loading, setLoading] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setForm((prev) => ({ ...prev, photo: ev.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: typeof window !== "undefined"
              ? `${window.location.origin}/editor`
              : undefined,
          },
        });
      } else {
        setLoading(false);
      }
      // Clean up the URL hash after session is set
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black font-sans">
        <span className="text-lg">Loading editor...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white text-black font-sans">
      {/* Left: Editor */}
      <aside className="w-full md:w-1/3 border-r border-neutral-200 p-8 flex flex-col gap-6 min-h-screen bg-white">
        <h2 className="text-2xl font-bold mb-2">Edit your portfolio</h2>
        <label className="flex flex-col gap-1">
          <span className="font-medium">Name</span>
          <input name="name" value={form.name} onChange={handleChange} className="border rounded px-3 py-2" placeholder="Your name" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-medium">Bio</span>
          <textarea name="bio" value={form.bio} onChange={handleChange} className="border rounded px-3 py-2 min-h-[60px]" placeholder="A short bio" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-medium">Education</span>
          <input name="education" value={form.education} onChange={handleChange} className="border rounded px-3 py-2" placeholder="Your education" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-medium">Skills</span>
          <input name="skills" value={form.skills} onChange={handleChange} className="border rounded px-3 py-2" placeholder="e.g. React, Figma, Marketing" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-medium">Work Experience</span>
          <textarea name="experience" value={form.experience} onChange={handleChange} className="border rounded px-3 py-2 min-h-[60px]" placeholder="Your work experience" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-medium">Profile Photo</span>
          <input type="file" accept="image/*" onChange={handlePhoto} className="border rounded px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-medium">Subdomain</span>
          <div className="flex items-center gap-2">
            <input
              name="subdomain"
              value={form.subdomain || ""}
              onChange={e => setForm(prev => ({ ...prev, subdomain: e.target.value.replace(/[^a-zA-Z0-9-]/g, "") }))}
              className="border rounded px-3 py-2 w-40"
              placeholder="yourname"
              maxLength={32}
            />
            <span className="text-neutral-500 text-base select-none">.domain.com</span>
          </div>
        </label>
        <button className="mt-8 bg-black text-white rounded-full px-6 py-3 font-semibold hover:bg-neutral-800 transition-colors">Publish</button>
      </aside>
      {/* Right: Live Preview */}
      <section className="flex-1 flex items-center justify-center p-8 bg-neutral-50 min-h-screen">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-neutral-200">
          {form.photo && (
            <Image
              src={form.photo}
              alt="Profile"
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover mb-4 border"
            />
          )}
          <h1 className="text-3xl font-bold mb-2">{form.name || "Your Name"}</h1>
          <p className="text-neutral-600 mb-4">{form.bio || "A short bio about yourself."}</p>
          <div className="w-full flex flex-col gap-2 text-left mb-4">
            <div><span className="font-semibold">Education:</span> {form.education || <span className="text-neutral-400">Not specified</span>}</div>
            <div><span className="font-semibold">Skills:</span> {form.skills || <span className="text-neutral-400">Not specified</span>}</div>
            <div><span className="font-semibold">Experience:</span> {form.experience || <span className="text-neutral-400">Not specified</span>}</div>
          </div>
        </div>
      </section>
    </div>
  );
} 
"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function useFileChange() {
  const [file, setFile] = useState<any>(); // should be type file
  // should be html input data type
  function handleFileChange(e: any) {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  }

  return {
    file,
    handleFileChange,
  };
}

export function InputFileComponent({
  fileChangeEvent,
}: {
  fileChangeEvent: any; // Should be type function
}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="video">Video</Label>
      <Input
        id="video"
        type="file"
        accept="video/*"
        onChange={(e) => fileChangeEvent(e)}
      />
    </div>
  );
}

async function uploadVideo(file: any) {
  if (!file) return;

  const formData = new FormData();
  formData.append("video", file);

  const res = await fetch("http://localhost:3001/compress", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  console.log("Compressed video URL:", data.url);
}

export default function Page() {
  const { file, handleFileChange } = useFileChange();
  return (
    <div className="flex flex-col items-center h-screen w-screen gap-15">
      <h1 className="text-3xl font-semibold text-center flex flex-col gap-2">
        Edit your video fast! (No registration or any payment required!)
        <p className="text-xl text-white/50 font-normal">
          Upload a video then - select: 1. Cut video 2. Compress video!
        </p>
      </h1>
      {file && <h2>Current file: {file.name}</h2>}

      <InputFileComponent fileChangeEvent={handleFileChange} />
      <Button onClick={() => uploadVideo(file)}>Upload</Button>
    </div>
  );
}

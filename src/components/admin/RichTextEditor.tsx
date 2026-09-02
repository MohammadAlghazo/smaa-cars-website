"use client";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useMemo } from "react";

// Dynamically import ReactQuill to prevent SSR issues (document is not defined)
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false, loading: () => <div className="h-40 bg-gray-100 animate-pulse rounded-lg border border-gray-300"></div> });

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  
  // Custom toolbar options
  const modules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
      [{ 'align': [] }],
      ['link', 'image', 'video'],
      ['clean']                                         // remove formatting button
    ],
  }), []);

  return (
    <div className="bg-white" dir="ltr">
      <ReactQuill 
        theme="snow" 
        value={value} 
        onChange={onChange} 
        modules={modules}
        placeholder={placeholder || "اكتب هنا..."}
        className="min-h-[200px]"
      />
    </div>
  );
}

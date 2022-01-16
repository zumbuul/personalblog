import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

export default function App({ setContent, setTitle }) {
  const [text, setText] = useState("");
  const { id } = useParams();

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      setContent(editorRef.current.getContent());
    }
  };

  function handleTextChange(e) {
    setText(e.target.value);
    setContent(text);
    log();
  }

  useEffect(() => {
    fetch("http://www.localhost:5000/api/posts/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setText(data.text);
        setTitle(data.title);
        console.log(data.text);
      });
  }, []);

  return (
    <>
      <Editor
        apiKey="8jryulziiwdxusq1rqbjrmnk5o5t1hyt5t0ophhgxfg2y8wg"
        onInit={(evt, editor) => (editorRef.current = editor)}
        value={text}
        onChange={(e) => handleTextChange(e)}
        init={{
          height: 850,
          width: 1850,
          resize: false,
          menubar: false,
          skin: "oxide-dark",
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
            "codesample",
          ],
          fontsize_formats:
            "8pt 10pt 12pt 14pt 15pt 16pt 17pt 18pt 20pt 22pt 24pt 36pt",
          codesample_languages: [
            { text: "HTML/XML", value: "markup" },
            { text: "JavaScript", value: "javascript" },
            { text: "CSS", value: "css" },
            { text: "PHP", value: "php" },
            { text: "Ruby", value: "ruby" },
            { text: "Python", value: "python" },
            { text: "Java", value: "java" },
            { text: "C", value: "c" },
            { text: "C#", value: "csharp" },
            { text: "C++", value: "cpp" },
          ],
          toolbar:
            "undo redo | fontselect | fontsizeselect | codesample | link | image | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
}

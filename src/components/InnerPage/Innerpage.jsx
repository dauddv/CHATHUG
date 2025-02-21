import { useState } from "react";
import { GrMicrophone } from "react-icons/gr";
import { LiaImageSolid } from "react-icons/lia";
import { RiArrowUpCircleFill } from "react-icons/ri";
import { FaBrain } from "react-icons/fa";
import axios from "axios";

const API_UPLOAD_URL = "http://3.93.164.246:8000/upload-pdf/";
const API_FETCH_URL = "/todo";

const Innerpage = () => {
  const [input, setInput] = useState(""); // User input text
  const [pdfFile, setPdfFile] = useState(null);
  const [messages, setMessages] = useState([]); // Store chat messages

  // ✅ Handle PDF Selection (Real-time)
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPdfFile(file);
      setInput(`📄 ${file.name}`); // Show selected PDF name in text area
    }
  };

  // ✅ Handle PDF Upload
  const handleUpload = async () => {
    if (!pdfFile) {
      alert("Please select a PDF file.");
      return;
    }

    setMessages([...messages, { sender: "user", text: pdfFile.name, type: "file" }]); // Move file name up
    setInput("📄 Uploading PDF..."); // Show upload status

    const formData = new FormData();
    formData.append("file", pdfFile);

    try {
      // Upload PDF
      const response = await axios.post(API_UPLOAD_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: response.data.message, type: "status" },
      ]);

      // Redirect after 3 minutes (180000ms)
 setTimeout(() => {
    window.location.href = API_FETCH_URL;
}, 10000); // 10 seconds


    } catch (error) {
      console.error("Upload Error:", error);
      setMessages((prev) => [...prev, { sender: "bot", text: "❌ Error uploading PDF!" }]);
    }

    setInput(""); // Clear input after upload
  };

  return (
    <div>
      <div className="InnerPageInner">
        <div className="inenerPageheading">
          <h1>What can I help with?</h1>
        </div>

        {/* ✅ Chat Messages Appear Above Input */}
        <div className="chatBox">
          {messages.map((msg, index) => (
            <>
            <div key={index} className={msg.sender === "user" ? "userMsg" : "botMsg"}>
              {msg.type === "file" ? (
                <div className="fileMessage">
                  📄 {msg.text} <span className="fileTag">PDF</span>
                </div>
              ) : (
                <p><FaBrain /><span>{msg.text}</span></p>
              )}
            </div>
            </>
          ))}
        </div>

        {/* ✅ AI Input Box (Same UI) */}
        <div className="innerPageSearch">
          <div className="innerPageSearchInput">
            <input
              type="text"
              placeholder="Ask me...."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="innerPageSearchLogo">
              <div className="innerPageSearchLogoLeftSide">
              <GrMicrophone style={{ cursor: "pointer" }} />
              <label htmlFor="pdfUpload">
                <LiaImageSolid style={{ cursor: "pointer" }} />
              </label>
              </div>
            <div className="innerPageSearchLogorightSide">
              <input
                type="file"
                id="pdfUpload"
                accept="application/pdf"
                style={{ display: "none" }}
                onChange={handleFileSelect}
              />
              <RiArrowUpCircleFill
                style={{ cursor: "pointer", fontSize: "25px" }}
                onClick={handleUpload}
              />
            </div>
          </div>
        </div>

        {/* ✅ Utilities Section (All 6 Boxes Restored) */}
        <div className="row utilitiesRow">
          <div className="col-lg-4 col-md-4 col-12">
            <div className="utilitiesClass">
              <div className="utilitiesClassLogo"><GrMicrophone /></div>
              <div className="utilitiesClasstext"><p className="Inter">Help me turn on my utilities</p></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="utilitiesClass">
              <div className="utilitiesClasstext"><p className="Inter">Help me turn on my utilities</p></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="utilitiesClass">
              <div className="utilitiesClasstext"><p className="Inter">Help me turn on my utilities</p></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="utilitiesClass">
              <div className="utilitiesClasstext"><p className="Inter">Help me turn on my utilities</p></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="utilitiesClass">
              <div className="utilitiesClasstext"><p className="Inter">Help me turn on my utilities</p></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="utilitiesClass">
              <div className="utilitiesClasstext"><p className="Inter">Help me turn on my utilities</p></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Innerpage;

import React, { useState } from "react";
import {
  Eye,
  CheckCircle,
  Award,
  BrainCircuit,
  CloudSun,
  GraduationCap,
  X
} from "lucide-react";

const certifications = [
  {
    provider: "AWS",
    icon: CloudSun,
    certs: [
      {
        name: "AWS Certified Cloud Practitioner",
        preview:
          "https://ik.imagekit.io/venu/certs_images/Aws_Cloud_Cert.jpg",
        verify:
          "https://cp.certmetrics.com/amazon/en/public/verify/credential/dd971b950cf2483b9812a401c84e536b"
      }
    ]
  },
  {
    provider: "Microsoft",
    icon: Award,
    certs: [
      {
        name: "Security Operations Analyst Associate (SC-200)",
        preview:
          "https://ik.imagekit.io/venu/certs_images/sc200.jpg?updatedAt=1793017160071",
        verify:
          "https://learn.microsoft.com/en-in/users/venugopalsonga-0340/credentials/271c6d673068c57f"
      }
    ]
  },
  {
    provider: "AWS Academy Graduate",
    icon: GraduationCap,
    certs: [
      {
        name: "Cloud Foundations",
        preview:
          "https://ik.imagekit.io/venu/certs_images/AWS%20Cloud%20Foundations.jpg?updatedAt=1793017158642",
        verify:
          "https://drive.google.com/file/d/1CLnweJW2wyo7MaRIW3jxcNTzLFpuofhw/view?usp=drive_link"
      },
      {
        name: "Machine Learning Foundations",
        preview:
          "https://ik.imagekit.io/venu/certs_images/AWS%20Machine%20Learning.jpg?updatedAt=1793017158695",
        verify:
          "https://drive.google.com/file/d/1KsX26YLxgRd9L37-urVvume5ZLoqpMXW/view?usp=drive_link"
      }
    ]
  },
  {
    provider: "Fortinet",
    icon: GraduationCap,
    certs: [
      {
        name: "Fortinet Certified Fundamentals in Cybersecurity",
        preview:
          "https://ik.imagekit.io/venu/certs_images/Screenshot_2026-10-26-17-34-07-73_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg?updatedAt=1793017158721",
        verify:
          "https://drive.google.com/file/d/1xYDZYjUD4NnqGL-zgdoLjvuBIEN6goeU/view?usp=drive_link"
      },
      {
        name: "Fortinet Certified Associate in Cybersecurity",
        preview:
          "https://ik.imagekit.io/venu/certs_images/Screenshot_2026-10-26-17-34-58-54_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg?updatedAt=1793017158785",
        verify:
          "https://drive.google.com/file/d/1afRVcfNqnvsTtNH7-w2Pzc-0SFghxCxN/view?usp=drive_link"
      }
    ]
  },
  {
    provider: "Zscaler",
    icon: Award,
    certs: [
      {
        name: "Zscaler Certified Zero Trust Associate (ZTCA)",
        preview:
          "https://ik.imagekit.io/venu/certs_images/Screenshot_2026-10-26-17-43-28-61_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg?updatedAt=1793017159580",
        verify:
          "https://drive.google.com/file/d/1EgVzJuGNiOQRNjkn9o5mPXSt-NRM13RA/view?usp=drive_link"
      }
    ]
  },
  {
    provider: "NPTEL",
    icon: GraduationCap,
    certs: [
      {
        name: "IOT",
        preview:
          "https://ik.imagekit.io/venu/certs_images/Screenshot_2026-10-26-17-36-13-87_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg?updatedAt=1793017159000",
        verify:
          "https://drive.google.com/file/d/1hPMgqsoMmNnc0dMUoptMbISYl3A-AnLD/view?usp=drivesdk"
      },
      {
        name: "Soft Skills",
        preview:
          "https://ik.imagekit.io/venu/certs_images/Screenshot_2026-10-26-17-37-12-03_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg?updatedAt=1793017159294",
        verify:
          "https://drive.google.com/file/d/1LHrHdJ68HW2XYcd545EQaWF1VyjqDYuF/view?usp=drivesdk"
      }
    ]
  },
  {
    provider: "HackerRank",
    icon: BrainCircuit,
    certs: [
      {
        name: "Java (Basic)",
        preview:
          "https://ik.imagekit.io/venu/certs_images/Screenshot_2026-10-26-17-38-04-64_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg?updatedAt=1793017159006",
        verify:
          "https://drive.google.com/file/d/14RLKF9yqc5AxWBH2sgY92rOcLSbdntai/view?usp=drive_link"
      },
      {
        name: "Problem Solving (Basic)",
        preview:
          "https://ik.imagekit.io/venu/certs_images/Screenshot_2026-10-26-17-38-44-35_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg?updatedAt=1793017159214",
        verify:
          "https://drive.google.com/file/d/1nzhrT4sdn0MqVcb2aXLd7GnEh7GJ5o1M/view?usp=drive_link"
      },
      {
        name: "C# (Basic)",
        preview:
          "https://ik.imagekit.io/venu/certs_images/Screenshot_2026-10-26-17-39-17-35_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg?updatedAt=1793017159659",
        verify:
          "https://drive.google.com/file/d/1GxnxPt6MO9haIvzf48fmakXHlbKtGyyK/view?usp=drive_link"
      },
      {
        name: "SQL (Basic)",
        preview:
          "https://ik.imagekit.io/venu/certs_images/Screenshot_2026-10-26-17-39-54-95_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg?updatedAt=1793017159559",
        verify:
          "https://drive.google.com/file/d/1e3BUc9WZ6eusLAUn0J_-bm8jl4PlOU43/view?usp=drive_link"
      },
      {
        name: "SQL (Intermediate)",
        preview:
          "https://ik.imagekit.io/venu/certs_images/Screenshot_2026-10-26-17-40-24-26_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg?updatedAt=1793017159568",
        verify:
          "https://drive.google.com/file/d/1SOa3TYTkK7DbMBzo7S8gLWnS8ycdb_ax/view?usp=drive_link"
      },
      {
        name: "SQL (Advanced)",
        preview:
          "https://ik.imagekit.io/venu/certs_images/Screenshot_2026-10-26-17-41-09-75_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg?updatedAt=1793017159563",
        verify:
          "https://drive.google.com/file/d/196C6laIvcZXY3em2_AGuzwFIGn58a_ar/view?usp=drive_link"
      }
    ]
  },
  {
    provider: "Wipro",
    icon: GraduationCap,
    certs: [
      {
        name: "Java Full Stack Development",
        preview:
          "https://ik.imagekit.io/venu/certs_images/Screenshot_2026-10-26-17-42-21-83_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg?updatedAt=1793017159666",
        verify:
          "https://drive.google.com/file/d/1jGeyQENp6jsOlNxR4kID8KArR8AqSpTa/view?usp=drive_link"
      }
    ]
  }
];

const Certifications = () => {
  const [previewUrl, setPreviewUrl] = useState(null);

  return (
    <div className="space-y-10">
      {previewUrl && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-xl shadow-lg max-w-6xl w-auto max-h-[90vh] overflow-hidden flex items-center justify-center">
            <button
              className="absolute top-3 right-3 text-gray-700 hover:text-red-500"
              onClick={() => setPreviewUrl(null)}
            >
              <X size={20} />
            </button>
            <img
              src={previewUrl}
              alt="Certificate Preview"
              className="w-auto h-auto max-h-[90vh] max-w-[90vw] object-contain rounded"
            />
          </div>
        </div>
      )}

      {certifications.map((block, idx) => (
        <div
          key={idx}
          className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out transform"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <block.icon className="text-blue-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-blue-600">
              {block.provider} Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {block.certs.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-gray-800 font-medium mb-3 flex items-center gap-2">
                    <Award className="text-blue-400 w-4 h-4" />
                    {cert.name}
                  </h4>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setPreviewUrl(cert.preview)}
                      className="flex items-center gap-1 bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200"
                    >
                      <Eye size={14} /> Preview
                    </button>
                    <a
                      href={cert.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200"
                    >
                      <CheckCircle size={14} /> Verify
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;

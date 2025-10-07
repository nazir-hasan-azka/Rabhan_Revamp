'use client';

import * as React from 'react';
import { Upload, Download, RefreshCw, X, FileQuestion, File, Clock, CheckCircle2 } from 'lucide-react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';

type DocumentStatus = 'pending' | 'in-progress' | 'completed' | 'rejected';

interface Document {
  id: string;
  name: string;
  category: string;
  fileName?: string;
  fileSize?: string;
  uploadDate?: string;
  status: DocumentStatus;
}

const DOCUMENTS: Document[] = [
  {
    id: '1',
    name: 'National ID (Back)',
    category: 'identification',
    fileName: 'Saudi national id back.jpg',
    fileSize: '88.48 KB',
    uploadDate: '9/11/2025',
    status: 'in-progress',
  },
  {
    id: '2',
    name: 'National ID (Front)',
    category: 'identification',
    status: 'pending',
  },
  {
    id: '3',
    name: 'Proof of Address',
    category: 'address',
    fileName: 'Saudi national Address proof.jpg',
    fileSize: '88.48 KB',
    uploadDate: '9/11/2025',
    status: 'completed',
  },
  {
    id: '4',
    name: 'Salary Certificate',
    category: 'financial',
    fileName: 'Company Salary slip.jpg',
    fileSize: '88.48 KB',
    uploadDate: '9/11/2025',
    status: 'rejected',
  },
];

const STATUS_CONFIG = {
  pending: {
    label: 'Pending',
    color: 'bg-[#aaaaaa]',
    icon: Clock,
  },
  'in-progress': {
    label: 'In Progress',
    color: 'bg-[#f0ad4e]',
    icon: Clock,
  },
  completed: {
    label: 'Completed',
    color: 'bg-[#22bb33]',
    icon: CheckCircle2,
  },
  rejected: {
    label: 'Rejected',
    color: 'bg-[#bb2124]',
    icon: X,
  },
};

export default function DocumentsPage() {
  const [documents, setDocuments] = React.useState(DOCUMENTS);

  const handleUpload = (docId: string) => {
    console.log('Upload document:', docId);
    // Implement file upload logic
  };

  const handleDownload = (docId: string) => {
    console.log('Download document:', docId);
    // Implement file download logic
  };

  const handleReupload = (docId: string) => {
    console.log('Reupload document:', docId);
    // Implement file reupload logic
  };

  const handleDelete = (docId: string) => {
    console.log('Delete document:', docId);
    // Implement file deletion logic
  };

  const allCompleted = documents.every(doc => doc.status === 'completed');

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-[258px]">
        {/* Header */}
        <DashboardHeader />

        {/* Main Content */}
        <main className="flex-1 overflow-auto mt-[80px]">
          <div className="px-6 py-6 max-w-[1920px]">
            {/* Page Header */}
            <div className="mb-8 flex items-start justify-between">
              <div>
                <h1 className="text-[38px] font-semibold text-black font-poppins mb-2">
                  Document Management
                </h1>
                <p className="text-[16px] text-[#666666] font-poppins">
                  Manage your KYC documents and track verification status
                </p>
              </div>

              {/* Complete Verification Badge */}
              <div className="bg-[#b3e0e0] flex items-center gap-2 px-3 py-2 rounded-[8px]">
                <CheckCircle2 className="w-3 h-3 text-[#222222]" strokeWidth={2} />
                <span className="text-[12px] text-[#222222] font-poppins">
                  Complete Verification
                </span>
              </div>
            </div>

            {/* Documents List */}
            <div className="space-y-6">
              {documents.map((doc) => {
                const statusConfig = STATUS_CONFIG[doc.status];
                const StatusIcon = statusConfig.icon;
                const hasFile = !!doc.fileName;

                return (
                  <div
                    key={doc.id}
                    className="border border-[#dddddd] rounded-[8px] overflow-hidden"
                  >
                    {/* Document Header */}
                    <div className="flex items-center justify-between px-6 py-4">
                      <div className="flex items-center gap-4">
                        <h3 className="text-[20px] font-semibold text-black font-poppins">
                          {doc.name}
                        </h3>

                        {/* Status Badge */}
                        <div className={`${statusConfig.color} flex items-center gap-1 px-2 py-1 rounded-[16px]`}>
                          <StatusIcon className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                          <span className="text-[10px] text-white font-poppins">
                            {statusConfig.label}
                          </span>
                        </div>
                      </div>

                      {/* Upload Button */}
                      <button
                        onClick={() => handleUpload(doc.id)}
                        className="bg-[#007d7d] hover:bg-[#006666] flex items-center gap-2 px-4 py-2 rounded-[8px] transition-colors"
                      >
                        <Upload className="w-4 h-4 text-white" strokeWidth={2} />
                        <span className="text-[12px] text-white font-poppins">
                          Upload
                        </span>
                      </button>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-[#dddddd]" />

                    {/* Document Content */}
                    {hasFile ? (
                      <div className="bg-[#f5ffff] border border-[#dddddd] mx-4 my-4 rounded-[8px] p-4">
                        <div className="flex items-center justify-between">
                          {/* File Info */}
                          <div className="flex items-center gap-3">
                            <File className="w-6 h-6 text-black" strokeWidth={2} />
                            <div>
                              <p className="text-[16px] text-[#222222] font-poppins">
                                {doc.fileName}
                              </p>
                              <p className="text-[12px] text-[#666666] font-poppins mt-1">
                                Uploaded on {doc.uploadDate} • {doc.fileSize}
                              </p>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-2">
                            {/* Download */}
                            <button
                              onClick={() => handleDownload(doc.id)}
                              className="w-[31px] h-[31px] bg-[#42b2b1] hover:bg-[#358e8e] flex items-center justify-center rounded-[4px] transition-colors"
                              title="Download"
                            >
                              <Download className="w-5 h-5 text-white" strokeWidth={2} />
                            </button>

                            {/* Reupload */}
                            <button
                              onClick={() => handleReupload(doc.id)}
                              className="w-[31px] h-[31px] bg-[#9dd9eb] hover:bg-[#7dcae0] flex items-center justify-center rounded-[4px] transition-colors"
                              title="Reupload"
                            >
                              <RefreshCw className="w-5 h-5 text-[#12262c]" strokeWidth={2} />
                            </button>

                            {/* Delete */}
                            <button
                              onClick={() => handleDelete(doc.id)}
                              className="w-[31px] h-[31px] bg-[#d67a7c] hover:bg-[#c85f61] flex items-center justify-center rounded-[4px] transition-colors"
                              title="Delete"
                            >
                              <X className="w-5 h-5 text-[#4b0d0e]" strokeWidth={2} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="py-12 flex flex-col items-center justify-center">
                        <FileQuestion className="w-6 h-6 text-[#222222] mb-2" strokeWidth={2} />
                        <p className="text-[20px] text-[#222222] font-poppins">
                          No file is upload
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

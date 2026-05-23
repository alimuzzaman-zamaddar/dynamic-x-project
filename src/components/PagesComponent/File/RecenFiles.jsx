import React, { useEffect, useState } from 'react'
import Stllogo from "../../../assets/img/product/stl.png"
import { GoDownload } from 'react-icons/go'
import { Loader2 } from 'lucide-react'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

export default function RecenFiles() {
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFiles = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        setLoading(false)
        return
      }
      try {
        const res = await fetch(`${BASE_URL}/auth/file-library`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        })
        const json = await res.json()
        if (res.ok && json.success && Array.isArray(json.data)) {
          setFiles(json.data)
        } else {
          setFiles([])
        }
      } catch (err) {
        console.error('Failed to fetch file library:', err)
        setError('Failed to load files.')
      } finally {
        setLoading(false)
      }
    }
    fetchFiles()
  }, [])

  const formatDate = (value) => {
    if (value == null) return '—'
    try {
      const date =
        typeof value === 'number'
          ? new Date(value * 1000)
          : new Date(value)
      if (Number.isNaN(date.getTime())) return '—'
      return date.toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    } catch {
      return '—'
    }
  }

  return (
    <>
      <h2 className="text-xl font-medium text-[#0D0D12] mb-4">Recent Uploads</h2>

      {/* Loading */}
      {loading && (
        <div className="flex items-center justify-center py-16">
          <Loader2 size={28} className="animate-spin text-slate-400" />
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="text-center py-10 text-sm text-red-500">{error}</div>
      )}

      {/* Empty */}
      {!loading && !error && files.length === 0 && (
        <div className="text-center py-10 text-sm text-slate-400">No files uploaded yet.</div>
      )}

      {/* File Grid */}
      {!loading && !error && files.length > 0 && (
        <div className="grid 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {files.map((file) => (
            <div key={file.id ?? file.file_id ?? file.name} className="bg-[#F6F8FA] p-4 rounded-lg">
              <div className="flex justify-between">
                <img src={Stllogo} alt="stl" />
                <a
                  href={file.url ?? file.file_url ?? file.download_url ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={file.original_name ?? file.name}
                  className="bg-white p-2 cursor-pointer h-fit rounded-sm border flex justify-center items-center hover:bg-gray-50 transition-colors"
                >
                  <GoDownload />
                </a>
              </div>
              <div className="pt-5">
                <h4 className="text-black font-medium text-sm truncate">
                  {file.original_name ?? file.name ?? file.file_name ?? 'Unknown file'}
                </h4>
                <h5 className="text-gray-500 font-medium text-sm">
                  {formatDate(file.last_modified ?? file.created_at ?? file.uploaded_at)}
                </h5>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

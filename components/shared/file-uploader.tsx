'use client'

import { useCallback, Dispatch, SetStateAction } from 'react'
import { UploadDropzone, UploadButton } from '@/lib/uploadthing'
import { useDropzone } from '@uploadthing/react/hooks'
import { generateClientDropzoneAccept } from 'uploadthing/client'

import { Button } from '@/components/ui/button'
import { convertFileToUrl } from '@/lib/utils'
import { FileWithPath } from '@uploadthing/react'

type FileUploaderProps = {
  onFieldChange: (url: string) => void
  imageUrl: string
  setFiles: Dispatch<SetStateAction<File[]>>
}

export function FileUploader({
  imageUrl,
  onFieldChange,
  setFiles,
}: FileUploaderProps) {
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles)
    onFieldChange(convertFileToUrl(acceptedFiles[0]))
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*' ? generateClientDropzoneAccept(['image/*']) : undefined,
  })

  return (
    <div
      {...getRootProps()}
      className="flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50"
    >
      <input {...getInputProps()} className="cursor-pointer" />

      <div>
        {/* <UploadDropzone className="ut-label:text-lg ut-allowed-content:ut-uploading:text-red-300"> */}
        {/* <UploadButton className="mt-4 ut-button:bg-red-500 ut-button:ut-readying:bg-red-500/50" /> */}
        {/* </UploadDropzone> */}
      </div>
    </div>
  )
}

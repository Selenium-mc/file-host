import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import styles from '../styles/upload.module.css';

export default function Upload() {
    const [selectedFile, setSelectedFile] = useState(new Object());

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();

            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onload = () => {
                const formData = new FormData();
                formData.append(
                    "uploadedFile",
                    file,
                    file.name
                );
                axios.post('api/upload', formData);
            }
            reader.readAsArrayBuffer(file)
        });

    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()} className={styles.uploadBox}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
    )
}
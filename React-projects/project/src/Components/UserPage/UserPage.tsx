
import styles from './Userpage.module.scss';
import folderImg from '../assets/folderImg.png';
import Plus from '../assets/Plus.png';
import Upload from '../assets/Upload.png';

export const UserPage = () => {

    const [folders, setFolders] = useState([
        { id: 1, name: 'Documents' },
        { id: 2, name: 'Projects' }
      ]);


    return (
        <>
            <header className={styles.header}>
                <h1>My Drive</h1>
            </header>

            <main className={styles.main}>
                {folders.map(folder=>(
                                    <div key={folder.id} className={styles.folder}>
                                    <img src={folderImg}  />
                                    <h3>{folder.name}</h3>
                                </div>
                ))}
              

            </main>


            <footer className={styles.footer}>
                <div className={styles.uploadFile}>
                    {/* <img src={Upload}  /> */}
                    <label htmlFor="uploadImg"><img src={Upload}/></label>
                    <input type="file" id='uploadImg'/>
                </div>

                <div className={styles.createFolder}>
                    <img src={Plus}/>
                </div>
            </footer>
        </>
    )
}


/*


import { useState } from 'react';
import styles from './Userpage.module.scss';
import folderImg from '../assets/folderImg.png';
import Plus from '../assets/Plus.png';
import Upload from '../assets/Upload.png';

export const UserPage = () => {
  const [folders, setFolders] = useState([
    { id: 1, name: 'Documents' },
    { id: 2, name: 'Projects' }
  ]);

  const [files, setFiles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles([...files, ...uploadedFiles.map(file => file.name)]);
  };

  const handleCreateFolder = () => {
    if (newFolderName.trim() === '') return;
    const newFolder = {
      id: Date.now(),
      name: newFolderName
    };
    setFolders([...folders, newFolder]);
    setNewFolderName('');
    setShowModal(false);
  };

  return (
    <>
      <header className={styles.header}>
        <h1>My Drive</h1>
      </header>

      <main className={styles.main}>
        {folders.map(folder => (
          <div key={folder.id} className={styles.folder}>
            <img src={folderImg} alt="folder" />
            <h3>{folder.name}</h3>
          </div>
        ))}

        {files.map((file, idx) => (
          <div key={idx} className={styles.folder}>
            <img src={Upload} alt="uploaded" />
            <h3>{file}</h3>
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
        <div className={styles.uploadFile}>
          <label htmlFor="uploadImg">
            <img src={Upload} alt="Upload Icon" />
          </label>
          <input
            type="file"
            id="uploadImg"
            multiple
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
        </div>

        <div className={styles.createFolder} onClick={() => setShowModal(true)}>
          <img src={Plus} alt="Add Folder" />
        </div>
      </footer>

     
      {showModal && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>
            <h2>Create New Folder</h2>
            <input
              type="text"
              placeholder="Folder name"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
            />
            <button onClick={handleCreateFolder}>Create</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

*/
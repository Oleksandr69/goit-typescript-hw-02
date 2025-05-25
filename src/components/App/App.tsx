import React, { useState, useEffect } from 'react';
// import { AxiosError } from 'axios';
import toast, { Toaster } from 'react-hot-toast';
// import Modal from 'react-modal';

import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import fetchData from '../../services/api';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

function App() {

  interface Image {
      id: string;
      urls: {
        regular: string;
        small: string;
      };
      alt_description: string;
      likes: string;
      user: {
        name: string;
      }
  };
  interface MyData {
    data: {
      total: number;
      total_pages: number;
      results: Image;
    }
  };

  const [search, setSearch] = useState('');
  const [result, setResult] = useState<Image[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errBul, setErrBul] = useState(false);
  const [modalIsOpen, setModalOpen] = useState(false);
  const [pageMax, setPageMax] = useState(1);
  const [image, setImage] = useState<Image | null>(null);
  const [perPage, setPerPage] = useState(15);
  const notify = (text: string) => toast(text);
  
    
  useEffect(() => {



    async function fetchGallery(): Promise<void> {
      try {
        setLoading(true);
        setErrBul(false);
        setPerPage(15);
        const data: MyData = await fetchData(search, page, perPage);
        setPageMax(data.data.total_pages);
        setResult((prev) => [...prev, ...[data.data.results]]);

      if (data.data.total_pages == 0) {
        notify("Sorry. Nothing found!");
      }
      } catch (error) {
        setErrBul(true);
        notify('error');
        throw error;
      } finally {
            setLoading(false);
        }
    };
    search && fetchGallery();
  }, [search, page, perPage]);


  const handleNewSearch = (searchNew: string): void => {
    setSearch(searchNew);
    setResult([]);
    setPage(1);
  };
  const handleNextPage = () => {
    setPage(page + 1);
    };
  const handleSaveImg = (item: Image) => {
    setImage(item);
  }
  const handleModalOn = () => {
    setModalOpen(true);
  };
  const handleModalOff = () => {
    setModalOpen(false);
  };
  return (
    <div>
        <SearchBar
          onSearch={handleNewSearch}
       />
       
        {search && <ImageGallery
         cardList={result}
         onModal={handleModalOn}
         saveImg={handleSaveImg}
       />
       }

      {loading && <Loader
        loading={loading}
      />}

        {(result.length > 0 && !loading && page < pageMax) && <LoadMoreBtn
         nextPage={handleNextPage}
        />}

         {errBul && <ErrorMessage
         />}
       
       {<ImageModal
          isOpen={modalIsOpen}
          onClose={handleModalOff}
       >
         {modalIsOpen && image !== null && <img src={image.urls.regular} alt={image.alt_description} />}
         </ImageModal>
         } 

        <Toaster
          position="top-right" 
          toastOptions={{
          className: '',
          style: {
          border: '1px solid #713200',
          backgroundColor: 'rgb(236, 12, 12)',
          padding: '8px',
          color: 'rgb(0, 0, 0)',
          fontSize: '20px',
          },
          }}
        />
    </div>
  )
}
export default App



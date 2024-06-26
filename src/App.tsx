import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PodcastProvider } from '@/context/PodcastContext';

// Pages
import Home from '@/pages/home/Home';
import DetailsPage from '@/pages/details/DetailsPodcast';

// Components
import Header from '@/components/Header';

function App() {
  
  return (
    <PodcastProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcast/:podcastId" element={<DetailsPage />} />
          <Route path="/podcast/:podcastId/episode/:episodeId" element={<DetailsPage />} />
        </Routes>
      </Router>
    </PodcastProvider>
  );
}

export default App;
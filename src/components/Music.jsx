import { useRef, useState, useEffect } from "react";
import asawanaAudio from "../assets/audio/Asawana.mp3";
import finishAudio from "../assets/audio/Finish.mp3";
import joRiddimAudio from "../assets/audio/Jo Riddim.mp3";
import onCodeAudio from "../assets/audio/On Code.mp3";
import asawanaCover from "../assets/cover/Asawana.PNG";
import Cover from "../assets/cover/Cover Art.JPG";
import {Play, Pause, SkipForward, SkipBack, X, Music} from "lucide-react"
const tracks = [
  { title: "Asawana", cover: asawanaCover, audio: asawanaAudio },
  { title: "Finish", cover: Cover, audio: finishAudio },
  { title: "Jo Riddim", cover: Cover, audio: joRiddimAudio },
  { title: "On Code", cover: Cover, audio: onCodeAudio },
];

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null); // null = no track yet
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentTrack = currentIndex !== null ? tracks[currentIndex] : null;

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    setProgress((audio.currentTime / audio.duration) * 100 || 0);
  };

  const handleSeek = (e) => {
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const seekTime = (offsetX / rect.width) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
  };

  const playTrack = (index) => {
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  const handleEnd = () => {
    if (currentIndex < tracks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsPlaying(false);
      setProgress(0);
    }
  };

  const closePlayer = () => {
    audioRef.current.pause();
    setCurrentIndex(null);
    setIsPlaying(false);
    setProgress(0);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (currentTrack && isPlaying && audio) {
      audio.load();
      audio.play();
    }
  }, [currentIndex]);

  return (
    <div id="music" className="relative bg-cream">
      {/* 🎶 Playlist Section */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-burnt font-heading">Music Playlist</h2>
        <ul className="space-y-4">
          {tracks.map((track, i) => (
            <li
              key={i}
              className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition ${
                i === currentIndex ? "bg-highlight/20 border border-highlight" : "hover:bg-burnt"
              }`}
              onClick={() => playTrack(i)}
            >
              <img
                src={track.cover}
                alt={track.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <span className="text-lg font-medium font-heading">{track.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 🔊 Bottom Player - only visible when a track is selected */}
      {currentTrack && (
        <div className="fixed bottom-0 flex left-0 w-full bg-black/90 text-white p-4 shadow-lg border-t border-highlight z-50">
          <div className="max-w-full mx-auto flex items-center gap-1 md:gap-6">
            <img
              src={currentTrack.cover}
              alt="Current Track"
              className="w-14 h-14 rounded-md object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold font-body">{currentTrack.title}</h3>
              <div
                className="w-full h-2 bg-white/20 rounded mt-1 cursor-pointer"
                onClick={handleSeek}
              >
                <div
                  className="h-2 bg-highlight rounded"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev > 0 ? prev - 1 : tracks.length - 1))
                }
                className="bg-white/20 px-3 py-1 rounded hover:bg-white/30"
              >
                <SkipBack/>
              </button>
              <button
                onClick={togglePlay}
                className="bg-burnt px-6 py-2 rounded-full font-bold hover:bg-highlight/80"
              >
                {isPlaying ? <Pause/> : <Play/>}
              </button>
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev < tracks.length - 1 ? prev + 1 : 0))
                }
                className="bg-white/20 px-3 py-1 rounded hover:bg-white/30"
              >
                <SkipForward/>
              </button>
              <button
                onClick={closePlayer}
                className="bg-burnt px-4 py-1 rounded-full font-bold hover:bg-red-600 ml-2"
              >
                <X/>
              </button>
            </div>
          </div>

          <audio
            ref={audioRef}
            src={currentTrack.audio}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnd}
            hidden
          />
        </div>
      )}
    </div>
  );
}
